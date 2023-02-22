let cl = console.log

for (let index = 1; index <= 100; index++)


{
  if (index % 3 == 0) {
    cl("Fizz") 
} 
  else if (index % 5 == 0) {
    cl("Buzz") 
} 
  else if (index % 3 == 0 && index % 5 == 0) {
    cl("FizzBuzz") 
} 
  else { 
    cl(index) 
} }



let a = ["a", "b"];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    cl(element)
}

let o = {};
o.name = "Joshua"
o.age = "16"

cl(o)