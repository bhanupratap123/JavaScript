const name1 ='Bhanu';


//Let is only accesible inside the bracket and it is the good practise to use let
//Var is accessible globaly (not recomended to use)
// function add(n1:number,n2:number){
//     let value = n1+n2;
//     return value;
// }

// // Example of arrow function
// const addfunction1 =(num1:number,num2:number) =>{
//     return num1+num2;
// }

// const getOutput = (input : number | string) =>console.log(input) 

// getOutput(addfunction1(231,34256));

// //=============================Operators====================================================
// // Spread Operator : helps in copy all elements

// //Example 1 
// const hobbies =['Sports','Cooking','Reading']
// const activeHobbies = ['Sports','Hiking']

// //Spread Operator : can take any number of input as parameter
// activeHobbies.push(...hobbies)
// //Example 2

// const person1 ={
//     name : 'Bhanu',
//     age  : 30
// }
// //const copiedPerson ={...person} 

// //Rest Parameters : accepting an unlimited amount of paramter
// const add1 =(...number : number[]) => {
//    return number.reduce((a: number, b: number) => {
//         return a + b;
//     }, 0);
// }

// const addedNumber = add1(2,234,342,13,35,67,88,9)
// console.log(addedNumber)


//=============================Anonymous Funtions==============================
// Does not have a function name is called anonymous function
// Lambda or Arrow function 

let  student = ["Bhanu","Ayush","Sid","Abhi","Rahul"]
// console.log(student)

// const newArray = student.splice(1,2,"Khurram");
// console.log(student)

// student.forEach(function(element ,index){

// })

//  let newArray1 = student.map(function(element,index){
//     return element+"30";
// });

// let newArray = student.filter(function(element, index){
//     return element.length < 5;
// })

// console.log(newArray);

//==============Example of filter Method =====================

let mobile = [
    {
        "Brand" : "Apple",
        "Model" : "I phone 14",
        "Price" :  65000 
    },
    {
        "Brand" : "Apple",
        "Model" : "I phone 15",
        "Price" :  90000 
    },
    {
        "Brand" : "Samsung",
        "Model" : "Flip",
        "Price" :  120000 
    }
    ,
    {
        "Brand" : "Oppo",
        "Model" : "Razor",
        "Price" :  35000 
    }
]

//Return value having brand Apple
// const returnValue = mobile.filter(function(element, index){
//     return element.Brand == "Apple";
// })

// console.log(returnValue);


//Return value having Price less than 50000
// const returnValue = mobile.filter(function(element, index){

//     return (element.Price > 70000 && element.Brand == "Apple");
// })

// console.log(returnValue);

var a = 10;
let b = "Bhanu"; 
let  c = null;
let  d = undefined;

{
    let b = 'Pratap';
    console.log(b)
}

console.log(b);
