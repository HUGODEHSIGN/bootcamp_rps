// -dependencies

// -data
// total wins, ties, and losses
// how many times user clicked on each option

// *get user input

// prompt if user's input is invalid

// generate computer's choice

// compare computer and user's choice

// update application data

// show data

// give user the choice to play again

// go back to first step
let playing = true;
const gameData = {
  wins: 0,
  loss: 0,
  tie: 0,
  r: 0,
  p: 0,
  s: 0,
};

function getUserInput() {
  let gettingAnswer = true;
  const validAnswers = ['r', 'p', 's'];
  while (gettingAnswer) {
    const userInput = prompt(
      'Please input your choice using "r", "p", or "s".'
    ).toLowerCase();

    if (!validAnswers.includes(userInput)) {
      alert('Please input either "r", "p", or "s".');
    } else {
      gettingAnswer = false;
      updateChoiceData(userInput);
      return userInput;
    }
  }
}

function updateChoiceData(input) {
  switch (input) {
    case 'r':
      gameData.r++;
      break;
    case 'p':
      gameData.p++;
      break;
    case 's':
      gameData.s++;
  }
}

// console.log(getUserInput());

function getComputerInput() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'r';
    case 1:
      return 'p';
    case 2:
      return 's';
  }
}

console.log(getComputerInput());

function compareAnswers(user, computer) {
  if (user === computer) {
    return 'tie';
  }

  if (user === 'r') {
    if (computer === 's') {
      return 'win';
    } else {
      return 'loss';
    }
  }

  if (user === 'p') {
    if (computer === 'r') {
      return 'win';
    } else {
      return 'loss';
    }
  }

  if (user === 's') {
    if (computer === 'p') {
      return 'win';
    } else {
      return 'loss';
    }
  }
}

function updateResultsData(result) {
  switch (result) {
    case 'win':
      gameData.win++;
      break;
    case 'loss':
      gameData.loss++;
      break;
    case 'tie':
      gameData.tie++;
  }
}

function showResult(result, userInput, computerInput) {
  const formattedResult = result[0].toUpperCase() + result.slice(1);
  alert(
    `You chose ${userInput}\nComputer chose ${computerInput}\n${formattedResult}`
  );
}

// const gameData = {
//     wins: 0,
//     loss: 0,
//     tie: 0,
//     r: 0,
//     p: 0,
//     s: 0,
//   };

function showData() {
  alert(
    `Results so far\nWins: ${gameData.wins}\nLoss: ${gameData.loss}\nTie: ${gameData.tie}\n\nYou have chosen\nRock ${gameData.r} times\nPaper ${gameData.p} times\nScissors ${gameData.s} times`
  );
}

function getContinuePlaying() {
  const shouldContinuePlaying = confirm('Do you want to play again?');
  if (shouldContinuePlaying) {
    return;
  }
  playing = false;
}

function game() {
  while (playing) {
    const userInput = getUserInput();
    const computerInput = getComputerInput();
    const result = compareAnswers(userInput, computerInput);
    updateResultsData(result);
    showResult(result, userInput, computerInput);
    showData();
    getContinuePlaying();
  }
}

game();
