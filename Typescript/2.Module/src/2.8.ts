{
  // asynchronous typescript
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const fetchData = async (): Promise<Todo> => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    // console.log(data)
    return data;
  };

  interface Something {
    data: string;
  }
  const createPromise = (): Promise<Something> => {
    const data = { data: "its data" };
    return new Promise<Something>((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data!");
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const result: Something = await createPromise();
    return result;
  };

  showData();

  //
}
