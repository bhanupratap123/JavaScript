class Department { 

   private employees : string[] =[];
    constructor(public name : string){

    }

    addEmployee(name : string){
        this.employees.push(name);
    }
    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees);
    }
}


class ITDepartments extends Department{
admins : string;
constructor(id:string,admins:string){
super(id);
this.admins=admins;
}
}
