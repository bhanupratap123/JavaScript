//CALLBACK FUN
//ASYNC CALL/TASK ===> ONCE THIS TASK IS COMPLETED ===>THEN ONLUY CALLABACK FUNCTION IS CALLED ===>

//---Example 1-----------
function greet(name : string, callback:Function) {
    console.log('Hello ' + name);  //normnal/sync step/task, couild be asys
    callback();
}

//this is the callback function
function callback(){
    console.log('Welcome !!!!')
}

//---Example 2-----------
// this is the example of async call
function greetInfo(name : string, callback:Function) {
    setTimeout(function (){
        console.log('Hello ' + name); //normnal/sync step
        callback('plzzzz call me back');
    },5000) //5000 milli seconds

    console.log("Here is the verification that Javascript is a ASYNC in nature")
}

function display( displayMessage : String) {
console.log(displayMessage)
}

//---Example 3-----------
