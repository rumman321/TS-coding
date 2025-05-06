{
   //mapped types
   const arrOfNumbers : number[]= [1,2,3,4,5]
//    const arrOfString : string[]= ['1','2','3']

    const arrOfString:string[] = arrOfNumbers.map((number)=> number.toString())

    console.log(arrOfString  );

    type AreaNumber = {
        height:number;
        width:number;

    }
    type Height = AreaNumber['height']
    type AreaString = {
        [key in keyof AreaNumber]:boolean
    }
}