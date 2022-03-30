let arr=[3, 4, 5, 6, 'Teju', true];
console.log(arr.length);

let emptyArr=[];
emptyArr.push(10);//add value at end
emptyArr.push('Hi');//add value at end
emptyArr.push(200);//add value at end
emptyArr.push(300);//add value at end
emptyArr.push(400);//add value at end
emptyArr.push(500);//add value at end
emptyArr.pop();// delete last value
console.log(emptyArr);

console.log('index of hi=====', emptyArr.indexOf('Hi'));
console.log('index of non exist hello==', emptyArr.indexOf('Hello'));

console.log(emptyArr[0], '\t', emptyArr[3], '\t', emptyArr[-3], '\n', emptyArr)

let num=560;
console.log(emptyArr.includes(560));

let arr1=emptyArr.map(function(items){
    return 'MH - ' + items;
})

console.log(arr1);
console.log(emptyArr);

let secArr=emptyArr.map(function(item){
    console.log(item)
    return 'MH - ' + item
})

// let thirdarr=emptyArr.forEach(function(item){
//     return item + ' - MH';
// })

////for each
let numarr=[];

numarr=emptyArr.forEach(function(item){
    console.log(item);
    if(typeof item=='number'){
        numarr.push(item);
    }
})

let newarr=emptyArr.filter(function(item){
    return typeof item=='number' & item >200;
})

console.log('--------------------');
console.log(numarr);
console.log(newarr);