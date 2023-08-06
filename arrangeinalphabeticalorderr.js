const logTitles = (titles) => {
    titles.sort(); 
    console.log("Titles in alphabetical order:");
    titles.forEach((title) => {
        console.log(title);
    });
};

// Example 
const books = [
    { title: "Book A", author: "Author A", year: 2020 },
    { title: "Book C", author: "Author C", year: 2018 },
    { title: "Book B", author: "Author B", year: 2021 }
  ];
  
  const processBookTitles = (bookList, callback) => {
    const titles = bookList.map((book) => book.title); 
    callback(titles); 
  };
  

  processBookTitles(books, logTitles);
  