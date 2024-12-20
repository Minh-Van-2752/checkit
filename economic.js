let oh2 = document.getElementById("oh2");
let sh2 = document.getElementById("sh2"); 
let th2 = document.getElementById("th2");
let h2r7 = document.getElementById("h2r7");
let h2r8 = document.getElementById("h2r8");
let h2r9 = document.getElementById("h2r9");
let questions2 = document.getElementById("questions2");
let explain2 = document.getElementById("explain2");
let btn2 = document.getElementById("btn2");
let quizT1 = document.getElementById("quizT1"); 

// Initial questions set
const defaultQuestions2 = [
  {
    question:
      "What do you think about the Natural resources of Germany, the UK and Russia impacting trade?",
    choices: [
      "Germany and the UK have impact on only on natural resources while russia has both impact on natural resources.",
      "The natural resources of Germany, the UK, and Russia have shaped their economies, and trade in different ways.",
      "It does not impact Germany, the UK, and Russia.",
      "Germany does not have any impact on natural resources and trade while the UK , and Russia does.",
    ],
    correct: 1,
    explanation:
      "The natural resources of Germany, the UK, and Russia have shaped their economies, and trade in different ways.",
  },
  {
    question:
      "How are the UK Germany, and Russia democratic government plat a role in citizen participation?",
    choices: [
      "Citizen in Russia, and Germany has more freedom while in the UK it limited.",
      "Citizen in the UK, and Germany has more freedom while in Russia it limited.",
      "Citizen in the UK, and Russia has more freedom while Germany it limited.",
      "Citizen in Germany has more freedom while in the Russia, and UK it limited.",
    ],
    correct: 1,
    explanation:
      "Citizen in the UK, and Germany has more freedom while in Russia it limited.",
  },
];

// Second set of questions
const alternateQuestions2 = [
  {
    question:
      "How do traditional economies and market economies 1. What to produce. 2. How to produce. 3. For whom to produce.",
    choices: [
      "Traditional rely on custom and shared practices. Market rely on individual choice and supply and demand.",
      "Traditional rely on individual choice and supply and demand. Market rely on custom and shared practices.",
      "Traditional and Market rely on individual choice and supply and demand.",
      "Traditional and Market rely on custom and shared practices.",
    ],
    correct: 0,
    explanation:
      "Traditional rely on custom and shared pratices. Market rely on individual choice and supply and demand.",
  },
  {
    question:
      "What are the differences and similarities between parlimentary and presidential system of government?",
    choices: [
      "In a presidential government, the prime minister is chosen and can be removed by the parliament. But in a parlimentary government, the president is elected.",
      "In a parilimentary government, the prime minister is chosen and can be removed by the parliament. But in a presidential government, the president is elected.",
      "In the parilimetary government and presidential government, the prime minister is chosen and can be removed by the parliament.",
      "In the presidential government and parilimentary government, the president is elected.",
    ],
    correct: 1,
    explanation:
      "In a parilimentary government, the prime minister is chosen and can be removed by the parliament. But in a presidential government, the president is elected.",
  },
];

const thirdQuestions2 = [
  {
    question:
      "How are the economic system of the UK, Germany, and Russia simular and different?",
    choices: [
      "Germany and Russia have private bussiness, like heathcare. UK has moregovernment control over move industries.",
      "UK and Germany have private bussiness, like heathcare. Russia has more government control over move industries.",
      "Germany has private bussiness, like heathcare, UK and Russia have more government control over move industries.",
      "UK and Russia have private bussiness, like heathcare. Germany has more government control over move industries.",
    ],
    correct: 1,
    explanation:
      "UK and Germany have private bussiness, like heathcare. Russia has more government control over move industries.",
  },
  {
    question: "What are tariff, quotas and embargoes?",
    choices: [
      "Tariff limits on import. Quotas tax on import. Embargoes ban on trade.",
      "Tariff ban on trade. Quotas tax on import. Embargoes limits on import.",
      "Tariff limits on import. Quotas ban on trade. Embargoes tax on import.",
      "Tariff tax on import. Quotas limits on import. Embargoes ban on trade.",
    ],
    correct: 3,
    explanation:
      "Tariff tax on import. Quotas limits on import. Embargoes ban on trade.",
  },
];

let unused2Questions2 = [...defaultQuestions2];
let unused2Questions3 = [...alternateQuestions2];
let unused2Questions4 = [...thirdQuestions2];
let incorrectQuestions2 = [];
let currentIncorrectIndex2 = 0;

