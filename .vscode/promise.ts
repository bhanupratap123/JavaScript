function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            // return reject('Error while registering....');
            console.log("register end");  
            resolve;        
        },1000);
    });
    
};
function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log("sendEmail end");
            resolve;
        },7000);
    });
};
function login(){
    return new Promise((resolve, reject)=>{
            setTimeout(() =>{
                console.log("login end");
                resolve;
            },7000);
        });
}; 
function getUserData(){
    return new Promise((resolve, reject)=>{
            setTimeout(() =>{
                console.log("getUserData end");
                resolve;
            },7000);
  });
};

function displayUserData(){
    return new Promise((resolve, reject)=>{
                setTimeout(() =>{
                    console.log("displayUserData end");
                    resolve;
                },7000);
            });
};

function waitForThreeSeconds(){
    let ms  = 3000 + new Date().getTime();
    while(new Date().getTime() < ms){}
}

// register().then(sendEmail).then(login).then(getUserData).then(displayUserData).catch((error)=>{
//     console.log("Error", error);
// });


async function authentication(){
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
}

authentication();

console.log('Other application work')

//Final goal is to send all the method one by one , whatever the time taken by one of the method
 