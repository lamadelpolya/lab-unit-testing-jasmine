function booksByAuthor(dictionary) {
  const booksArray = [];

  for (const author in dictionary) {
    dictionary[author].forEach((book) => {
      booksArray.push({
        title: book[0],
        pages: book[1],
        author: author,
      });
    });
  }

  return booksArray;
}
