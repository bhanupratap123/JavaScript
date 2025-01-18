class MyClass {

     trainNumber: number;
     name: string;

    constructor(name : string, trainNumber:number)
    {
    
       this.name = name;
       this.trainNumber = trainNumber;
    }
    
    submitt(){
        console.log(`Hello ${this.name} your form has been submitted successfully for train number ${this.trainNumber}`);
    }

    cancel(){
        console.log(`Hello ${this.name} your form has been cancelled for train number ${this.trainNumber}`);
    }
}


//object creation
let obj1 = new MyClass("BHANU",235435);
let obj2 = new MyClass("Sid",1223);
let obj3 = new MyClass("Shrini",346234);

//call methods

obj1.submitt();
obj2.submitt();

obj3.submitt();
