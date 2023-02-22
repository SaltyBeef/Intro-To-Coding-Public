let cl = console.log

//Number 1
const country = "France";
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);


//Number 2
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

//Number 3
{let C = "-20"
let F = (9/5) * C + 32
cl(F)}

//Number 4
{let F = "30"
let C = (F - 32) * (5/9)
cl(C)}

//Number 5
let number1 = 5;
number1 = 3;
let number2 = 3;
number2 = 5;
cl(number1, number2)

//Number 6
let day = "Sunday"
if (day === "Sunday") {
    cl("Monday")
} else {
    cl(" ")
}

//Number 7
let hr = 5
let min = 30
let s = 59
let time1 = `${hr}hr${min}min${s + 1}s`
let time2 = `${hr}hr${min + 1}min${0}s`
let time3 = `${hr + 1}hr${0}min${0}s`
if (s + 1 === 60) {
    cl(time2) ;
}
if (s + 1 === 60 && min + 1 === 60) {
    cl(time3) ;
}
if (s + 1 !== 60) {
    cl(time1) ;
}

//Number 8
let N = 6
for (index = 1; index <= N; index++) {
    cl(index)
} 

//Number 9
let Number = 7
for (let i = 1; i <= Number; i++) {
        
    if (i % 2 === 0) {
          cl(`${i} is even`)
    } else {
            cl(`${i} is odd`)}
}
     
//Number 10
let number = 5
for(let i = 1; i <= 10; i++) {
let H = number / i
cl( i + " * " + H + " = " + number)
}

//Number 11
let firstName = "Joshua"
let lastName = "Blauch"
function sayHello(urname) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
    }
cl(sayHello())    

//Number 11
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    
    describe() {
    return `${this.name} has ${this.health} health points ${this
    .strength} as strength and ${this.xp} xp`;
    }
    };
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;

    cl(aurora.describe());

//Number 12
const dog = {
    name: "Fang",
    species: "Boarhound",
    size: "75",
    bark: "Grr Grr",

describe() {
return `${dog.name} is a ${dog.species} dog measuring ${dog.size}
Look, a cat! ${dog.name} barks: ${dog.bark}`
} }

cl(dog.describe())

//Number 13
let r = 4
const circle = {
    circumference: 3.14 * (r + r),
    area: 3.14 * (r * r),

describe() {
return `Its circumference is ${circle.circumference}
Its area is ${circle.area}`
} } 

cl(circle.describe())

//Number 14
let credit = 200
let debt = 30
const Alex = {
    balance: 0,
    newbalance: credit - debt,

describe() {
return `Owner: Alex, balance ${Alex.balance}
Owner: Alex, balance ${Alex.newbalance}`
} } 

cl(Alex.describe())

//Number 15
const M = ["Athos", "Porthos", "Aramis"];
M.push("D'Artagnan");
for (let index = 0; index <= 0; index++) {
    cl(M);
}


//Number 16
const values = [3, 11, 7, 2, 9, 10];
    cl(values[0] + values[1] + values[2] + values[3] + values[4] + values[4])

//Number 17
let num = 0
const names = ['Bob', 'Jeff', 'Ur Mom', 'Joshua', 'Bill', "Ben", "Stop"];
for (let index = 0; index < 100; index++) {
        while (names[num] != "Stop") {
    cl(names[num])
        num +++ 1
        }
}
//Number 18
function square1(x) {
    cl(x * x)
    } 
    cl(square1(0)) 
    cl(square1(2))
    cl(square1(5)) 

//Number 19
let n = 1
for (let i = n; i <= 10; i++) {
    if (i % 2 === 0) {
    cl(`${i} is even`);
} else {
    cl(`${i} is odd`);
} }

//Number 20
n = 6
n --- 1
const month = ['31', '28', '31', '30', '31', "30", "31", "31", "30", "31", "30", "31"];
if (n > 12) {
    cl( )
} else {
    cl(month[n])
} 
