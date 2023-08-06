const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API.');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Example
  fetchDataFromAPI();
  