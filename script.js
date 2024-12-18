let button = document.getElementById("button");
let quizC = document.getElementById("quiz-container");
let quizT = document.getElementById("quiz-title");
let choiceG = document.getElementById("choices-grid");
let choiceTL = document.getElementById("choiceTopLeft");
let choiceTR = document.getElementById("choiceTopRight");
let choiceBL = document.getElementById("choiceBottomLeft");
let choiceBR = document.getElementById("choiceBottomRight");
let correct = document.getElementById("correct");
let explain = document.getElementById("explain");
let wrong = document.getElementById("wrong");
let btn = document.getElementById("btn");
let explanation = document.getElementById("explanation");
let oh = document.getElementById("oh");
let sh = document.getElementById("sh");
let th = document.getElementById("th");
let score = document.getElementById("score");
let questions = document.getElementById("questions");
let loading = document.getElementById("loading");
let hr1 = document.getElementById("hr1");
let hr2 = document.getElementById("hr2");
let hr3 = document.getElementById("hr3");
let h1r4 = document.getElementById("h1r4");
let h1r5 = document.getElementById("h1r5");
let h1r6 = document.getElementById("hr6");
let sry = document.getElementById("sorry");
let secret = document.getElementById("secret");

// Initial questions set
const defaultQuestions = [
  {
    question: "If you put your money into your bank account, what is it called?",
    choices: ["Financial donation", "Future spending fund", "Deposit", "Savings"],
    correct: 2,
    explanation: 'The correct term for putting money into your bank account is "deposit" When you deposit money, it’s added to your account balance, allowing you to store funds for future use.',
  },
];

// Second set of questions
const alternateQuestions = [
  {
   question: "Why do we need a budget?",
   choices: ["We can keep up with spending and income.", "budget is crucial because it allows us to experience the excitement of unplanned expenses.", "A budget is great because it makes financial surprises more thrilling.", "A budget is necessary because it helps us discover all the hidden costs we never knew existed."],
   correct: 0,
   explanation: "A budget helps you manage your income and expenses, ensuring you have enough money to meet your needs and save for the future.",
  },
  {
  question: "What is a benefit of money management?",
  choices: ["It will be help with future purchases.", "Money management lets you splurge endlessly without worrying about running out of money.", "Money management means you never have to track your expenses because you'll always have enough money.", "With good money management, you can avoid saving altogether and still achieve financial freedom."],
  correct: 0,
  explanation: '"It will help with future purchases" is correct because money management ensures you save for goals, avoid debt, and stay financially prepared for planned or unexpected expenses.',
  },
];

const thirdQuestions = [
  
];

