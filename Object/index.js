// let obj={
//     name:'Aditya',
//     age:25,
//     village:'Manpur'
// }

// let name='age';

// console.log(obj[name]);


let obj={
    name:'Aditya',
    age:25,
    village:'Manpur'
}

obj.name='Rahul'; //update
obj.state='Bihar' //add
delete obj.name;
console.log(obj);

let re=Object.values(obj)
console.log(re);


