// ----- Code Formatting STARTS----------- //

/* 
console.log('Hi , This is Tejaswini');
console.log(
    'Hi , This is Tejaswini'
);
console.log                   (                 'Hi , This is Tejaswini'          );
console.log("Hi,     \n   This is Tejaswini.");
*/

// ----- Code Formatting ENDS ----------- // 







// ---- Code Sensitivity STARTS ----------//


function printMessage() {
    console.log("Hello World")
};
// code inside javascript is Case sensitive
// printMessage()

// Javascript follows camelCasing pattern
//showNumberOfBoxes
/* Refference
 python : show_number_of_boxes
javascript: showNumberOfBoxes */


// ---- Code Sensitivity ENDS ----------//








// ---- Code Commenting STARTS ----------//


// Single line
/*
Multiple lines comment
*/

/**
 * a professional approach that developers use to document the working of the code
 */



// EXAMPLE

/**
 * This function is used to print the message
 */
function printMessage() {
    console.log("Hello World")
};

//printMessage()
// ---- Code Commenting ENDS ----------//


// ------ Variables ------- //



//variable : a reference we store our data in the form of variable


// Memory Heap - is where the variables are stored, and every variable takes a certain amount of memory



// console.log("Infosys")
//console.log(companyName)

let companyName = "Infosys"; // local - bracket scope


// console.log("name :", name);

var name = "Tejaswini";

// console.log("name :", name);


//code runtime : all the variables are declared first and then assigned there value 


/* 
let a = 123;
let b = 345;
console.log("a : ", a)
console.log(a+b);
a = 10;
console.log("a : ", a)
console.log(a+b)
companyName = "Capgemini"
console.log("companyName ", companyName)
companyName = "Google";
console.log("companyName :", companyName)
const fullName = "Jatin Bhatia";
console.log("fullName :", fullName)
fullName = "Jatin D Bhatia";
console.log("fullName :", fullName) */

/*
let , var, const
let - local scope and can be changed
var - global scope and can be changed
const - global scope but cannot be changed
*/


/*
types of variables:
1. String = "My name is Tejaswini", "D", "ABC"
2. Number = 12, 34, 56, 78
3. BigInt = 
4. Boolean = true / false
5. undefined = let name; > the variable is declared i.e it exists but has not been assigned any value
6. Null = let train = null;
7. Symbol = let abc = Symbol("Hello") = unique - value - hello
8. Object = { key: value}
*/

/*
let str = "Hello World!!!";
let cost = 3214;
let exists = true;
let lastName;
let value = null;
let obj = {
    name : "Tejaswini"
    };
let sys = Symbol("Hello World!!!")
let isAvailable = false;
console.log(typeof str);
console.log(typeof cost);
console.log(exists);
console.log(lastName);
console.log(value);
console.log(obj);
console.log(typeof sys);
console.log(isAvailable);
*/


// Loops : 



// Data Structure 

// Objects
// arrays

let obj = {
    name: 'Tejaswini',
    dob: '23/07/1995',
    contact: { // nesting
        mobile: 1234567890,
        phone: 123456789
    },
    address: {
        city: 'kolhapur',
        pincode: 1234567
    },
    studiesJavascript: true
};



/* console.log(obj)
console.log(obj.name)
parent.children.children.children..... infinite // dot notation
obj.contact.mobile // nesting */



/* console.log(obj)
console.log(obj.name)
console.log(obj.address)
 */

/* console.log("(obj['name']", obj['address']['city'])
 */

let arr = [ 1, 2, '3', 4]
/* console.log(typeof arr)
console.log(arr)
 */
/* Dynamic binding > 
java 
    number > int = 123456789
    city > string = '34567890-'
    Strict/Static Binding
    javascript > dynamiv binding
    let number = '1234567890' // during execution 
    let city = 121
 */


let emptyArr = [] // emptyarray

let randomArr = [1, 2, 3, 5, 'maharashtra', 'haryana', 'punjab', true, false, 12345678909876543456789098765456789, {name: 'Tejaswini', state: 'Maha'}
];
/* 
console.log(randomArr[10].state)
console.log(randomArr[10]['state']) */




/* console.log(typeof randomArr)
console.log(randomArr) */

/* 
[][][][][][][][][][][]
0  1 2 3 4 5 6 7 8 9 10...  */ 

//object/array index always starts at 0

/* console.log(typeof randomArr)
console.log(randomArr[0])
console.log(randomArr[1])
console.log(randomArr[2])
console.log(randomArr[3])
console.log(randomArr[4])
console.log(randomArr[5])
console.log(randomArr[6])
console.log(randomArr[7])
console.log(typeof randomArr[8])
console.log(typeof randomArr[9])
 */



/* console.log(Array.isArray(randomArr))
console.log(Array.isArray(obj)) */

/* to find out whether a var is object or array >  
1 typeof 
2 Array.isArray 
 */




//obj,arrays > iterate 


/* for (let i = 0; i <= 10; i++) {
    console.log(i)
} */


// for ... in 
for (let key in obj) {
//    console.log(key)
 //   console.log(obj[key])
}

