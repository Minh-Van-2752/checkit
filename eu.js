let oh1 = document.getElementById("oh1");
let sh1 = document.getElementById("sh1");
let th1 = document.getElementById("th1");
h1r6 = document.getElementById("h1r6");
let questions1 = document.getElementById("questions1");
let explain1 = document.getElementById("explain1");
let quizt2 = document.getElementById("quizT2");                 

// Initial questions set
const defaultQuestions1 = [
  { 
    question:
      "How did the division of Germany after WW2 lead to the rise of world super power?",
    choices: [
      "The division of Germany intensified the Cold War, driving both East and West to seek global alliances and resources.",
      "The division of Germany after WW2 lead to the rise of cold world.",
      "The division of Germany triggered a global race for influence, forcing the USA and USSR to become superpowers.",
      "The division of Germany forced both sides to expand globally to secure allies and resources.",
    ],
    correct: 1,
    explanation:
      "The WW2 which was followed by the division of Germany saw the country being split into West the Germany which was a capitalist country and the East Germany which was a communist country and was patronized by the Soviet Union. This division demonstrated the opposition between the capitalism and communism ideologies. Thus, it laid a foundation of the Cold War where two opposite world powers struggled for dominance.",
  },
  {
    question:
      "Can you explain how the chernobyl affected the people that live in Ukraine closest to the power plant?",
    choices: [
      "There was no effect on the people that lived in Ukraine close to the power plant.",
      "people had developed diseases, such as leukemia and thyroid cancer, and Birth effect which cause deaths, loss of a baby, sickness.",
      "The Chernobyl never happened.",
      "Chernobyl caused acid rain which killed people.",
    ],
    correct: 1,
    explanation:
      "People had developed diseases, such as leukemia and thyroid cancer, and Birth effect which cause deaths, loss of a baby, sickness.",
  },
  {
    question:
      "Where is the Danube River located?",
    choices: [
      "The Danube River is located entirely in Italy.",
      "The Danube River Central and East Europe.",
      "The Danube River is located in South America.",
      "The Danube flows exclusively through France.",
    ],
    correct: 1,
    explanation:
      "The Danube River flows through Central and Eastern Europe, passing through countries like Germany, Austria, Hungary, and Romania before reaching the Black Sea.",
  },
  {
    question:
      "Where is Portugal located?",
    choices: [
      "Portugal is located in South America",
      "Portugal is located in the next to Iberean Peninsula.",
      "Portugal is located in Africa, near Morocco.",
      "Portugal is located in the Middle East, next to Saudi Arabia.",
    ],
    correct: 1,
    explanation:
      "Portugal is located on the Iberian Peninsula, in southwestern Europe, bordered by Spain to the east and north and the Atlantic Ocean to the west and south.",
  },
];

