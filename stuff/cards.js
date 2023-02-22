let cl = console.log;
let player1score = 0;
let player2score = 0;
let playername = "Joshua";
let CPUname = "Goomba Bot";

let playGame = function (playername, CPUname) {
  let buildDeck = function () {
    let deck = [];
    for (let index = 1; index <= 13; index++) {
      deck.push(createCard(index, "Diamonds"));
      deck.push(createCard(index, "Hearts"));
      deck.push(createCard(index, "Spades"));
      deck.push(createCard(index, "Clubs"));
    }
    return deck;
  };

  let createCard = function (rank, suit) {
    let card = {
      name: getName(rank),
      suit: suit,
      rank: getRank(rank),
      color: getColor(suit),
    };
    return card;
  };

  let getColor = function (suit) {
    if (suit === "Clubs") {
      return "black";
    } else if (suit === "Spades") {
      return "black";
    } else {
      return "red";
    }
  };

  let getName = function (rank) {
    switch (rank) {
      case 11:
        return "Jack";
      case 12:
        return "Queen";
      case 13:
        return "King";
      case 1:
        return "Ace";
      default:
        return "face";
    }
  };

  let getRank = function (rank) {
    switch (rank) {
      case 11:
        return 10;
      case 12:
        return 10;
      case 13:
        return 10;
      default:
        return rank;
    }
  };

  let dealCard = function (deck) {
    let i = Math.floor(Math.random() * deck.length);
    let card = deck.splice(i, 1)[0];
    return card;
  };

  let dealHand = function (deck, numberOfCards) {
    let hand = [];
    for (let i = 0; i < numberOfCards; i++) {
      hand.push(dealCard(deck));
    }
    return hand;
  };

  let scoreHand = function (player) {
    let score = 0;
    for (let index = 0; index < 2; index++) {
      score += player.cards[index].rank;
    }
    return score;
  };

  let scoreHand2 = function (player) {
    let score = 0;
    for (let index = 0; index < 1; index++) {
      score += player.cards[index].rank;
    }
    return score;
  };

  let createPlayer = function (player) {
    let players = {
      player: player,
      cards: dealHand(deck, 2),
    };
    return players;
  };

  let createPlayer2 = function (player) {
    let players = {
      player: player,
      cards: dealHand(deck, 1),
    };
    return players;
  };

  let deck = buildDeck();
  let player3 = createPlayer2(playername);
  let player2 = createPlayer(CPUname);
  let player1 = createPlayer(playername);

  cl(player2);
  cl(scoreHand(player2));
  cl(player1);
  cl(scoreHand(player1));
  cl(playername + "'s score: " + scoreHand(player1));

  let prompt = require("prompt-sync")({ sigint: true });
  let draw = prompt("Would you like to draw again? - ");

  if (draw === "no") {
    cl("You did not draw again");
    yourscore = scoreHand(player1);
    cl(playername + "'s score: ", yourscore);
    cl(CPUname + "'s score: ", scoreHand(player2));
  } else {
    yourscore = scoreHand(player1);
    cl(playername + "'s score: ", yourscore);
    cl(CPUname + "'s score: ", scoreHand(player2));
  }
  if (draw === "yes") {
    cl("The card you drew is: ", player3);
    yourscore = scoreHand2(player3) + scoreHand(player1);
    cl(playername + "'s new score: ", yourscore);
    cl(CPUname + "'s score: ", scoreHand(player2));
  }

  if (yourscore > scoreHand(player2) && yourscore <= 21) {
    cl(playername, "is the winner this round");
    player1score++ + 1;
  }
  if (scoreHand(player2) > yourscore && scoreHand(player2) <= 21) {
    cl(CPUname, "is the winner this round");
    player2score++ + 1;
  }
  if (
    scoreHand(player2) === yourscore &&
    scoreHand(player2) <= 21 &&
    yourscore <= 21
  ) {
    cl("it's a draw this round");
  }
  if (
    yourscore > scoreHand(player2) &&
    yourscore > 21 &&
    scoreHand(player2) <= 21
  ) {
    cl(CPUname, "is the winner this round");
    player2score++ + 1;
  }
  if (
    scoreHand(player2) > yourscore &&
    scoreHand(player2) > 21 &&
    yourscore <= 21
  ) {
    cl(playername, "is the winner this round");
    player1score++ + 1;
  }
  if (yourscore > 21 && scoreHand(player2) > 21) {
    cl("it's a draw this round");
  }
  cl(playername + "'s rounds won: ", player1score);
  cl(CPUname + "'s rounds won: ", player2score);
};

for (let index = 0; index < 100; index++) {
  cl(playGame(playername, CPUname));
  if (player1score === 3) {
    cl(playername, "IS THE GRAND CHAMPION!!!!");
    return;
  }
  if (player2score === 3) {
    cl(CPUname, "IS THE GRAND CHAMPION!!!!");
    return;
  } else {
    let prompt2 = require("prompt-sync")({ sigint: true });
    let startround = prompt2("Hit enter to receive a new hand");
    cl(startround);
  }
}
