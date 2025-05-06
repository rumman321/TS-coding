{
    //generic constraint with key operator
    type Vehicle = {
        car:string;
        bike:string;
        ship:string;
    }
    type Owner = 'bike'|'car'|'ship'
    type Owner2 = keyof Vehicle

    const  getPropertyValue =<X,Y extends keyof X> (obj:X, key:Y)=> {
        return obj[key]
    }
    const user  = {
        name:'rumman',
        age:22,
        address:'farmgate'
    }
    const car  = {
        model:'BMW',
        year:2002,
        price:'$ 20000'
    }
const result1 = getPropertyValue(car,'year')
    

    
 console.log(result1);

}