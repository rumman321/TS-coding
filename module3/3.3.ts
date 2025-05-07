{
    //type guard using typeof
    const add = (param1:string|number, param2:string|number) :string|number =>{
        if(typeof param1 === 'string' && typeof param2 === 'string'){
            console.log(param1+param2);
            return param1+param2
        }
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            console.log(param1+param2);
            return param1+param2
        }
        else{
            console.log('wrong input');
            return `wrong input`
        }
        
    }

    add('3','5')

    //type guard using in

    type NormalUser ={
        name:string
    }
    type AdminUser = {
        name:string;
        role:'admin'
    }
    const getUser = (user: NormalUser | AdminUser)=>{
       
        if('role' in user ){
            console.log(`${user.name} is Admin`);
        }else{
            console.log(`${user.name} in normal user`);
        }
    }

    const normal : NormalUser = {
        name:'rumman'
    }
    const admin : AdminUser = {
        name:'Mahfuj',
        role:'admin'
    }

    getUser(admin)

}