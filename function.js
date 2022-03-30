//operators
let a=10;
let b=9;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

console.log(5*4+3+4);

// priority > () > * > / > % > + > -

let c=10, d=10;
console.log(a==b);

c=10, d='10';
console.log(c==d);
console.log(c===d);
console.log(c!=d);
console.log(c!==d);

if(a>b){

}else if(a>4){

}else{

}

//false condition
// false case possible vals= false / 0 / "" / '' / null / undefined val is NaN

a="";
if(!a){
    console.log('a========', a);
}
else{
    console.log('vvvv');
}

let bb='22b', aa=22;
console.log(a/b);//NaN

let cc;
if(cc){
    console.log('a========', a);
}
else{
    console.log('vvvv');
}

//ternary operator
let dd = (a==b)?console.log('a'):console.log('b');


//functions
let a1=2, b1=3, c1=6;
function cube(param){
    var res;
    if(param<=5){
        return param*param;
    }else{
        return param*param*param;
    }
}
// console.log('helllllllllllo', res);
console.log(cube(a1));
console.log(cube(b1));
console.log(cube(c1));


const multi = function(val){
    return val*3;
}

console.log(typeof multi)
console.log(multi(10));