// Second set of questions
const alternateQuestions1 = [
  {
    question: "What is the EU, and how do it member work together?",
    choices: [
      "The purpose of the EU is to promote peace, and economic cooperation it member work to create law, and improving trade",
      "The EU is short for Elephant Union, where countries join forces to protect elephants in Europe.",
      "The EU is a space agency dedicated to sending all its politicians to Mars for important meetings.",
      "The EU is a military alliance where member countries focus exclusively on joint defense missions.",
    ],
    correct: 0,
    explanation:
      "The purpose of the EU is to promote peace, and economic cooperation it member work to create law, and improving trade.",
  },
  {
    question: "What are some Causes of air pollution in the United Kingdom?",
    choices: [
      "Greenhouse gases like carbon dioxide have increased in the atmosphere.",
      "Volcanic eruptions and tropical forest fires release gases that pollute the United Kingdom's air.",
      "Car emission and burning fossil fuels That make gas that is released into the atmosphere.",
      "excessive use of electric vehicles.",
    ],
    correct: 2,
    explanation:
      "Car emissions and burning fossil fuels significantly contribute to air pollution in the UK.",
  },
  {
    question:
      "In vesting in factories Machinery, and technology increases GDP and GDP per capita in the UK, Germany, and Russia?",
    choices: [
      "Countries that invest in technology no longer need natural resources or trade.",
      "Investing factories and technology increases GDP and GDP per capita in the UK, Germany, and Russia.",
      "Investing in factories guarantees zero pollution because new factories are always clean and green.",
      "Investing in factories and technology means robots take over all jobs, and no one in the UK, Germany, or Russia has to work anymore.",
    ],
    correct: 1,
    explanation:
      "Investing factories and technology increases GDP and GDP per capita in the UK, Germany, and Russia.",
  },
  {
    question:
      "How did the aftermath of WW1 cause the rise of communism as a result of the russian revolution, the treaty of versailles, the rise of nazism, and worldwide depression?",
    choices: [
      "The aftermath of WWI caused communism to rise because the Treaty of Versailles gave Russia more power and territory, which led to greater stability.",
      "Russia became communist, Germany suffered after WWI, and economic troubles led to the rise of Nazis. The Great Depression made communism more appealing.",
      "Communism grew after WWI because the worldwide depression made capitalist governments more powerful, leading to the spread of communism.",
      "The aftermath of WWI caused communism to rise because the rise of Nazism in Germany inspired workers in Russia to demand more power.",
    ],
    correct: 1,
    explanation:
      "After WWI, Russia became communist due to the 1917 Russian Revolution, which was fueled by economic and social turmoil. Meanwhile, Germany's suffering from the war and the Treaty of Versailles, combined with the Great Depression, made communism more appealing and contributed to the rise of the Nazis.",
  },
];

const thirdQuestions1 = [
  {
    question: "How does litercy rate impact living standards in Europe?",
    choices: [
      "Countries with high literacy rates have no poverty at all.",
      "Higher literacy rates mean everyone automatically gets a high-paying job.",
      "Higher litercy rate in Europe improve the GDP and a better living condition.",
      "A higher literacy rate means everyone in Europe automatically becomes a millionaire.",
    ],
    correct: 2,
    explanation:
      "Higher litercy rate in Europe improve the GDP and a better living condition.",
  },
  {
    question:
      "How does investing in education and goods affect GDP and GDP per capita in Europe?",
    choices: [
      "Investing in goods automatically doubles the GDP of any European country overnight.",
      "Investing in education means everyone becomes a billionaire overnight, instantly boosting GDP per capita.",
      "Higher education spending means everyone quits their jobs to become full-time students.",
      "Investing in education and goods can grow the economy in my Europe.",
    ],
    correct: 3,
    explanation:
      "Investing in education and goods can grow the economy in my Europe.",
  },
  {
    question:
      "How did the propaganda and the rise of Nazism lead to the Holocaust?",
    choices: [
      "Propaganda and the rise of Nazism manipulated public perception, fostering deep-seated hatred that facilitated the acceptance and execution of the Holocaust.",
      "Nazi propaganda spread fear and hatred by portraying Jews as dangerous enemies, which made the public more accepting of their persecution during the Holocaust.",
      "By using propaganda to falsely link Jews with Germany’s failures, the Nazis were able to rally widespread support for their brutal actions that led to the Holocaust.",
      "The nazi propaganda spread hate leading to the Holocaust.",
    ],
    correct: 3,
    explanation:
      "Nazi propaganda spread hate by portraying Jews as enemies of the state. This fueled public support for the violence and policies that led to the Holocaust.",
  },
];

const fourthQuestions1 = [
  {
    question: "what is the capital of Italy?",
    choices: ["Berlin", "Paris", "Rome", "Madrid"],
    correct: 2,
    explanation: "Rome is the capital of Italy",
  },
  {
    question: "What is 2.5 + 2.5?",
    choices: ["5", "6", "7", "8"],
    correct: 0,
    explanation: "2.5 + 2.5 equals 5.",
  },
  {
    question: "Which language is used for web styles development?",
    choices: ["JavaScript", "Swift", "C++", "CSS"],
    correct: 3,
    explanation:
      "CSS is used for web styles development on computer and mobile.",
  },
];

