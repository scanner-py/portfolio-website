let playerScore = 0;
let computerScore = 0;
const computerChoice = (playerChoice) => {
  const choices = ["rock", "paper", "scissors"];
  const computerChoices = choices[Math.floor(Math.random() * choices.length)];
  const result = winner(playerChoice, computerChoices);

  scoreUpdate(result);
  document.getElementById(
    "player-score"
  ).innerText = `Your Score : ${playerScore}`;

  document.getElementById(
    "Computer-score"
  ).innerText = `Computer Score : ${computerScore}`;

  finalResult();
};

const winner = (player, computer) => {
  if (player === "rock") {
    document.querySelector(
      ".choosed"
    ).innerHTML = `<button class="display-your-choice" id="rockC"></button>`;
  } else if (player === "paper") {
    document.querySelector(
      ".choosed"
    ).innerHTML = `<button class="display-your-choice" id="paperC"></button>`;
  } else if (player === "scissors") {
    document.querySelector(
      ".choosed"
    ).innerHTML = `<button class="display-your-choice" id="scissorsC"></button>`;
  }

  if (computer === "rock") {
    document.querySelector(
      ".choosed-by-computer"
    ).innerHTML = `<button class="display-computer-choice" id="rockCM"></button>`;
  } else if (computer === "paper") {
    document.querySelector(
      ".choosed-by-computer"
    ).innerHTML = `<button class="display-computer-choice" id="paperCM"></button>`;
  } else if (computer === "scissors") {
    document.querySelector(
      ".choosed-by-computer"
    ).innerHTML = `<button class="display-computer-choice" id="scissorsCM"></button>`;
  }

  if (player === computer) {
    return "Tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "loose";
  }
};

const scoreUpdate = (result) => {
  if (result === "win") {
    playerScore++;
  } else if (result === "loose") {
    computerScore++;
  }
};

const finalResult = () => {
  if (playerScore === 3) {
    const updatePage = document.getElementsByTagName("body")[0];
    updatePage.innerHTML = `<h1>Computer Wins</h1>\n <p id="display-score"> Your Score : ${playerScore} vs Computer Score : ${computerScore}\n<button onclick="refreshpage()" id="play-again-btn">Replay</button>`;
  } else if (computerScore === 3) {
    const updatePage = document.getElementsByTagName("body")[0];
    updatePage.innerHTML = `<h1>Computer Wins</h1>\n <p id="display-score"> Your Score : ${playerScore} vs Computer Score : ${computerScore}\n<button onclick="refreshpage()" id="play-again-btn">Replay</button>`;
  }

  if (playerScore === 3 || computerScore === 3) {
    playerScore = 0;
    computerScore = 0;
  }
};

const refreshpage = () => {
  location.reload();
};

// const renderChoice = (p, c) => {

// };

// some extra functions

/*
const renderFinalWinner = () => {
  if (playerScore === 3) {
    const updatePage = document.querySelector(".container");
    updatePage.innerHTML = `<h1>You Win</h1>`;
  } else if (computerScore === 3) {
    const updatePage = document.querySelector(".container");
    updatePage.innerHTML = `<h1>Computer Wins</h1>`;
  }
};
*/
