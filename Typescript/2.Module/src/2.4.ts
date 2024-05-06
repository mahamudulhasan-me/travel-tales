{
  // generic -interface

  interface Developer<T, B = null> {
    name: string;
    laptop: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: B;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    price: number;
  }

  const frontEndDeveloper: Developer<SmartWatch> = {
    name: "Mahmudul",
    laptop: {
      brand: "ASUS",
      model: "U-5074",
      releaseYear: 2016,
    },
    smartWatch: {
      brand: "Amazfit",
      model: "Pop 3S",
      price: 5000,
    },
  };

  interface SmartWatch2 {
    brand: string;
    model: number;
    isCountHeartRate: boolean;
    isCountSleepTime: boolean;
  }
  interface Bike {
    brand: string;
    price: number;
  }
  const backendDeveloper: Developer<SmartWatch2, Bike> = {
    name: "Hasan",
    laptop: {
      brand: "Apple",
      model: "M2",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: 3,
      isCountHeartRate: true,
      isCountSleepTime: true,
    },
    bike: {
      brand: "Yamaha",
      price: 50000000,
    },
  };
}