const fifthQuestions1 = [
  {
    question: "What is the largest planet in our Solar System?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 2,
    explanation: "Jupiter is the largest planet in our Solar System.",
  },
  {
    question: "What is 5 + 5?",
    choices: ["10", "15", "20", "25"],
    correct: 0,
    explanation: "5 + 5 equals 10.",
  },
  {
    question: "Which programming language is most used for data science?",
    choices: ["Python", "Java", "C#", "Swift"],
    correct: 0,
    explanation: "Python is widely used for data science.",
  },
];

const sixthQuestions1 = [
  {
    question: "What is the speed of light?",
    choices: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "100,000 km/s"],
    correct: 2,
    explanation: "The speed of light is approximately 299,792 km/s.",
  },
  {
    question: "What is 10 x 10??",
    choices: ["50", "100", "150", "200"],
    correct: 1,
    explanation: "10 x 10 equals 100.",
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Makeup Language",
      "High Text Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink Text Markup Language",
    ],
    correct: 2,
    explanation: "HTML stands for Hyper Text Markup Language.",
  },
];

let unused1Questions1 = [...defaultQuestions1];
let unused1Questions2 = [...alternateQuestions1];
let unused1Questions3 = [...thirdQuestions1];
let incorrectQuestions1 = [];
let currentIncorrectIndex1 = 0;
explain = document.getElementById("explain");

function loadRandomQuestion1() {
  if (unused1Questions1.length === 0) {
    quizT.textContent = "Questions completed!";
    explain1.style.display = "block";
    explain2.style.display = "none";
    choiceTL.style.display = "none";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain1.innerHTML = "explanantion";
    if(quizT.textContent === "Questions Completed!"){
      quizT.style.top = "65px";
    }
    return;
  }

  const randomIndex = Math.floor(Math.random() * unused1Questions1.length);
  const randomQuestion = unused1Questions1.splice(randomIndex, 1)[0];

  let choices = [...randomQuestion.choices];
  let correctAnswerIndex = randomQuestion.correct;
  choices = shuffleArray(choices);
  let newCorrectIndex = choices.indexOf(
    randomQuestion.choices[correctAnswerIndex],
  );

  quizT.textContent = randomQuestion.question;
  choiceTL.textContent = choices[0];
  choiceTR.textContent = choices[1];
  choiceBL.textContent = choices[2];
  choiceBR.textContent = choices[3];

  [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice) => {
    choice.style.backgroundColor = "";
    choice.disabled = false;
    choice.style.display = "block";
  });

  correctAnswerIndex = randomQuestion.correct;

  correct.style.display = "none";
  wrong.style.display = "none";

  [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice, index) => {
    choice.onclick = () => {
      totalQuestions++;
      [choiceTL, choiceTR, choiceBL, choiceBR].forEach((button) => {
        button.disabled = true;
      });

      if (index === newCorrectIndex) {
        correctAnswers++;
        choice.style.backgroundColor = "#3af249";
        correct.style.display = "block";

        const h1r4 = document.querySelector("#h1r4");
        const h1r5 = document.querySelector("#h1r5");
        let h1r6 = document.querySelector("#h1r6");
        if (getComputedStyle(h1r4).display === "block") {
          scoreValue += 25;
          score.textContent = `Score: ${scoreValue}`;

          explain.style.display = "none";
        } else if (
          h1r4.style.display === "none" &&
          oh1.style.color === "white"
        ) {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h1r5).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h1r6).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (scoreValue >= 1200) {
          if (questions1.style.display === "block") {
            form.style.display = "block";
            quizt2.style.display = "none";
          } else {
            form.style.display = "none";
            quizt2.style.display = "block";
            score.style.display = "block";
            setTimeout(() => {
              if(scoreValue === 1200) {
                quizT1.textContent = "You score a total of 1200 points! You Won the game!";
              } else if (scoreValue >= 1200){
                quizT1.textContent = "You score over 1200 points! You Won the game!";
              }
              quizT1.style.display = "block";
              quizt2.style.display = "none";
              score.style.display = "block";
            }, 1000);
          }
        }
        

        setTimeout(() => {
          loadRandomQuestion1();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions1.push(randomQuestion);
        setTimeout(() => {
          loadRandomQuestion1();
        }, 1000);
      }
    };
  });
}

