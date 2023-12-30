
// function printValue(num : number):void{
//     console.log(num);
// }

// Write a Program to reverse a string
// function reverseAString(a:string){
//     let reverseString :string="";
//     for(let i = a.length-1;i>=0;i--){
//         reverseString +=a[i];
//     }
//     return reverseString;
// }


// const value1 = reverseAString("BHANU PRATAP SINGH")
//console.log(value1)


//Write a Program to convert first letter in Capital Letter
// function convertIntoCapitalLetter(a: string){
//     const value = a.charAt(0).toUpperCase() + a.slice(1);
//     return value;
// }

 const movies1 = [
    {
        name  : "DDLj",
        budget : 100
    },
    {
        name : "KKKG",
        budget : 76
    },
    {
        name : "KHKN",
        budget : 30
    }
]

/* The code is calculating the total budget of all the movies in the `movies` array. It initializes a
variable `total` with a value of 0. Then, it uses the `forEach` method to iterate over each movie
object in the `movies` array. For each movie, it adds the `budget` property value to the `total`
variable. Finally, the `total` variable will contain the sum of all the movie budgets. */

let total =0;
movies.forEach((movie) =>{
total +=movie.budget;
});

//console.log(total);
movies.find((user)=>{
 if(user.name === "DDLj"){
    // console.log(user.budget); 
 }
})

//Remove the duplicates from the Array object

function removeDuplicates(arr:Array<number>){

    let uniqueArr :number[]=[];
    for(let i of arr){
            if(uniqueArr.indexOf(arr[i]) === -1){
                uniqueArr.push(arr[i]);
            }
        }
        // console.log(uniqueArr)
;}

let arr : number[] = [21,21,1,1,2,2,3,4,5,5,6,6,7,7];


arr.filter(ele => ele != arr[ele]);

// Removes dupplicate characters from Given String

function removeDuplicatesFromString(str:string){
    let uniqueStr :string = "";
    for(let i = 0;i<str.length;i++){
        if(uniqueStr.indexOf(str[i]) === -1){
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

function car(name : string , ...features :string[]){
    console.log(name);
    features.forEach(feature=>{
        // console.log(feature);
    })
}

//write the Program for factorial

function factorial(num : number):number{
    if(num === 0){
        return 1;
    }    
    else{
        return  num * factorial(num-1);
    }
}

//write the program for Adddition
// function addition(num1 : number, num2 : number,...num3:number[]):number{
//     let n = num1 + num2;

// }

// console.log(addition(12,13))

// Template leterals AKA Backstick
const n = 'Bhanu';
const message = `Hello ${n}
How are you
`;

//console.log(message);

// Enchanced Object literals

const keyName = "name";
const product = {
    [keyName] : "Mobile",
    price : 1000,
    description : "A smart phone"
}

//  console.log(product.price);

// Method defination shorthand
const prod ={

    buy(){
        console.log("Buying the product");
    }
}

// Object Destructuring
const user ={
        nam : "Bhanu",
        age : 25,
        city : "Delhi"
}

const {nam : fullname, age,city} = user;
// console.log(fullname)


const data = ['Bhanu',30,"Engineer"]