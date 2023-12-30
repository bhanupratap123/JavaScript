const languages = ['Java','Python','JavaScript'];

//Print the size
console.log(languages.length);

//Print the Python
console.log(languages[1])

// Add the Items in Array
//PUSH methos add items to array in the last position
console.log(languages.push("C++"))
console.log(languages)

//Add the Items in Array in the first position
languages.unshift("TypeScript")
console.log(languages);

// Remove the Items from Array from last position and will return the last item removed
let lastItem = languages.pop();
console.log(lastItem)
console.log(languages)

// Remove the first item from the array and return
let firstItem = languages.shift();
console.log(firstItem)
console.log(languages)


var actor = [
    { name: "Bhanu", payment: 150 },
    { name: "Sid", payment: 250 },
    { name: "Deepak", payment: 350 },
    { name: "Rohan", payment: 650 }
];
// for (let i = 0; i < actor.length; i++) {
//     console.log(actor[i].payment+100);
// }


// actor.forEach((eachIndexValue)=>{
// console.log(eachIndexValue.payment-30)
// })

const student = [
    { name: "Rahul",marks:45},
    { name: "Deepal",marks:55},
    { name: "Raju",marks:30},
]

//Get the value of the student whose marks is less than 30
student.forEach((student)=>{
    if(student.marks <= 30){
        console.log(student.name+ " Is failed and marks is "+student.marks)
    }
}
)