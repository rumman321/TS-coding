{
    //interface -- generic
    interface Developer<T>{
       name:string;
       computer:{
        brand:string;
        model:string;
        releaseYear:number;
       }
       smartWatch:T;

    }

    type Watch = {
        brand:string,
        model:string,
        price:string,
        color?:string,
        sleepTrack?:boolean
    }

    const poorDeveloper : Developer<Watch> = {
        name:'rumman',
        computer:{
            brand:'acer',
            model:'Aspire -15',
            releaseYear:2019,
        },
        smartWatch:{
            brand:'Rolex',
            model:'A-55',
            price:'2000'
        }
        
    }
    const richDeveloper : Developer<Watch> = {
        name:'isha',
        computer:{
            brand:'HP',
            model:'Mk-009',
            releaseYear:2023,
        },
        smartWatch:{
            brand:'Rolex',
            model:'A-55',
            price:'$ 20000',
            color:'pink',
            sleepTrack:true,
        }
        
    }
}