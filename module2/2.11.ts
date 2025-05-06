{
    type Person = {
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    type NameAge = Pick<Person,"name"|'age'>

    //omit
    type ContactInfo = Omit<Person, 'name'|'age'>
    //required
    type PersonRequire = Required<Person>
    //partial
    type PersonPartial = Partial<Person>
    //readOnly
    type ReadOnly= Readonly<Person>
    const person1 : ReadOnly={
        name:'rumman',
        age:22,
        contactNo:'01872562829'
    }

    person1.name='SI'

    //recordType

    // type MyObj ={
    //     a:string;
    //     b:string;
    // }
    type MyObj = Record<string,string>
    type ObjRecord = Record<string,unknown>//ata besi use korbo
    const obj1:ObjRecord={
        a:'rumman',
        b:'SI',
        c:'love',
        d:'true',
        isMaride: true,
    }
}