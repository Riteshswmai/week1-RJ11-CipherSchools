///* in js, we can declaare a variabel in 3 ways
//1. by using var const let
// var g='ritesh'; // it is globaly scoped
// console.log(g);

// const myname=5;//blocked scope

// function TwoNum(num1,num2)
// {

// // }
// // {
// //     var  num=5
// // }

//string interpolation

// let first="ritesj";
// let last="kumar";
// console.log(first + " "+ last)

// let full=`${first} ${last}`;


// function add(n1,n2){
//     return n1+n2
// }
// console.log(add(1,2))


// let add=(n1,n2)=>n1+n2;
// console.log(add(1,2));


// function add(n1,n2){//one argument pass
//     console.log(n1)
//     console.log(n2)   
    
//     return n1+n2
//     }
//     console.log(add(1))

    // function add(n1,n2=5){//one argument pass
    //     console.log(n1)
    //     console.log(n2)   
        
    //     return n1+n2
    //     }
    //     console.log(add(1))
        

        // function add(n1,n2=5){//one argument pass
        //     console.log(n1)//5 not included
        //     console.log(n2)   
            
        //     return n1+n2
        //     }
        //     console.log(add(1,6))


//Rest and spread Operator are applicabel in array and oblect in js
// let arr=[5,10,15,20,25];
// //spread ... denoted by three dot
//   //operator overloading same function different use

// console.log(...arr)
// console.log(arr)//array printed

// console.log(...arr,63,56,50)
// console.log(63,56,50,...arr)

//Rest ...

// let r=(...numbers)=>{
//     let maximum=Number.MIN_VALUE;
//     for(let num of numbers){
//         maximum=Math.max(maximum, number);
//     }
//     return maximum;
// }
// console.log(r=(1,2,3,4,5,6,7))


//for object
// let obj={
// name:"Jhon",
// age:24,
// add:{
//     city:"pilani",
//     state:"raj",

// },
// }
// let ob= { ...obj,city:"jai", country:"India"};
// ob.add.city="kur"
// console.log(ob)









