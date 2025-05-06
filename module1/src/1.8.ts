{
    // destructuring
     
    const user={
        id:111,
        name:{
            firstName:"Rumman",
            MiddleName:"Isha",
            LastName:"Mahfuj"
        },
        contactNo:'01872562829',
        address:'Kamrangircor'
    }
    //name alias {MiddleName:midName}
    const {contactNo,name:{MiddleName:midName}}=user

    //array destructuring
    const myFriends = ['rumman','mahfuj','isha','sumiya','mim','ruhi','rihan']
    const [,,love,...rest] = myFriends //skip 1st 2nd  element and ...rest will take the rest of the elements

}