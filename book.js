// Sample book data (you should fetch this data from a database)
const booksData = [
    {
      title: 'Book 1',
      author: 'Author 1',
      image: 'img.jpg',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      image: 'img.jpg',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      image: 'img.jpg',
    }, {
      title: 'Book 4',
      author: 'Author 4',
      image: 'img.jpg',
    }, {
      title: 'Book 5',
      author: 'Author 6',
      image: 'img.jpg',
    },
    // Add more book data as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const bookGrid = document.querySelector('.book-grid');
  
    // Generate book cards dynamically
    booksData.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
  
      const bookImage = document.createElement('img');
      bookImage.src = book.image;
      bookImage.alt = `Image of ${book.title}`;
  
      const bookTitle = document.createElement('h2');
      bookTitle.textContent = book.title;
  
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = book.author;
  
      const issueButton = document.createElement('button');
      issueButton.className = 'issue-button';
      issueButton.textContent = 'Issue';
  
      // Add click event listener to the "Issue" button
      issueButton.addEventListener('click', function() {
        // Redirect to the book issue page with book details
        window.location.href = `bookEssue.html?title=${encodeURIComponent(book.title)}&author=${encodeURIComponent(book.author)}`;
      });
  
      // Append elements to the book card
      bookCard.appendChild(bookImage);
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(issueButton);
  
      // Append the book card to the grid
      bookGrid.appendChild(bookCard);
    });
  });