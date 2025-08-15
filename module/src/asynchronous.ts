{
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async (): Promise<void> => {
    try {
      const data = await createPromise();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  showData();
}
