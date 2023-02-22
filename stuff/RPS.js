let cl = console.log;
let choice = process.argv[2];

let getComputerInput = function () {
  let rps = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * rps.length);
  return rps[choice];
};

let getUserInput = function () {
  return choice;
};

let getWinner = function (user, computer) {
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "User";
  } else {
    return "Computer";
  }
};

let computerInput = getComputerInput();
let userInput = getUserInput();
cl("User chooses:", userInput);
cl("Computer chooses:", computerInput);

if (computerInput != userInput) {
  cl(getWinner(userInput, computerInput) + " is the Weiner!!");
} else {
  cl("It's A Draw!");
}