function loadRandom1Question1() {
  if (unused1Questions2.length === 0) {
    quizT.textContent = "Questions completed!";
    sh1.style.background = "rgb(248, 64, 64)";
    sh1.style.color = "white";
    explain1.style.display = "block";
    choiceTL.style.display = "none";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.1)";
    explain1.innerHTML = "explanation";
    if(quizT.textContent === "Questions Completed!"){
      quizT.style.top = "65px";
    }
    return;
  }

  const randomIndex = Math.floor(Math.random() * unused1Questions2.length);
  const randomQuestion = unused1Questions2.splice(randomIndex, 1)[0];

  let choices = [...randomQuestion.choices];
  let correctAnswerIndex = randomQuestion.correct;
  choices = shuffleArray(choices);
  let newCorrectIndex = choices.indexOf(
    randomQuestion.choices[correctAnswerIndex],
  );

  quizT.textContent = randomQuestion.question;
  choiceTL.textContent = choices[0];
  choiceTR.textContent = choices[1];
  choiceBL.textContent = choices[2];
  choiceBR.textContent = choices[3];

  [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice) => {
    choice.style.backgroundColor = "";
    choice.disabled = false;
    choice.style.display = "block";
  });

  correctAnswerIndex = randomQuestion.correct;

  correct.style.display = "none";
  wrong.style.display = "none";

  [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice, index) => {
    choice.onclick = () => {
      totalQuestions++;
      [choiceTL, choiceTR, choiceBL, choiceBR].forEach((button) => {
        button.disabled = true;
      });

      if (index === newCorrectIndex) {
        correctAnswers++;
        choice.style.backgroundColor = "#3af249";
        correct.style.display = "block";

        const h1r4 = document.querySelector("#h1r4");
        const h1r5 = document.querySelector("#h1r5");
        const h1r6 = document.querySelector("#h1r6");
        if (h1r4.style.display === "block") {
          scoreValue += 25;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (h1r5.style.display === "block") {
          scoreValue += 50;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (h1r6.style.display === "block") {
          scoreValue += 100;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (scoreValue >= 1200) {
          if (questions1.style.display === "block") {
            form.style.display = "block";
            quizt2.style.display = "none";
          } else {
            form.style.display = "none";
            quizt2.style.display = "block";
            score.style.display = "block";
            setTimeout(() => {
              if(scoreValue === 1200) {
                quizT1.textContent = "You score a total of 1200 points! You Won the game!";
              } else if (scoreValue >= 1200){
                quizT1.textContent = "You score over 1200 points! You Won the game!";
              }
              quizT1.style.display = "block";
              quizt2.style.display = "none";
              score.style.display = "block";
            }, 1000);
          }
        }


        setTimeout(() => {
          loadRandom1Question1();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions1.push(randomQuestion);
        setTimeout(() => {
          loadRandom1Question1();
        }, 1000);
      }
    };
  });
}

function loadRandom1Question3() {
  if (unused1Questions3.length === 0) {
    quizT.textContent = "Questions completed!";
    th1.style.background = "rgb(248, 64, 64)";
    th1.style.color = "white";
    explain1.style.display = "block";
    choiceTL.style.display = "none";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.1)";
    explain1.innerHTML = "explanation";
    if(quizT.textContent === "Questions Completed!"){
      quizT.style.top = "65px";
    }
    return;
  }

  const randomIndex = Math.floor(Math.random() * unused1Questions3.length);
  const randomQuestion = unused1Questions3.splice(randomIndex, 1)[0];

  let choices = [...randomQuestion.choices];
  let correctAnswerIndex = randomQuestion.correct;
  choices = shuffleArray(choices);
  let newCorrectIndex = choices.indexOf(
    randomQuestion.choices[correctAnswerIndex],
  );

  quizT.textContent = randomQuestion.question;
  choiceTL.textContent = choices[0];
  choiceTR.textContent = choices[1];
  choiceBL.textContent = choices[2];
  choiceBR.textContent = choices[3];

  [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice) => {
    choice.style.backgroundColor = "";
    choice.disabled = false;
    choice.style.display = "block";
  });

  correctAnswerIndex = randomQuestion.correct;

  correct.style.display = "none";
  wrong.style.display = "none";

  [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice, index) => {
    choice.onclick = () => {
      totalQuestions++;
      [choiceTL, choiceTR, choiceBL, choiceBR].forEach((button) => {
        button.disabled = true;
      });

      if (index === newCorrectIndex) {
        correctAnswers++;
        choice.style.backgroundColor = "#3af249";
        correct.style.display = "block";

        const h1r4 = document.querySelector("#h1r4");
        const h1r5 = document.querySelector("#h1r5");
        const h1r6 = document.querySelector("#h1r6");
        if (getComputedStyle(h1r4).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;

          explain.style.display = "none";
        } else if (
          h1r4.style.display === "none" &&
          oh1.style.color === "white"
        ) {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h1r5).display === "block") {
          scoreValue += 35;
          score.textContent = `Score: ${scoreValue}`;
        } else if (
          h1r5.style.display === "none" &&
          sh1.style.color === "white"
        ) {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h1r6).display === "block") {
          scoreValue += 100;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (scoreValue >= 1200) {
          if (questions1.style.display === "block") {
            form.style.display = "block";
            quizt2.style.display = "none";
          } else {
            form.style.display = "none";
            quizt2.style.display = "block";
            score.style.display = "block";
            setTimeout(() => {
              if(scoreValue === 1200) {
                quizT1.textContent = "You score a total of 1200 points! You Won the game!";
              } else if (scoreValue >= 1200){
                quizT1.textContent = "You score over 1200 points! You Won the game!";
              }
              quizT1.style.display = "block";
              quizt2.style.display = "none";
              score.style.display = "block";
            }, 1000);
          }
        }
        setTimeout(() => {
          loadRandom1Question3();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions1.push(randomQuestion);
        setTimeout(() => {
          loadRandom1Question3();
        }, 1000);
      }
    };
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let questionsShown1 = 0;

function explain1It() {
  try {
    explain1.innerHTML = '<i class="fas fa-arrow-right"></i>';
    explain1.style.background = "none";
    explain1.style.boxShadow = "none";
    explain1.style.color = "black";
    explain.style.display = "none";
    quizT.textContent = "";
    quizT.style.display = "none";

    if (questions1.style.display === "block") {
      explain1.style.display = "none";
      explain.style.display = "none";
      explain2.style.display = "none";
      explain1.textContent = "";
      secret.style.display = "none";
    } else {
      explain1.innerHTML = '<i class="fas fa-arrow-right"></i>';
    }

    if (Array.isArray(incorrectQuestions1) && incorrectQuestions1.length > 0) {
      if (questionsShown1 < incorrectQuestions1.length) {
        const questionToShow = incorrectQuestions1[questionsShown1];
        quizT.textContent = questionToShow.question;
        quizT.style.display = "block";
        choiceTL.textContent = questionToShow.choices[0];
        choiceTR.textContent = questionToShow.choices[1];
        choiceBL.textContent = questionToShow.choices[2];
        choiceBR.textContent = questionToShow.choices[3];
        explanation.textContent = `Explanation: ${questionToShow.explanation}`;
        explanation.style.display = "block";

        questionsShown1++; // Move to the next question on next click
      } else {
        explanation.textContent = "";
        explanation.style.display = "block";

        quizC.style.display = "none";
        button.style.display = "block";
        oh.style.display = "block";
        questions.style.display = "block";
        explain1.style.display = "none";
        questions2.style.display = "block";
        btn.style.display = "block";
        btn2.style.display = "block";
        questions1.style.display = "block";
        secret.style.display = "block";
        oh1.style.display = "block";
        sh1.style.display = "block";
        th1.style.display = "block";
        oh2.style.display = "block";
        sh2.style.display = "block";
        th2.style.display = "block";
        sh.style.display = "block";

        questionsShown1 = 0;
      }
    } else {
      explanation.textContent = "";
      explanation.style.display = "block";

      quizC.style.display = "none";
      button.style.display = "block";
      explain1.innerHTML = '<i class="fas fa-arrow-right"></i>';
      explain1.style.display = "none";
      oh.style.display = "block";
      questions.style.display = "block";
      questions2.style.display = "block";
      btn.style.display = "block";
      btn2.style.display = "block";
      questions1.style.display = "block";
      secret.style.display = "block";
      oh1.style.display = "block";
      sh1.style.display = "block";
      th1.style.display = "block";
      oh2.style.display = "block";
      sh2.style.display = "block";
      th2.style.display = "block";
      sh.style.display = "block";
    }
  } catch (error) {
    console.error("Error in explain1It():", error);
  }
}

explain1.addEventListener("click", explain1It);

function show1It() {
  oh1.style.background = "rgb(248, 64, 64)";
  oh1.style.color = "white";
  quizT.style.display = "block";
  explain1.style.display = "none";
  quizC.style.display = "flex";
  secret.style.display = "none";
  explain.style.display = "none";
  button.style.display = "none";
  sh1.style.display = "none";
  oh1.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  questions.style.display = "none";
  questions1.style.display = "none";
  questions2.style.display = "none";
  loadRandomQuestion1();
  h1r4.style.display = "block";
  h1r5.style.display = "none";
  h1r6.style.display = "none";
}

function show1That() {
  // When "sh1" is pressed, switch to the alternate set of questions1
  incorrectQuestions1.length = 0; // Clear any previous incorrect answers
  currentIncorrectIndex1 = 0; // Reset the incorrect question index
  sh1.style.background = "rgb(248, 64, 64)";
  sh1.style.color = "white";
  secret.style.display = "none";
  quizT.style.display = "block";
  explain1.style.display = "none";
  explain1.innerHTML = "explanantion";
  quizC.style.display = "flex";
  explain.style.display = "none";
  button.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  questions2.style.display = "none";
  loadRandom1Question1();
  h1r4.style.display = "none";
  h1r5.style.display = "block";
  h1r6.style.display = "none";
}

function show1It1() {
  incorrectQuestions1.length = 0; // Reset incorrect answers
  currentIncorrectIndex1 = 0; // Reset index for incorrect answers
  th1.style.background = "rgb(248, 64, 64)";
  th1.style.color = "white";
  secret.style.display = "block";
  quizT.style.display = "block";
  explain1.style.display = "none";
  explain1.innerHTML = "explanantion";
  quizC.style.display = "flex";
  explain.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  questions2.style.display = "none";
  button.style.display = "none";
  btn.style.display = "none";
  loadRandom1Question3();
  btn2.style.display = "none";
  h1r4.style.display = "none";
  h1r5.style.display = "none";
  h1r6.style.display = "block";
}

function show1It4() {
  unused1Questions1 = [...defaultQuestions1]; // Chuyển sang bộ câu hỏi thứ 5
  incorrectQuestions1.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex1 = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  btn.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  loadRandomQuestion1(); // Tải câu hỏi mới
}

function show1It5() {
  unused1Questions1 = [...defaultQuestions1]; // Chuyển sang bộ câu hỏi thứ 6
  incorrectQuestions1.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex1 = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  btn.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  loadRandomQuestion1(); // Tải câu hỏi mới
}

function show1It2() {
  unused1Questions1 = [...defaultQuestions1]; // Chuyển sang bộ câu hỏi thứ 4
  incorrectQuestions1.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex1 = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  btn.style.display = "none";
  loadRandomQuestion1(); // Tải câu hỏi mới
}

oh1.addEventListener("click", show1It); // Bộ câu hỏi mặc định
sh1.addEventListener("click", show1That); // Bộ câu hỏi alternateQuestions1
th1.addEventListener("click", show1It1); // Bộ câu hỏi thirdQuestions1

loading.style.display = "block";

questions1.addEventListener("click", function() {
window.history.pushState(null, "European Union Geography/History", "/eu-geography-history");
});

explain1.addEventListener("click", function() {
  if(questions1.style.display === "block"){
  window.history.pushState(null, "/", "/");
  }
});
