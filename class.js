class Employe {
    constructor(name,firstname,employementday,workfunction,salary,service,agency,child,childage){
        this.name = name;
        this.firstname = firstname;
        this.employementday = employementday;
        this.workfunction = workfunction;
        this.salary = salary;
        this.service = service;
        this.agency = agency;
        this.child = child;
        this.childage = childage;
    }

    getTotalWorkingYears(){
        let today = new Date().getFullYear();
        console.log(today);
        let employment = new Date(this.employementday).getFullYear();
        console.log(employment);
        let workingYears = today - employment;
        console.log(workingYears);
    }

    getBonus(){
        
    }
}