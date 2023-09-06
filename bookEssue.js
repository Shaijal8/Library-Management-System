document.addEventListener('DOMContentLoaded', function() {
    const issueBookForm = document.getElementById('issueBookForm');
    const bookNameInput = document.getElementById('bookName');
    const authorNameInput = document.getElementById('authorName');
  
    const urlParams = new URLSearchParams(window.location.search);
    const bookTitle = urlParams.get('title');
    const bookAuthor = urlParams.get('author');
  
  
    bookNameInput.value = bookTitle;
    authorNameInput.value = bookAuthor;
  
  
    issueBookForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
    });
  });