function loadRandom2Question1() {
  if (unused2Questions2.length === 0) {
    quizT.textContent = "Questions completed!";
    explain2.style.display = "block";
    choiceTL.style.display = "none";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    if(quizT.textContent === "Questions Completed!"){
      quizT.style.top = "65px";
    }
    return;
  }
  const randomIndex = Math.floor(Math.random() * unused2Questions2.length);
  const randomQuestion = unused2Questions2.splice(randomIndex, 1)[0];

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

        const h2r7 = document.querySelector("#h2r7");
        const h2r8 = document.querySelector("#h2r8");
        const h2r9 = document.querySelector("#h2r9");
        if (getComputedStyle(h2r7).display === "block") {
          scoreValue += 50;
          score.textContent = `Score: ${scoreValue}`;

          explain.style.display = "none";
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h2r8).display === "block") {
          scoreValue += 35;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h2r9).display === "block") {
          scoreValue += 35;
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
          loadRandom2Question1();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions2.push(randomQuestion);
        setTimeout(() => {
          loadRandom2Question1();
        }, 1000);
      }
    };
  });
}

function loadRandom2Question2() {
  if (unused2Questions3.length === 0) {
    quizT.textContent = "Questions completed!";
    explain2.style.display = "block";
    choiceTL.style.display = "none";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.1)";
    if(quizT.textContent === "Questions Completed!"){
      quizT.style.top = "65px";
    }
    return;
  }
  const randomIndex = Math.floor(Math.random() * unused2Questions3.length);
  const randomQuestion = unused2Questions3.splice(randomIndex, 1)[0];

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

        const h2r7 = document.querySelector("#h2r7");
        const h2r8 = document.querySelector("#h2r8");
        const h2r9 = document.querySelector("#h2r9");
        if (getComputedStyle(h2r7).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;

          explain.style.display = "none";
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h2r8).display === "block") {
          scoreValue += 100;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h2r9).display === "block") {
          scoreValue += 35;
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
          loadRandom2Question2();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions2.push(randomQuestion);
        setTimeout(() => {
          loadRandom2Question2();
        }, 1000);
      }
    };
  });
}