console.log('--------------------------')



// for ... of
for (let val of randomArr) {
//    console.log(val++)
}


for (let key in randomArr) {
 //   console.log(key)
}

let i = 0;
while (i < randomArr.length) {
  //  console.log('index', i)
  //  console.log(randomArr[i])
    i++
}



// ------------------- OPERATORS ----------------------// 


/* let a = 22;
let b = '22';
 */
/* 
console.log(a*b) // multiplication
console.log(a/b) // division
console.log(a+b) // addition
console.log(a-b) // subtraction
console.log(a%b)// = remainder // Remainder / modular operator
 */

/* Priority > 
() > Multi > Division > Remainder > Additon / subtraction
 */

//comparison '=='

//console.log('comparison ', (a != b))

/* == , ===
checks the value but not the data type
=== >  check the value and the data type */

//internally type conversion 
// NOT operator > !=
/* 
if (condition) {
} else if (a > 4) {
} else {
} */



/* conditions for Falsy if > 
value is false
value is 0
value ""/'' (empty string)
value is null
value is undefined
value is NaN */

/* a = 'null'
if (a) {
    console.log(" in if loop")
} else {
    console.log(" in else loop")
}
 */

/* b = '22b'
console.log(a/b)
let c;
console.log(c) */


/* ternary operator >  
let c = (true) ? execute this : else execute that
 */

/* b = 90;
let c = (a == b) ? console.log("A and b are equal") : console.log("a and b are different");
 */

/* let str = ""; // undefined
let c = !str ? console.log("Execute A") : console.log("Execute B");
 */







// -------------------------- FUNCTIONS --------------------------// 




let a = 2;
let b = 5;
let c = 9;


function makeCubeOf(parameter, param2, param3) {
    let result; // function scope

    if (parameter >= 5) {
        result = parameter*parameter
    } else {
        result = parameter*parameter*parameter
    }

    console.log("result", result)
    return result;
}


/* console.log(makeCubeOf(a))
console.log(makeCubeOf(b))
console.log(makeCubeOf(c))
 */


const multiplyByThree = function (param) {
    return param * 3
}

/* console.log(typeof multiplyByThree)
console.log(multiplyByThree(b))
console.log(multiplyByThree(c)) */


//--------------------------------Array methods------------------------------------------
let example = [3, 4, 5, 6, 'Jatin', true];

// length > example.length
// .map
// .filter
// push
// pop
// iterate .forEach
// indexof


// console.log(example.length)


let emptryArr = [];

// add value to the end
emptyArr.push(1)
emptyArr.push('Hello')
emptyArr.push('world')
emptyArr.push(567)
emptyArr.push(564)
emptyArr.push(560)
emptyArr.push(561)
emptyArr.push(5678)
// console.log(emptyArr)

// delete one from last
//emptyArr.pop()

//console.log(emptyArr)

let index = emptyArr.indexOf('561')
/* 
console.log("finding index : ", index);
console.log(emptyArr[0])
console.log(emptyArr[3])
console.log(emptyArr[-3])
console.log(emptyArr)
 */
let num = 560;

// console.log(emptyArr.includes(num))
if (emptyArr.includes(num)) {
   // console.log(emptyArr.indexOf(num))
}

// updates existing fileds 
let arr1 = emptyArr.map(function(item  ) {
    return 'MH - ' + item
})

// console.log(arr1)
// console.log(emptyArr)
 
// console.log('type of array is object in JS=',typeof emptryArr);









// let secArr = emptyArr.map(function(item) { 
//     console.log(item)
//     return 'MH - ' + item
// })
// let thirdArr = emptyArr.forEach(function(item) {
//     return item + '- MH'
// }) 
// console.log(secArr)
// console.log(thirdArr)
// console.log('--------------')



let numberArr = [];

// iterate over the array 
emptyArr.forEach(function(item) {

    // item = item + 3
    //    console.log(item);
    if (typeof item == 'number') {
        numberArr.push(item)
    }
})
// console.log(numberArr)


let numArr = emptyArr.filter(function(item) {
    return typeof item == 'number'
})


let newArr = emptyArr.filter(function(item) {
    return typeof item == 'number' && item > 560
})

/* console.log('numArr', numArr)
console.log('newArr :', newArr) */

//variable > out of its scope is not accessible 



let abc = 600; // global - till this file
console.log('abc at line 567:', abc)
var num1 = 9000000;
console.log('num1 : ', num1) 

function checkValue() {
    let def = 123; // bracket scope
    console.log(def)

    function checkScope() {
        def = 300;
        console.log(def)
        let checkVar = 45678;
        console.log('checkVar : ', checkVar)
    }
    // console.log('checkVar : ', checkVar)

    checkScope();
    console.log('def outside', def)
    abc = 700
    console.log('abc inside', abc)
    num1 = 8000000;
    console.log(' num1 inside function', num1)

}

// console.log(def) // undefined

checkValue()
console.log(abc)
console.log('num1 outside ', num1)


let  obj1 = {
    name: 'Tejaswini', 
    address: {
        city: 'Delhi',
        pin: 121001
    }
}



