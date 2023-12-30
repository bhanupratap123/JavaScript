var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.addEmployee = function (name) {
        this.employees.push(name);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.addEmployee("MAX");
accounting.addEmployee("MIN");
accounting.printEmployeeInformation();

