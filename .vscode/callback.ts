function register(callback: Function){
    setTimeout(() =>{
        console.log("register end");
        callback(); 
    },7000);
};
function sendEmail(callback: Function){
    setTimeout(() =>{
        console.log("sendEmail end");
        callback();
    },5000);
};
function login(callback : Function){
    setTimeout(() =>{
        console.log("login end");
        callback(); 
    },3000);
}; 
function getUserData(callback: Function){
    setTimeout(() =>{
        console.log("Get user data end");
        callback();
    },7000);
};
function displayUserData(){
    setTimeout(() =>{
        console.log("displayUserData end");
    },9000);
};

function /* `waitForThreeSeconds` is a function that blocks the execution of the program for three
seconds. It uses a while loop to continuously check the current time until three seconds
have passed. This is a blocking operation and can cause the program to become unresponsive
during that time. */
waitForThreeSeconds(){
    let ms  = 3000 + new Date().getTime();
    while(new Date().getTime() < ms){}
}

// This is called callback hell;
register(function(){
sendEmail(function(){
    login(function(){
        getUserData(function(){
            displayUserData();
        });
    });
});
});


// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             })
//         })
//     })
// })

console.log('Other application work')

//Final goal is to send all the method one by one , whatever the time taken by one of the method