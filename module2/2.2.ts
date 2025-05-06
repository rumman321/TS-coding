{
    //interface
    type User1 ={
        name:string;
        age: number;

    }
    type UserWithRole = User1 & {role:string}

    const user: UserWithRole={
        name:'Rumman',
        age:22,
        role:'student'
    }
    console.log(user);
    interface User2{
        name:string;
        age: number;
    }

    
}