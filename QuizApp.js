/**Creating data set */

const kuler = require("kuler");
let readlineSync = require("readline-sync");

let userscore = 0;
let userName = readlineSync.question("What's Your Name: ");
console.log(kuler(`\nWelcome ${userName} To QuizeApp`, "#ff0000"));

const database = {
  categories: [
    {
      categoryName: "JavaScript",
      data: [
        {
          question:
            `let a={}, b{} \nconsole.log(a==b) \nconsole.log(a===b)`,
          options: {
            a: "false false",
            b: "false true",
            c: "true false",
            d: "true true",
          },
          correctAnswer: "a",
        },
        {
          question: "Object.assign(target, source) creates which type of copy?",
          options: {
            a: "Deep Copy",
            b: "Shallow Copy",
            c: "Nested Copy",
            d: "Creates a new reference",
          },
          correctAnswer: "b",
        },
        {
          question: "Is method chaining possible with forEach?",
          options: {
            a: "Yes",
            b: "No",
          },
          correctAnswer: "b",
        },
        {
          question: "What does 'use strict' do?",
          options: {
            a: "Enables strict mode",
            b: "Defines strict rules for coding",
            c: "Both A and B",
            d: "None of the above",
          },
          correctAnswer: "c",
        },
        {
          question: "Which method is used to combine two arrays in JavaScript?",
          options: {
            a: "concat()",
            b: "merge()",
            c: "combine()",
            d: "join()",
          },
          correctAnswer: "a",
        },
      ],
    },
    {
      categoryName: "HTML",
      data: [
        {
          question: "Which HTML element is used for the largest heading?",
          options: {
            a: "<h1>",
            b: "<h2>",
            c: "<h3>",
            d: "<h4>",
          },
          correctAnswer: "a",
        },
        {
          question: "Which tag is used to create a hyperlink?",
          options: {
            a: "<link>",
            b: "<a>",
            c: "<href>",
            d: "<url>",
          },
          correctAnswer: "b",
        },
        {
          question: "What does the <meta> tag do?",
          options: {
            a: "Defines metadata for a webpage",
            b: "Defines the title of a webpage",
            c: "Defines the script of a webpage",
            d: "None of the above",
          },
          correctAnswer: "a",
        },
        {
          question: "Which attribute is used to provide an alternate text for an image?",
          options: {
            a: "src",
            b: "alt",
            c: "title",
            d: "image",
          },
          correctAnswer: "b",
        },
        {
          question: "Which HTML tag is used to define a list item?",
          options: {
            a: "<li>",
            b: "<ul>",
            c: "<ol>",
            d: "<list>",
          },
          correctAnswer: "a",
        },
      ],
    },
    {
      categoryName: "CSS",
      data: [
        {
          question: "Which CSS property is used to change the text color?",
          options: {
            a: "color",
            b: "background-color",
            c: "font-color",
            d: "text-color",
          },
          correctAnswer: "a",
        },
        {
          question: "What is the default value of the position property?",
          options: {
            a: "absolute",
            b: "relative",
            c: "static",
            d: "fixed",
          },
          correctAnswer: "c",
        },
        {
          question: "Which property is used to set the space between the lines of text?",
          options: {
            a: "line-height",
            b: "text-align",
            c: "padding",
            d: "margin",
          },
          correctAnswer: "a",
        },
        {
          question: "What does the z-index property do?",
          options: {
            a: "Sets the vertical position",
            b: "Sets the stacking order of elements",
            c: "Sets the horizontal position",
            d: "None of the above",
          },
          correctAnswer: "b",
        },
        {
          question: "Which CSS property is used to control the layout of a page?",
          options: {
            a: "position",
            b: "display",
            c: "flex",
            d: "width",
          },
          correctAnswer: "b",
        },
      ],
    },
  ],
};

const leaderBoard = {
  data: [
    {
      playerName: "Siddhesh",
      score: 1,
    },
    {
      playerName: "Mahesh",
      score: 2,
    },
    {
      playerName: "Sakshi",
      score: 3,
    },
  ],
};

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#00b900"));
    userscore++;
  } else {
    console.log("Incorrect Answer");
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#00b900"));
  }
}

function showQuestionsAndOptions(category) {
  for (let i = 0; i < category.data.length; i++) {
    console.log(`\nQuestion No [${i + 1}] : ${category.data[i].question}\n`);
    for (let key in category.data[i].options) {
      console.log(`[${key}]  ${category.data[i].options[key]}`);
    }
    let userAnswer = readlineSync.question("Enter Answer - (a/b/c/d): ").toLowerCase();
    playGame(userAnswer, category.data[i].correctAnswer);
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ playerName: userName, score: userscore });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck Your Score 💯💯", "#ffff00"));
  console.log(kuler("Score Board", "#ffff00"));
  console.table(sortedScoreList);
}

function chooseCategory() {
  console.log(kuler("Choose a Category", "#ff4500"));
  for (let i = 0; i < database.categories.length; i++) {
    console.log(`[${i + 1}] ${database.categories[i].categoryName}`);
  }
  let categoryChoice = readlineSync.question("Enter category number: ");
  return database.categories[categoryChoice - 1];
}

let selectedCategory = chooseCategory();
showQuestionsAndOptions(selectedCategory);
console.log(kuler(`\nYour Score Is: ${userscore}\n`, "#ffff00"));
showHighScorer(leaderBoard);
