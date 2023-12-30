function printValue(num) {
    console.log(num);
}
// Write a Program to reverse a string
function reverseAString(a) {
    var reverseString = "";
    for (var i = a.length - 1; i >= 0; i--) {
        reverseString += a[i];
    }
    return reverseString;
}
var value1 = reverseAString("BHANU PRATAP SINGH");
//console.log(value1)
//Write a Program to convert first letter in Capital Letter
function convertIntoCapitalLetter(a) {
    var value = a.charAt(0).toUpperCase() + a.slice(1);
    return value;
}
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
// var total = 0;
// movies.forEach(function (movie) {
//     total += movie.budget;
// });
// console.log(total);


//Write  a Program to remove duplicates  elements from  array
