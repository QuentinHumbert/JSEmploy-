class Employe {
    constructor(name, firstname, employementday, occupation, salary, service, agency, child, childage) {
        this.name = name;
        this.firstname = firstname;
        this.employementday = employementday;
        this.occupation = occupation;
        this.salary = salary;
        this.service = service;
        this.agency = agency;
        this.child = child;
        this.childage = childage;
    }

    getTotalWorkingYears() {
        let today = new Date().getFullYear();
        let employment = new Date(this.employementday).getFullYear();
        let workingYears = today - employment;
        return workingYears;
    }

    getBonus() {
        let workingYears = this.getTotalWorkingYears();
        let employsalary = this.salary;
        let today = new Date().getDate();

        yearlyBonus = employsalary * 0.05;
        seniorityBonus = employsalary * (0.02 * workingYears);
        let allBonus = yearlyBonus + seniorityBonus;
        return allBonus;
    }

    sendBonus() {
        let today = new Date();
    }

    compareByName(l1, l2) {
        if (l1.lname.toLowerCase() < l2.lname.toLowerCase()) {
            return -1;
        }
        if (l1.lname.toLowerCase() > l2.lname.toLowerCase()) {
            return 1;
        }
        return 0;
    }
}