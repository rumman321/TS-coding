{
  //generic type
  type GenericArray<T> = Array<T>;
  // const rollNumber : number[]= [1,2,3,4]
  const rollNumber: GenericArray<number> = [1, 2, 3, 4];
  // const mentors : string[]=['x','y','z']
  const mentors: GenericArray<string> = ["x", "y", "z"];
  const bollArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Rumman",
      age: 22,
    },
    {
      name: "isha",
      age: 20,
    },
  ];
  //generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["mr.X", "mr.Y"];

  type User={
    name:string,
    email:string
  }
  const UserWithID: GenericTuple<number, User> = [
    3333,
    { name: "rumman", email: "rrmahfuz5@gmail.com" },
  ];
}
