// //Promise is a class in js
// //accepthe function promise constructur
// //never be empty

// let myPromise=new Promise((fulfilled,nonfulfilled)=>{
// let num1=10;
// let num2=15
// let sum=num1+num2;
// if(sun> 20){
//     fulfilled(sum);
// }else{
//     nonfulfilled(new Error("promise not fullfilled"))
// }

// });
// // myPromise.then().catch().finally()

// //.then() happen only when promise fullfilled
// //.catch() happen only when promise not fullfilled

// myPromise.then(()=>{
//     console.log("Promise was full");
// })
// .catch(()=>{
//     console.log("not fullfiled");
// })


// function add(num1,num2){
//     let sum=0;
//     setTimeout(()=>{
//         console.log(num1+num2)
//         sum=num1+num2;
    
//     },5000);
//         console.log("hjhj");
//         return sum;
    
// }
// console.log(add(2,5))

function add(num1,num2){
   return new Promise((fulfilled,notfulfilled)=>{
        setTimeout(()=>{
        console.log("inside");
        fulfilled(num1+num2);
    
        },5000);

        notfulfilled(new Error("promise not fullfilled"))
    });
    
}

add(10,5)
.then(()=>{
        console.log("Promise was full");
    })
    .catch(()=>{
        console.log("not fullfiled");
    })
    






































