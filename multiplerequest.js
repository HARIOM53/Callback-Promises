async function getDataFromAPIs() {
  const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
  const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1');

  try {
    const [todoResponse, postResponse] = await Promise.all([todoPromise, postPromise]);
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData
    };

    console.log(combinedData);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

getDataFromAPIs();
