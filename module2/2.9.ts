{
    //conditional type

    type a1 = unknown
    type a2 = undefined

    type x = a1 extends null ? true:false
    
    type Sheikh = {
        car:string;
        bike:string;
        ship:string;
        plane:string;
    }

    //keyof sheikh 'bike'|'car'|'ship'
    type Check<T> = T extends keyof Sheikh ? true : false
    type HasPlane = Check<"plane">
    
}