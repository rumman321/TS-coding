{
    //oop 

    class Animal {
        // name:string;
        // species: string;
        // sound:string;


        constructor(public name:string, public species:string, public sound:string){
            // this.name= name,
            // this.species= species,
            // this.sound = sound
        }

        makeSound(){
            console.log(`this ${this.name} says ${this.sound}`);	
        }
    }

    const dog = new Animal('kutta','dog','ghew ghew')
    const cat = new Animal('billi','cat','mew mew')
    cat.makeSound()
}