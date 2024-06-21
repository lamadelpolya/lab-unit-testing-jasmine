// UNCOMMENT THE CODE BELOW TO START

if (typeof require !== "undefined") {
  var { booksByAuthor } = require("../index.js");
}

describe("Iteration 2", () => {
  describe("Function - booksByAuthor", () => {
    it("should return the correct array of book objects for a given dictionary", () => {
      const dictionaryExample = {
        "J. K. Rowling": [
          ["Harry Potter and the Philosopher's Stone", 223],
          ["Harry Potter and the Chamber of Secrets", 251],
          ["Harry Potter and the Prisoner of Azkaban", 317],
          ["Harry Potter and the Goblet of Fire", 636],
        ],
        "Neal Stephenson": [
          ["Cryptonomicon", 928],
          ["Anathem", 1008],
          ["Fall; or, Dodge in Hell", 896],
        ],
        "Malcolm Gladwell": [
          ["Outliers", 320],
          ["Blink", 287],
        ],
      };

      const expectedOutput = [
        {
          title: "Harry Potter and the Philosopher's Stone",
          pages: 223,
          author: "J. K. Rowling",
        },
        {
          title: "Harry Potter and the Chamber of Secrets",
          pages: 251,
          author: "J. K. Rowling",
        },
        {
          title: "Harry Potter and the Prisoner of Azkaban",
          pages: 317,
          author: "J. K. Rowling",
        },
        {
          title: "Harry Potter and the Goblet of Fire",
          pages: 636,
          author: "J. K. Rowling",
        },
        { title: "Cryptonomicon", pages: 928, author: "Neal Stephenson" },
        { title: "Anathem", pages: 1008, author: "Neal Stephenson" },
        {
          title: "Fall; or, Dodge in Hell",
          pages: 896,
          author: "Neal Stephenson",
        },
        { title: "Outliers", pages: 320, author: "Malcolm Gladwell" },
        { title: "Blink", pages: 287, author: "Malcolm Gladwell" },
      ];

      expect(booksByAuthor(dictionaryExample)).toEqual(expectedOutput);
    });

    it("should return an empty array for an empty dictionary", () => {
      expect(booksByAuthor({})).toEqual([]);
    });

    it("should handle a dictionary with only one author and one book", () => {
      const singleAuthorDictionary = {
        "Harper Lee": [["To Kill a Mockingbird", 281]],
      };

      const expectedOutput = [
        { title: "To Kill a Mockingbird", pages: 281, author: "Harper Lee" },
      ];

      expect(booksByAuthor(singleAuthorDictionary)).toEqual(expectedOutput);
    });

    it("should handle a dictionary with multiple authors, some with no books", () => {
      const complexDictionary = {
        "Harper Lee": [],
        "George Orwell": [["1984", 328]],
        "Aldous Huxley": [
          ["Brave New World", 268],
          ["Island", 354],
        ],
      };

      const expectedOutput = [
        { title: "1984", pages: 328, author: "George Orwell" },
        { title: "Brave New World", pages: 268, author: "Aldous Huxley" },
        { title: "Island", pages: 354, author: "Aldous Huxley" },
      ];

      expect(booksByAuthor(complexDictionary)).toEqual(expectedOutput);
    });
  });
});
