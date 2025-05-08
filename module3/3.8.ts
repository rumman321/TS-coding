{
    //polymorphism
    class Person{
        getSleep(){
            console.log(`sleep 8 h/D`);
        }
    }

    class Student extends Person{
        getSleep(): void {
            console.log(`sleep 7 h/d`);
        }
    }
    class Developer extends Person{
        getSleep(): void {
            console.log(`sleep 5 h/d`);
        }
    }

    const getSleepingHours =(param: Person)=>{
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Person()
    const person3 = new Person()


    // getSleepingHours(person1)

    class Shape {
        getArea(): number{
            return 0
        }
    }
    class Circle extends Shape{
        radios:number;
        constructor(radios:number){
            super()
            this.radios = radios
        }

        getArea(): number {
            return Math.PI*this.radios*this.radios
        }
    }
    
    class Reactangle extends Shape{
        height:number;
        Weidth:number;
        constructor(height:number, weight:number){
            super()
            this.height = this.height
            this.Weidth = this.Weidth
        }

        getArea(): number {
            return this.height*this.Weidth
        }
    }

    const getShapeArea=(param:Shape)=>{
        console.log(param.getArea());
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Reactangle(10,10)
    getShapeArea(shape2)
}