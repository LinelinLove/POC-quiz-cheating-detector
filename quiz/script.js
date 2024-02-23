import { data } from "./data.js";
import { Timer } from "../timer/script.js";
import { TabFocusTracking } from "../tab-focus-tracking/index.js";
// import { ShortcutInhibitor } from "../shortcut-inhibiteur";

class Quiz {
  constructor(data) {
    this.data = data;
    // this.timer = new Timer();
  }

  showQuestion() {
    const tabFocusTrack = new TabFocusTracking(() => {
      document.querySelector("h1").textContent = "Triche";
    });
    data.forEach((question) => {
      let p = document.createElement("p");
      p.innerHTML = `Question ${question.id} : ${question.title}`;

      let divTimer = document.createElement("div");
      divTimer.innerHTML = "";
      let test = new Timer(question.timer, divTimer);
      test.displayTimer();
      test.startTimer();

      p.appendChild(divTimer);
      document.body.appendChild(p);

      question.answers.forEach((anwser) => {
        let div = document.createElement("div");
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = anwser.title;
        radio.id = anwser.title;
        radio.setAttribute("name", `answer${question.id}`);

        let label = document.createElement("label");
        label.setAttribute("for", anwser.title);
        label.innerHTML = anwser.title;

        div.appendChild(radio);
        div.appendChild(label);
        document.body.appendChild(div);
      });

      let button = document.createElement("button");
      button.innerHTML = "Afficher explication";
      document.body.appendChild(button);

      let displayAns = document.createElement("div");
      document.body.appendChild(displayAns);

      button.addEventListener(
        "click",
        () => {
          displayAns.appendChild(this.displayAnswer(question.explanation));
          console.log(question.explanation);
        },
        { once: true }
      );
    });
  }

  displayAnswer(explanation) {
    let p = document.createElement("p");
    p.innerHTML = explanation;
    return p;
  }

  init() {
    this.showQuestion();
  }
}

// Example
let quiz = new Quiz(data);
quiz.init();
