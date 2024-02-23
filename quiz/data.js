export const data = [
  {
    id: 1,
    title: "En quel année est né Victor Hugo ?",
    type: "qcu",
    timer: 20,
    answers: [
      {
        isAnswer: true,
        title: "1802",
      },
      {
        isAnswer: false,
        title: "1803",
      },
      {
        isAnswer: false,
        title: "1804",
      },
      {
        isAnswer: false,
        title: "1801",
      },
    ],
    explanation: "La réponse était bien 1802.",
  },
  {
    id: 2,
    title: "Qui a peint la Joconde ?",
    type: "qcu",
    timer: 30,
    answers: [
      {
        isAnswer: false,
        title: "Leonardo di ser Piero de Vinci",
      },
      {
        isAnswer: false,
        title: "Leonard di ser Piero da Vinci",
      },
      {
        isAnswer: true,
        title: "Leonardo di ser Piero da Vinci",
      },
      {
        isAnswer: false,
        title: "Leonardo di ser Piera da Vinci",
      },
    ],
    explanation:
      "Tout est une question d'orthographe. C'était bien 'Leonardo di ser Piero da Vinci'.",
  },
  {
    id: 3,
    title: "Quelle peinture n'a pas été peinte par Van Gogh ?",
    type: "qcu",
    timer: 60,
    answers: [
      {
        isAnswer: false,
        title: "Autoportrait",
      },
      {
        isAnswer: false,
        title: "La nuit étoilée",
      },
      {
        isAnswer: false,
        title: "Les Mangeurs de pommes de terre",
      },
      {
        isAnswer: true,
        title: "Terrasse du café le matin",
      },
    ],
    explanation:
      "La réponse était effectivement 'Terrasse du café le matin'. L'oeuvre s'appelle en réalité 'Terrasse du café le soir'.",
  },
];
