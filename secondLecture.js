//array funvtion
//1.map()

//let array=[1,2,3,4];
// let newArry=[];
// for(let i =0;i<arr.length;i++){
// newArry[i]=arr[i]*arr[i];
// }
// console.log(newArry)
// injs function alxo js object

//let functionForMap= (element)=> element*element

// function functionForMap(element){
//     return element*element
// }
// let array=[1,2,3,4];
// let newArry=array.map((element,index)=> {
//     console.log(index);
    
//     return element*element
// })        //this can take one more argument index
// console.log(newArry)

//2.for each

// let array=[1,2,3,4]
// array.forEach((element,index)=>{  //print vertical number out of array block[]
//     element*=element              //array not modified in this
//     console.log(element)          //forEach is void function
// })                                //not going to retun you array
// console.log(array);

//3. .filter

// let array=[10,20,30,40,50] 
// let newArray=array.filter((element)=>{  //new array
//     return element>=30
// })

//4. .find

// let arr=[10,20,30,40,50]//only one value print
// let a=arr.find((value)=>{
//     return value>20
// });
// console.log(a)

//5. sort()

// let arr=[1,50,"40",30,4,5,20,10];//return new array
// let a=arr.sort((n1,n2)=>{
//     n1=Number(n1)
//     n2=Number(n2)
//     return n1-n2
// });            
// console.log(a);

//OBJECT DESTRUCTURING 

let detail={
    name:"sak",
    age:20,
    address:{
        street:"Bro",
        city:"New",
        country:"lu",
        passport:{
            passno:"01235453"
        },
    },
};
//console.log(detail.address.passport.passno)

// let myName=detail.name;

// let{name,age}=detail;
// console.log(name,age)

// let{name:my,age}=detail;
// console.log(my,age)


//ARRAY MACTHING OBJECT MATCHING

 































