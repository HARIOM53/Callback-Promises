fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    
  })
  .catch(error => {
    console.log('An error occurred:', error.message);
    
  });
