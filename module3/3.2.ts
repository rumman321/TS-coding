{
    //oop - inheritance

    class Parent {
        name:string;
        age:number;
       
        address:string;

        constructor(name:string,  age:number,address:string){
            this.name = name;
            this.age = age
            
            this.address = address
            
        }

        getSleep (numberOfHour: number){
            console.log(`${this.name} will sleep for ${numberOfHour} H`);
        }
    }
    class student extends Parent {
        
        constructor(name:string,age:number,address:string){
            super(name,age,address)
        }

        
       
    }

    const student1 = new student('rumman',210652, 'uganda')
    student1.getSleep(10)


    class Teacher extends Parent{
        
        ID:number;
        subject:string;
        

        constructor(name:string,age:number, ID:number, subject:string , address:string){
            super(name,age,address)
            this.ID = ID;
            this.subject = subject
        }

        getSleep (numberOfHour: number){
            console.log(`${this.name} will sleep for ${numberOfHour} H`);
        }

        takeClass(numberOfClass:number){
            console.log(`${this.name} will take ${numberOfClass} in a day`);
        }
       
    }

    const Teacher1= new Teacher('name',22,2121, 'math', 'mohammadpur')
}