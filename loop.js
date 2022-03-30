let obj={
    name:'Teju',
    dob:'050494',
    address:{
        city: 'Kolhapur',
        pin: 416209
    }
}
console.log(obj);

console.log(obj.name);

console.log(obj.address.pin, "type=>", typeof obj.address);

console.log(obj['address']['city']);



let arr=[1,2,3,4,5];

console.log('arr type=', typeof arr);

console.log(Array.isArray(arr));

console.log(Array.isArray(obj));


