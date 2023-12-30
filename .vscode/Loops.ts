// for loop

//WAP to print number from 1 to 10

// const actor = [
//     {name : "Bhanu", payment :150},
//     {name : "Sid", payment :250},
//     {name : "Deepak", payment :350},
//     {name : "Rohan", payment :650}
// ]

/* The code is using a for loop to iterate over the elements in the `actor` array. For each element, it
checks if the `name` property is equal to "Bhanu". If it is, it adds 100 to the `payment` property
of that element. If it is not, it subtracts 100 from the `payment` property. */

// for(let i = 0 ; i < actor.length;i++){
//     if(actor[i].name === "Bhanu"){
//         actor[i].payment+=100;
//     }
//     else{
//         actor[i].payment-=100;
//     }
// }



// actor.forEach((actor)=>{
// actor.payment-=10
/**
 * The function `removeDuplicates` takes an array of names and returns a new array with duplicate names
 * removed and sorted alphabetically.
 * @returns The function `removeDuplicates` returns an array of unique names in alphabetical order.
 */
// // })


// function removeDuplcates():string[]{
//     let names :string[];
//     names = ["Bhanu", "Bhanu", "Bhanu", "Pratap", "Pratap", "Singh"]; 
//     let uniqueName : string[]=[];
//     names.forEach((name)=>{
//         if(!uniqueName.includes(name)){
//             uniqueName.push(name);
//         }
//     });
//      return uniqueName.sort();  
// }
// console.log(removeDuplcates());




function outerFunction(){
    let city  = "Delhi";
    console.log("Outer function : "+city);

    function innerFunctions(x:number,y:number):void{
        console.log("Inner function : ",x+y);
        console.log("Inner function can also access outer functions variable : ",city);

    }

    return innerFunctions;
}

let resultOfInnerFuncion = outerFunction();
console.log(resultOfInnerFuncion);

let valueOfInnerFuction = resultOfInnerFuncion(10,30);