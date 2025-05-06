{
 //spread operator
 const bros1:string[]=['rumman','rihan','arhan']
 const bros2:string[]=['isha','sumiya']

 bros1.push(...bros2)

 const mentors1={
    typeScript:'Mezba',
    redux:'Mir',
    DBMS:'Mizan'
 }
 const mentors2={
    Prisma:'Firoz',
    Next:'Tanmoy',
    Cloud:'Nahid'
 }

 const MentorList={
    ...mentors1,...mentors2
 }

 //resrt operator
 const FrindList = (...friends:string[])=>{
    friends.forEach((friend:String) =>console.log`hi ${friend}`)
 }

 FrindList('Rumman','Isha','Mahfuj','sumiya')
}