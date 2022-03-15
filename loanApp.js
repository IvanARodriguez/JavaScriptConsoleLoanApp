//THIS IS A CONSOLE APP THAT TAKE CREATE PERSONAL, 
//AUTO AND MORTGAGE LOANS, 
//total to be paid and interest paid

class Loan{
    constructor(type, amount, interestRate, months){
       this.type = type;
       this.amount = amount;
       this.interestRate = interestRate;
       this.months = months;
    }

    getInterestPaid(){
        const monthlyInterests = (this.interestRate / 100  / 12);
        let getInterestPaid = 0;
        for(let i = 1; i <= this.months; i++){
            const interestTotal = monthlyInterests * this.amount;
            const montlyTotal = (this.amount / this.months) + interestTotal;
            getInterestPaid +=  interestTotal;
            this.amount -= (montlyTotal - monthlyInterests);
        }
        return getInterestPaid.toFixed(2);
    }

    getTotalPaid(){
        const loanAmount = this.amount;
        const totalInterest = parseInt(this.getInterestPaid());
        return loanAmount + totalInterest;
     }
}

//===================================
// new instance of loan for Personal
//===================================

class PersonalLoan extends Loan{

    constructor(type, amount, interestRate, months, motive){
        super(type, amount, interestRate, months)
        this.motive = motive;
    }

    getTotalPaid(){
        return super.getTotalPaid()
    }

    getgetInterestPaid(){
        return super.getgetInterestPaid()
    }
}


//===================================
// new instance of loan for Autos
//===================================
class AutoLoan extends Loan{

    constructor(type,  amount, interestRate, months, make, model, year, downpayment, value){
        super(type, amount, interestRate, months);
        this.make = make;
        this.model = model;
        this.year = year;
        this.downpayment = downpayment;
        this.value = value;
        this.amount = amount =+ (value - downpayment);
        
        
    }

    getTotalPaid(){
        return super.getTotalPaid()
    }

    getInterestPaid(){
        return super.getInterestPaid()
    }

}
//===================================
// new instance of loan for Autos
//===================================
class MortgageLoan extends Loan{
    constructor(type, amount, interestRate, months, address, rooms, bathroom, downpayment, value){
        super(type, amount, interestRate, months);
        this.address = address;
        this.rooms = rooms;
        this.bathroom = bathroom;
        this.downpayment = downpayment;
        this.value = value;
        this.amount = amount =+ (value - downpayment);

    }
    
    getTotalPaid(){
        return super.getTotalPaid()
    }

    getInterestPaid(){
        return super.getInterestPaid()
    }
}


//instance of the classes above
const juanPersonalLoan = new PersonalLoan('Personal', 7000, 3, 12,  "to pay my mother's credit card");
const juanAutoLoan = new AutoLoan('Auto', 1, 4.2, 36, 'Toyota', 'Corolla', 2021, 3000, 22000);
const juanMortageLoan = new MortgageLoan('Mortgage', 1, 4, 360, '3090 Vitro Road, Bronx, NY 76890', 4, 2.5, 10000, 380000);

console.table(juanPersonalLoan);
console.table(juanAutoLoan);
console.table(juanMortageLoan);