const fourthQuestions = [
  {
    question: "what is the capital of Italy",
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

const fifthQuestions = [
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

const sixthQuestions = [
  {
    question: "What is the speed of light?",
    choices: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "100,000 km/s"],
    correct: 2,
    explanation: "The speed of light is approximately 299,792 km/s.",
  },
  {
    question: "What is 10 x 10?",
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

let unusedQuestions = [...defaultQuestions];
let unusedQuestions1 = [...alternateQuestions];
let unusedQuestions2 = [...thirdQuestions];
const incorrectQuestions = [];
let currentIncorrectIndex = 0;

function loadRandomQuestion() {
  if (unusedQuestions.length === 0) {
    quizT.textContent = "Making questions...";
    choiceTL.style.display = "none";
    explain.style.display = "block";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    sry.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.innerHTML = "explanation";
    return;
  }

  const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
  const randomQuestion = unusedQuestions.splice(randomIndex, 1)[0];

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

        const hr1 = document.querySelector("#hr1");
        const hr2 = document.querySelector("#hr2");
        const hr3 = document.querySelector("#hr3"); // Select the element by ID
        if (getComputedStyle(hr1).display === "block") {
          explain.disabled = false;
          scoreValue += 100;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(hr2).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(hr3).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (scoreValue >= 900) {
          if (questions1.style.display === "block") {
            form.style.display = "block";
            quizt2.style.display = "none";
          } else {
            form.style.display = "none";
            quizt2.style.display = "block";
            score.style.display = "block";
            setTimeout(() => {
              if(scoreValue === 900) {
                quizT1.textContent = "You score a total of 900 points! You Won the game!";
              } else if (scoreValue >= 900){
                quizT1.textContent = "You score over 900 points! You Won the game!";
              }
              quizT1.style.display = "block";
              quizt2.style.display = "none";
              score.style.display = "block";
            }, 1000);
          }
        }
        setTimeout(() => {
          load1RandomQuestion1();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions.push(randomQuestion);
        setTimeout(() => {
          load1RandomQuestion1();
        }, 1000);
     }
   };
  });
}

function load1RandomQuestion1() {
  if (unusedQuestions1.length === 0) {
    quizT.textContent = "Making questions...";
    choiceTL.style.display = "none";
    explain.style.display = "block";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    sry.style.display = "none";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.innerHTML = "explanation";
    return;
  }

  const randomIndex = Math.floor(Math.random() * unusedQuestions1.length);
  const randomQuestion = unusedQuestions1.splice(randomIndex, 1)[0];

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

        const hr1 = document.querySelector("#hr1");
        const hr2 = document.querySelector("#hr2");
        const hr3 = document.querySelector("#hr3"); // Select the element by ID
        if (getComputedStyle(hr1).display === "block") {
          explain.disabled = false;
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(hr2).display === "block") {
          scoreValue += 100;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(hr3).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (scoreValue >= 900) {
          if (questions1.style.display === "block") {
            form.style.display = "block";
            quizt2.style.display = "none";
          } else {
            form.style.display = "none";
            quizt2.style.display = "block";
            score.style.display = "block";
            setTimeout(() => {
              if(scoreValue === 900) {
                quizT1.textContent = "You score a total of 900 points! You Won the game!";
              } else if (scoreValue >= 900){
                quizT1.textContent = "You score over 900 points! You Won the game!";
              }
              quizT1.style.display = "block";
              quizt2.style.display = "none";
              score.style.display = "block";
            }, 1000);
          }
        }

        setTimeout(() => {
          load1RandomQuestion1();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions.push(randomQuestion);
        setTimeout(() => {
          load1RandomQuestion1();
        }, 1000);
      }
    };
  });
}


function load1RandomQuestion2() {
  if (unusedQuestions2.length === 0) {
    quizT.textContent = "Making questions...";
    choiceTL.style.display = "none";
    explain.style.display = "block";
    choiceTR.style.display = "none";
    choiceBL.style.display = "none";
    btn.style.display = "none";
    sry.style.display = "block";
    choiceBR.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    explain.innerHTML = "explanation";
    return;
  }

  const randomIndex = Math.floor(Math.random() * unusedQuestions2.length);
  const randomQuestion = unusedQuestions2.splice(randomIndex, 1)[0];

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

        const hr1 = document.querySelector("#hr1");
        const hr2 = document.querySelector("#hr2");
        const hr3 = document.querySelector("#hr3"); // Select the element by ID
        if (getComputedStyle(hr1).display === "block") {
          explain.disabled = false;
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(hr2).display === "block") {
          scoreValue += 33;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (getComputedStyle(hr3).display === "block") {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        } else {
          scoreValue += 0;
          score.textContent = `Score: ${scoreValue}`;
        }

        if (scoreValue >= 900) {
          if (questions1.style.display === "block") {
            form.style.display = "block";
            quizt2.style.display = "none";
          } else {
            form.style.display = "none";
            quizt2.style.display = "block";
            score.style.display = "block";
            setTimeout(() => {
              if(scoreValue === 900) {
                quizT1.textContent = "You score a total of 900 points! You Won the game!";
              } else if (scoreValue >= 900){
                quizT1.textContent = "You score over 900 points! You Won the game!";
              }
              quizT1.style.display = "block";
              quizt2.style.display = "none";
              score.style.display = "block";
            }, 1000);
          }
        }


        setTimeout(() => {
          load1RandomQuestion2();
        }, 1000);
      } else {
        choice.style.backgroundColor = "#f23a3a";
        wrong.style.display = "block";
        incorrectQuestions.push(randomQuestion);
        setTimeout(() => {
          load1RandomQuestion2();
        }, 1000);
      }
    };
  });
}

let totalQuestions = 0; // Total questions attempted
let correctAnswers = 0; // Number of correct answers
let userScore = 0; // User's current score
const passPercentage = 75; // Percentage to pass

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let questionsShown = 0; // Theo dõi số câu hỏi đã hiển thị
let scoreValue = 0;

function explainIt() {
  window.history.pushState(null, "", "");
  try {
    explain.innerHTML = '<i class="fas fa-arrow-right"></i>';
    explain.style.background = "none";
    explain.style.boxShadow = "none";
    explain.style.color = "black";
    explanation.style.display = "block";
    explanation.textContent = `Sorry, but we're not done with our questions!`;
    if (
      getComputedStyle(questions).display === "block"
    ) {
      explain.style.display = "none";
      explain2.style.display = "none";
      explain1.style.display = "none";
      explain.textContent = "";
      secret.style.display = "none";
    } else {
      explain.innerHTML = '<i class="fas fa-arrow-right"></i>';
    }


    if (
      incorrectQuestions.length > 0 &&
      questionsShown < incorrectQuestions.length
    ) {
      const questionToShow = incorrectQuestions[questionsShown];
      if (!questionToShow) throw new Error("Missing question data!");

      quizT.textContent = questionToShow.question;
      choiceTL.textContent = questionToShow.choices[0];
      choiceTR.textContent = questionToShow.choices[1];
      choiceBL.textContent = questionToShow.choices[2];
      choiceBR.textContent = questionToShow.choices[3];
      explanation.style.display = "block";
      explanation.textContent = `Explanation: ${questionToShow.explanation}`;

      [choiceTL, choiceTR, choiceBL, choiceBR].forEach((choice) => {
        choice.disabled = true;
        choice.style.backgroundColor = "";
      });

      questionsShown++; // Tăng số câu hỏi đã hiển thị
    } else if (questionsShown >= incorrectQuestions.length) {
      explanation.textContent = "";
      explanation.style.display = "block";

      quizC.style.display = "none";
      button.style.display = "block";
      explain.style.display = "none";
      sorry.style.display = "none";
      oh.style.display = "block";
      secret.style.display = "block";
      btn.style.display = "block";
      btn2.style.display = "block";
      questions.style.display = "block";
      questions1.style.display = "block";
      questions2.style.display = "block";
      sh.style.display = "block";

      // Reset lại biến
      questionsShown = 0;
    } else {
      explanation.textContent = "";
      explanation.style.display = "block";

      // Reset trạng thái
      quizC.style.display = "none";
      button.style.display = "block";
      explain.style.display = "none";
      oh.style.display = "block";
      btn.style.display = "block";
      secret.style.display = "block";
      sorry.style.display = "none";
      btn2.style.display = "block";
      questions.style.display = "block";
      questions1.style.display = "block";
      questions2.style.display = "block";
      sh.style.display = "block";
    }
  } catch (error) {
    console.error("Error in explainIt():", error);
  }
}