function loadRandom2Question3() {
  if (unused2Questions4.length === 0) {
    quizT.textContent = "Questions completed!";
    explain2.style.display = "block";
    choiceTL.style.display = "none";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.1)";
    if(quizT.textContent === "Questions Completed!"){
      quizT.style.top = "65px";
    }
    return;
  }
  const randomIndex = Math.floor(Math.random() * unused2Questions4.length);
  const randomQuestion = unused2Questions4.splice(randomIndex, 1)[0];

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

        const h2r7 = document.querySelector("#h2r7");
        const h2r8 = document.querySelector("#h2r8");
        const h2r9 = document.querySelector("#h2r9");
        if (getComputedStyle(h2r7).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;

          explain.style.display = "none";
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h2r8).display === "block") {
          scoreValue += 35;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(h2r9).display === "block") {
          scoreValue += 150;
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
          loadRandom2Question3();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions2.push(randomQuestion);
        setTimeout(() => {
          loadRandom2Question3();
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

let questionsShown2 = 0;

function explain1It1() {
  try {
    explain2.innerHTML = '<i class="fas fa-arrow-right"></i>';
    explain2.style.background = "none";
    explain2.style.boxShadow = "none";
    explain2.style.color = "black";
    explain1.style.display = "none";
    explain.style.display = "none";
    quizT.textContent = "";
    quizT.style.display = "none";

    if (getComputedStyle(questions2).display === "block") {
      explain2.style.display = "none";
      explain1.style.display = "none";
      explain.style.display = "none";
      explain2.textContent = "";
      secret.style.display = "none";
    } else {
      explain2.innerHTML = '<i class="fas fa-arrow-right"></i>';
    }

    if (Array.isArray(incorrectQuestions2) && incorrectQuestions2.length > 0) {
      if (questionsShown2 < incorrectQuestions2.length) {
        const questionToShow = incorrectQuestions2[questionsShown2];
        quizT.textContent = questionToShow.question;
        quizT.style.display = "block";
        choiceTL.textContent = questionToShow.choices[0];
        choiceTR.textContent = questionToShow.choices[1];
        choiceBL.textContent = questionToShow.choices[2];
        choiceBR.textContent = questionToShow.choices[3];
        explanation.textContent = `Explanation: ${questionToShow.explanation}`;
        explanation.style.display = "block";

        questionsShown2++; // Move to the next question on next click
      } else {
        explanation.textContent = "";
        explanation.style.display = "block";

        quizC.style.display = "none";
        button.style.display = "block";
        oh.style.display = "block";
        questions.style.display = "block";
        secret.style.display = "block";
        questions2.style.display = "block";
        btn.style.display = "block";
        explain2.style.display = "none";
        btn2.style.display = "block";
        questions1.style.display = "block";
        oh1.style.display = "block";
        sh1.style.display = "block";
        th1.style.display = "block";
        oh2.style.display = "block";
        sh2.style.display = "block";
        th2.style.display = "block";
        sh.style.display = "block";

        questionsShown2 = 0;
      }
    } else {
      explanation.textContent = "";
      explanation.style.display = "block";

      quizC.style.display = "none";
      button.style.display = "block";
      explain1.innerHTML = '<i class="fas fa-arrow-right"></i>';
      oh.style.display = "block";
      explain2.style.display = "none";
      questions.style.display = "block";
      questions2.style.display = "block";
      secret.style.display = "block";
      btn.style.display = "block";
      btn2.style.display = "block";
      questions1.style.display = "block";
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

explain2.addEventListener("click", explain1It1);

function show2It() {
  oh2.style.background = "rgb(248, 64, 64)";
  oh2.style.color = "white";
  quizT.style.display = "block";
  explain2.style.display = "none";
  secret.style.display = "none";
  quizC.style.display = "flex";
  explain1.style.display = "none";
  explain.style.display = "none";
  button.style.display = "none";
  sh2.style.display = "none";
  oh2.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  questions.style.display = "none";
  questions1.style.display = "none";
  questions2.style.display = "none";
  loadRandom2Question1();
  h2r7.style.display = "block";
  h2r8.style.display = "none";
  h2r9.style.display = "none";
}

function show2That() {
  incorrectQuestions2.length = 0; // Clear any previous incorrect answers
  currentIncorrectIndex2 = 0; // Reset the incorrect question index
  sh2.style.background = "rgb(248, 64, 64)";
  sh2.style.color = "white";
  secret.style.display = "none";
  quizT.style.display = "block";
  explain2.style.display = "none";
  explain1.style.display = "none";
  explain2.innerHTML = "explanantion";
  quizC.style.display = "flex";
  explain.style.display = "none";
  button.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  questions2.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  loadRandom2Question2(); // Load a question from the new set
  h2r7.style.display = "none";
  h2r8.style.display = "block";
  h2r9.style.display = "none";
}

function show2It1() {
  incorrectQuestions2.length = 0; // Reset incorrect answers
  currentIncorrectIndex2 = 0; // Reset index for incorrect answers
  th2.style.background = "rgb(248, 64, 64)";
  th2.style.color = "white";

  // Ensure all necessary elements are displayed or hidden as needed
  quizT.style.display = "block";
  explain2.style.display = "none";
  explain2.innerHTML = "explanantion";
  secret.style.display = "none";
  quizC.style.display = "flex";
  explain.style.display = "none";
  explain1.style.display = "none";
  questions2.style.display = "none";
  questions1.style.display = "none";
  questions.style.display = "none";
  button.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  loadRandom2Question3(); // Start loading the new set of questions
  h2r7.style.display = "none";
  h2r8.style.display = "none";
  h2r9.style.display = "block";
}

function show1It4() {
  unused2Questions2 = [...defaultQuestions2]; // Chuyển sang bộ câu hỏi thứ 5
  incorrectQuestions2.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex2 = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  btn.style.display = "none";
  questions2.style.display = "none";
  questions.style.display = "none";
  loadRandomQuestion2(); // Tải câu hỏi mới
}

function show1It5() {
  unused2Questions2 = [...defaultQuestions2]; // Chuyển sang bộ câu hỏi thứ 6
  incorrectQuestions2.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex2 = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  btn.style.display = "none";
  questions2.style.display = "none";
  questions.style.display = "none";
  loadRandomQuestion2(); // Tải câu hỏi mới
}

function show1It2() {
  unused2Questions2 = [...defaultQuestions2]; // Chuyển sang bộ câu hỏi thứ 4
  incorrectQuestions2.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex2 = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  questions2.style.display = "none";
  questions.style.display = "none";
  btn.style.display = "none";
  loadRandomQuestion2(); // Tải câu hỏi mới
}

oh2.addEventListener("click", show2It); // Bộ câu hỏi mặc định
sh2.addEventListener("click", show2That); // Bộ câu hỏi alternateQuestions2
th2.addEventListener("click", show2It1); // Bộ câu hỏi thirdQuestions2

questions2.addEventListener("click", function() {
  window.location.href = "/eu-economic";
});

explain2.addEventListener("click", function() {
  if(questions2.style.display === "block"){
  window.location.href = "/";
  }
});

questions2.addEventListener("click", function(event){
  event.preventDefault();
}
