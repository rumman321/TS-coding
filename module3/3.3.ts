{
    //type guard
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
}