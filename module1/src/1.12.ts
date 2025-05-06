{
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };

  //    searchName(null)

  //unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} m/s`);
    }

    if (typeof value === "string") {
      const [number, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(number) * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} m/s`);
    }
    else{
        console.log(`wrong input`);
    }
  };

  getSpeedInMeterPerSecond(null);
}
