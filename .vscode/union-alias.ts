const person={
    name : "bhanu",
    age :30,
    hobby :["Sports", "Singing","Reading"]
}

//Example of for loop
console.log(person.name);
for(const value of person.hobby){
    if(value==="Sports"){
       // console.log("Great Guys !!!!");
    }
}

// Example for Tuple //Fixed Length
const student:{Name: String , Age:Number,Hobby:String[],Marks:[String,number]}={
    Name : "bhanu",
    Age :17,
    Hobby :["Sports","Singing","Reading"],
    Marks :["Chemistry",8]

}

//Example of for loop
for(const value of student.Marks){
    if(value => 33){
        console.log("Pass");
    }
    else{
        console.log("Fail");``
    }
}

type CombineDataType = number|string;
type ResultConversionDatType = 'as-string'|'as-number';

//Literal Types 
function combine(input1 : CombineDataType , input2 : CombineDataType,resultConversion:ResultConversionDatType){
let result;
if(typeof input1 === 'number' && typeof input2 === 'number' ||  resultConversion === 'as-number'){
     result=+input1 + +input2;
}
 else{
    result = input1.toString() + input2.toString();
}
return result;
}

const age = combine(23,21,'as-string');
console.log(age)

type User = { name: string; age: number };

const u : User ={name:"Bhanu",age:32}

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) :boolean {
  return checkAge > user.age;
}

const variable : User = {name:"Bhanu",age:32}
const value = isOlder(variable,23)
console.log(value)

