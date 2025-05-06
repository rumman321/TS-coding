{

    type ToDo = {
        id:number;
        title:string;
        completed: boolean;
    }
    const getToDo = async(): Promise<ToDo>=>{
       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data = await res.json()
       console.log(data);
       return data
    }

    getToDo()

    type Something = {something:string}
  const createPromise = () => {
    //new Promise<string> tells what the promise returns when it finishes.
    return new Promise<Something>((resolve, reject) => {
      const data: Something = {something:'rumman'}; // this is local, just a variable inside the function
      if (data) {
        resolve(data);
      } else {
        reject("there is no data");
      }
    });
  };

  const showData = async(): Promise<Something>=>{
    const data: Something = await createPromise()
    // console.log(data);
    return data
  }

  showData()








}
