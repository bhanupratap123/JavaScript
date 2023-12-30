
//=====Object De-structuring ==================================
var object = {
    userame : "Bhanu",
    city : "Delhi",
    id : 101,
    gender : "Male",
}


// var {userame, city, id, gender} = object;

// console.log(userame, city, id, gender);
//1- Order doesn't matter

//=====Array De-structuring =================================

var movies = [
    {
        name: "DDLj",
        budget: 100
    },
    {
        name: "KKKG",
        budget: 76
    },
    {
        name: "KHKN",
        budget: 30
    }
];

var[element1, element2] = movies;
/* The `console.log(element1)` statement is printing the value of `element1` to the console. In this
case, `element1` is the first element of the `movies` array, which is an object representing a movie
with properties `name` and `budget`. */
// console.log(element1);
//--Order mattersf


function removeDuplicatesFromArray() : string[]{

    let name:string[] = ["Bhanu", "Bhanu", "Pratap", "Pratap", "Singh"]
    let uniques:string[]=[];

    name.forEach(function(element,index){
        if(uniques.indexOf(element)==-1){
            uniques.push(element)
        }
    })
    return uniques;
}

function reverseAString1():string{
    let name : string ="Bhanu Pratap Singh"
     let nameArray = name.split(" ");
     console.log(nameArray)
     let reverse:string = "";
     for(let j=0;j<=nameArray.length-1;j++){
        for (let i =nameArray[j].length-1; i >= 0; --i){
            reverse += name.charAt(i)
         }
     }
    return reverse;
}

console.log(reverseAString1())