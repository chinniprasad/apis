//using this in classes

/*class Rectangle {
  constructor() {
    console.dir( this);
  }
  setHeight(height) {
    this.height = height;
    console.log("this height", this);
    return this;
  }
  setWidth(width) {
    this.width = width;
    return this;
  }
  getArea() {
    console.log("this area", this);
    return this.height * this.width;
  }
}

// //console.log((new Rectangle()(setHeight(10))(setWidth(20))))

 let area = new Rectangle().setWidth(20).setHeight(10).getArea();
 console.log("------area", area); //200 */

//random number using date()

/* function random(max){
    let date = new Date().getTime()
    return date
}
console.log(random(4));*/

//yields

/*let fun1 = (num1) => {
  return num1
}

function* generatorFun(num) {
  yield num;
  console.log("prasad");
  
  yield num + 1;
  yield fun1(6)
}
let generator = generatorFun(2);
console.log(generator.next())
console.log(generator.next());
console.log(generator.next());*/

//yield with functions

/*function* g1() {
  yield 1
  yield 2
  yield 3
}
function* g2() {
  yield 4
  yield* g1()
  yield 5
}
let iterator = g2()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

//yield with promises

/*function * user(){
  const result = yield apiCall()
}

function apiCall(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({name : "prasad",qual : "mca" })
    },2000)
  })
}

let generator = user()

//console.log(generator.next().value.then(n => {console.log(n)}));

console.log(generator.next().value.then(k => {console.log(k)}));*/

//sorting niumbers
/*function sorting(){
    // let arr = ['m', 'a', 'n', 'o', 'j']
    let arr = [1, 2, 3,15,6,4]
    
    arr.sort(function(b,a){
        return a-b
    })
    return arr
}

console.log(sorting());*/

//compare arrays and return unique elements

// function Unique() {
/*let arr1 = [1, 2, 3, 3, 4, 2, 5];
let arr2 = [2, 6, 7, 9, 3];

// array1 = arr1.filter(val => !arr2.includes(val));
// console.log(array1);
//let unique = []
array1 = arr1.filter(function(val) {
  return arr2.indexOf(val) == -1;
});
array2 = arr2.filter(function(val) {
  return arr1.indexOf(val) == -1;
});

console.log([...array1,...array2]);*/

//remove duplicates in two arrays
/*console.log([... new Set([...new Set(arr1), ... new Set(arr2)])]);*/

//number palindrome

/*let number = 1232;
let rem,
  final,
  temp = 0;
temp = number;

while (number > 0) {
  rem = number % 10;
  number = parseInt(number / 10);
  final = final * 10 + rem;
}
if (final == temp) {
  console.log(`${temp} is palindrome`);
} else {
  console.log(`${temp} is not palindrome`);
}*/


//String palindrome

/*let str = 'madamok'
let temp = str.split('').reverse().join('')
if(temp == str){
  console.log(`${str} is palindrome`);
}
else {
  console.log(`${str} is not palindrome`);
}*/



setTimeout(() => {
  console.log("prasd");
});
console.log("chinni");



