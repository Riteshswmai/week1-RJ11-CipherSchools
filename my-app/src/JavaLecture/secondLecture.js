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

// let detail={
//     name:"sak",
//     age:20,
//     address:{
//         street:"Bro",
//         city:"New",
//         country:"lu",
//         passport:{
//             passno:"01235453"
//         },
//     },
// };
//console.log(detail.address.passport.passno)

// let myName=detail.name;

// let{name,age}=detail;
// console.log(name,age)

// let{name:my,age}=detail;
// console.log(my,age)


//ARRAY MACTHING OBJECT MATCHING

//  let obj1={name:"Rk"};
//  let obj2={name:"Rk1"}

//  function are(){
//     if(obj1==obj2){
//         return true;
//     }
//     if(Object.keys(obj1).length != Object.keys(obj2).length)
//     {
//         return false;
//     }
//     for(let key of Object.keys(obj1)){
//         if(typeof obj2[key]=="undefined"){
//             return false;
//         }
//        if(obj2[key]==obj1[key]){

//        }
//     }
//     return true;
//  }

// console.log(are(obj1,obj2))

//MAP ans SET
// let map=new Map()
// map.set(1,"Rk");
// map.set(2,"Rki")
// console.log(map)

// map.keys()
  

// let set=new Set()
// set.add(1);
// set.add(2)
// set.delete()
// console.log(set)



class Animal{
    noOfLegs;
    color;
    family;//js not possibel to consteuct more than one constructor
    sound;//pass all argument in one counstruction
//no concept of public and private
//in class we can create function

    constructor(noOfLegs,color,family,sound){
       this.noOfLegs=noOfLegs;
       this.color=color;
       this.family=family;
       this.sound=sound;  
    }
    showAnimal(){
  console.log(`athaklgdkgjd ${this.family}`);
       }

    
}
let animal=new Animal(4,"brown","rodent","sometin");
console.log(animal);
animal.showAnimal();
















