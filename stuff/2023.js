let cl = console.log
//NUmber 1
let d = new Date();
cl(d)

//Number 2
function number(max) {
    return Math.round((Math.random() * max))
  }
cl(number(1000))

//Number 3
const different = ["Which", "word", "will", "the", "computer", "choose", "?"];
function word(max) {
    return Math.round((Math.random() * max))
  }
cl(different[word(6)])

//Number 4

function sum(N) {
    total = 0;
      for(i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
cl(sum(10000))

//Number 5
