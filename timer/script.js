class Timer {
  /**
   *
   * @param {*} time value in second, duration of the timer
   * @param {*} elementId element where the timer will be displayed
   */
  constructor(time, elementId) {
    this.time = time;
    this.elementId = elementId;
    this.display = document.createElement("span");
  }

  /**
   * Add the timer to the element and display the initial time
   */
  displayTimer() {
    this.elementId.appendChild(this.display);
    this.display.innerHTML = this.updateTimerDisplay();
  }

  /**
   * Every 1s, the timer is update
   */
  startTimer() {
    this.intervalId = setInterval(() => {
      this.time--;

      if (this.time < 0) {
        clearInterval(this.intervalId);
        this.display.innerHTML = "Temps écoulé";
      } else {
        this.display.innerHTML = this.updateTimerDisplay();
      }
    }, 1000);
  }

  /**
   * Convert the timer in format "XXm XXs"
   * @returns remaining time of the timer
   */
  updateTimerDisplay() {
    const minutes = Math.floor((this.time % 3600) / 60);
    const remainingSeconds = Math.floor(this.time % 60);
    return `${minutes}m ${remainingSeconds}s`;
  }

  /**
   * Decrease the timer
   * @param {*} malus value in seconds which will decrease to "this.time"
   */
  decreaseTimer(malus) {
    if (this.time > 0) {
      this.time -= malus;
    }
  }
}

// Example
let span = document.getElementById("timer");
let body = document.querySelector("body");
const test = new Timer(10, span);
test.displayTimer();
test.startTimer();
body.addEventListener("click", function () {
  test.decreaseTimer(10);
});
