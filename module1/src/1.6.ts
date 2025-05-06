{
    //function
//normal function
function add(num1:number,num2:number){
    return num1+num2
}

add(2,3)

const addArrow = (num1:number, num2:number)=> num1+num2

//object-> function -> method

const poorRumman={
    name:"Rumman",
    balance:0,
    addBalance(balance:number){
        return `My new balance : ${this.balance+balance}`
    }
}

const arr : number[]= [1,2,3,4]
const newArr= arr.map((e : number)=> e*e)

}