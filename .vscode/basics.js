var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var name1 = 'Bhanu';
//Let is only accesible inside the bracket and it is the good practise to use let
//Var is accessible globaly (not recomended to use)
function add(n1, n2) {
    var value = n1 + n2;
    return value;
}
// Example of arrow function
var addfunction1 = function (num1, num2) {
    return num1 + num2;
};
var getOutput = function (input) { return console.log(input); };
getOutput(addfunction1(231, 34256));
//=============================Operators====================================================
// Spread Operator : helps in copy all elements
//Example 1 
var hobbies = ['Sports', 'Cooking', 'Reading'];
var activeHobbies = ['Sports', 'Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
//Example 2
var person = {
    name: 'Bhanu',
    age: 30
};
var copiedPerson = __assign({}, person);
//Rest Parameters
var add1 = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (a, b) {
        return a + b;
    }, 0);
};
var addedNumber = add1(2, 234, 342, 13, 35, 67, 88, 9);
console.log(addedNumber);


