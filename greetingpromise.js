const greetWithName = (name) => {
    return new Promise((resolve, reject) => {
      if (typeof name !== "string" || name.trim().length === 0) {
        reject("Invalid name. Please provide a valid name as a string.");
      } else {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
      }
    });
  };
  
  // Example 
  greetWithName("Mithun")
    .then((greeting) => {
      console.log(greeting); 
    })
    .catch((error) => {
      console.error(error);
    });
  