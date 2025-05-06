{
    //union types
    type FrontendDeveloper =  'fakibaziDeveloper' | 'jnuiorDeveloper'
    const newDev : FrontendDeveloper = 'jnuiorDeveloper'

    type User ={
        name:string;
        email:string;
        bloodGroup:'o+'|'a+'|'b+';
        gender?:'male'|'female'
    }

    const user :User={
        name:'rumman',
        email:'rrmahfuz5@gmail.com',
        bloodGroup:'a+'
    }
}