explain.addEventListener("click", explainIt);


function showIt() {
  if (getComputedStyle(quizC).display === "none") {
    oh.style.background = "rgb(248, 64, 64)";
    oh.style.color = "white";
    secret.style.display = "none";
    quizC.style.display = "flex";
    quizT.style.display = "block";
    explain1.style.display = "none";
    button.style.display = "none";
    sh.style.display = "none";
    oh.style.display = "none";
    btn.style.display = "none";
    btn2.style.display = "none";
    questions.style.display = "none";
    questions1.style.display = "none";
    questions2.style.display = "none";
    loadRandomQuestion();
    hr1.style.display = "block";
    hr2.style.display = "none";
    hr3.style.display = "none";
  }
}

function showThat() {
  incorrectQuestions.length = 0; // Clear any previous incorrect answers
  currentIncorrectIndex = 0; // Reset the incorrect question index
  sh.style.background = "rgb(248, 64, 64)";
  sh.style.color = "white";
  secret.style.display = "none";
  quizC.style.display = "flex";
  explain1.style.display = "none";
  explain.style.display = "none";
  quizT.style.display = "block";
  button.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  questions.style.display = "none";
  questions2.style.display = "none";
  questions1.style.display = "none";
  load1RandomQuestion1(); // Load a question from the new set
  hr1.style.display = "none";
  hr3.style.display = "none";
  hr2.style.display = "block";
}

function showIt1() {
  incorrectQuestions.length = 0; // Clear any previous incorrect answers
  currentIncorrectIndex = 0; // Reset the incorrect question index
  th.style.background = "rgb(248, 64, 64)";
  secret.style.display = "none";
  th.style.color = "white";
  quizC.style.display = "flex";
  explain1.style.display = "none";
  explain.style.display = "none";
  quizT.style.display = "block";
  hr3.style.display = "block";
  questions.style.display = "none";
  questions2.style.display = "none";
  button.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
  questions1.style.display = "none";
  load1RandomQuestion2();
  hr1.style.display = "none";
  hr2.style.display = "none";
  hr1.style.display = "block";
}

function showIt4() {
  unusedQuestions = [...fifthQuestions]; // Chuyển sang bộ câu hỏi thứ 5
  incorrectQuestions.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  btn.style.display = "none";
  questions.style.display = "none";
  questions1.style.display = "none";
  loadRandomQuestion(); // Tải câu hỏi mới
}

function showIt5() {
  unusedQuestions = [...sixthQuestions]; // Chuyển sang bộ câu hỏi thứ 6
  incorrectQuestions.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  btn.style.display = "none";
  questions.style.display = "none";
  questions1.style.display = "none";
  loadRandomQuestion(); // Tải câu hỏi mới
}

function showIt2() {
  unusedQuestions = [...fourthQuestions]; // Chuyển sang bộ câu hỏi thứ 4
  incorrectQuestions.length = 0; // Xóa các câu trả lời sai trước đó
  currentIncorrectIndex = 0; // Đặt lại chỉ số câu hỏi sai
  quizC.style.display = "flex";
  button.style.display = "none";
  questions.style.display = "none";
  questions1.style.display = "none";
  questions2.style.display = "none";
  btn.style.display = "none";
  loadRandomQuestion(); // Tải câu hỏi mới
}

oh.addEventListener("click", showIt); // Bộ câu hỏi mặc định
sh.addEventListener("click", showThat); // Bộ câu hỏi alternateQuestions
th.addEventListener("click", showIt1); // Bộ câu hỏi thirdQuestions

loading.style.display = "block";

window.addEventListener("load", () => {
  const form = document.getElementById("form");

  loading.style.display = "none";
  setTimeout(function () {
    form.style.display = "block";
    score.style.display = "block";
    secret.style.display = "block";
  }, 100);
});

form.addEventListener("click", function(event) {
  event.preventDefault();
});
questions.addEventListener("click", function() {
window.history.pushState(null, "Personal Finance", "/Personal-finance");
});

explain.addEventListener("click", function() {
  if(questions.style.display === "block"){
  window.history.pushState(null, "/", "/");
  }
});
