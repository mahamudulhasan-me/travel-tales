{
  class Counter {
    // number: number = 0;
    static number: number = 0;
    static increment(): number {
      //   return (this.number = this.number + 1);
      return (Counter.number += 1);
    }
  }
  console.log(Counter.increment());
  console.log(Counter.increment());

  //   const newCounter = new Counter();
  //   newCounter.increment();
  //   console.log(newCounter.increment());

  //   const instanceOfCounter = new Counter();
  //   console.log(instanceOfCounter.increment());
}
