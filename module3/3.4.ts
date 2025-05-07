{
    //type guard using instance of

    class Animal {
        name:string;
        species:string;

        constructor(name:string, species:string){
            this.name = name,
            this.species = species
        }

        makeSound(){
            console.log(`I'm making sound`);
        }
    
    }
    class Dog extends Animal {
        constructor(name:string,species:string){
            super(name,species)
        }
        makeBark(){
            console.log(`i'm barking`);
        }
    }
    class Cat extends Animal {
        constructor(name:string,species:string){
            super(name,species)
        }
        makeMew (){
            console.log(`i'm Mew Mew `);
        }
    }
    //smart way to handle this
    const isDog = (animal:Animal)=>{
        return animal instanceof Dog
    }
    const isCat = (animal:Animal)=>{
        return animal instanceof Cat
    }

    const getAnimal =(animal:Animal)=>{
        // animal.makeBark()
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMew()
        }
        else{
            animal.makeSound()
        }
    }
    const dog = new Dog('Dog bro','dog')
    const cat = new Cat('cat bro','cat')
    
    // cat.makeMew()
    getAnimal(dog)
    
}