import React, { useEffect, useState } from 'react';

function Browse() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDesc, setShowDesc] = useState({});

  
  useEffect(() => {
    fetch('https://json-server-ozyq.onrender.com/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  const toggleDescription = (id) => {
    setShowDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter books by title or author
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-page">
      <h1>🔍 Browse Books</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} />
              <h4>{book.title}</h4>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>

              <button onClick={() => toggleDescription(book.id)}>
                {showDesc[book.id] ? 'Hide Description' : 'Show Description'}
              </button>

              {showDesc[book.id] && <p>{book.description}</p>}

              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <button>Get Book</button>
              </a>
            </div>
          ))
        ) : (
          <p>No books found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Browse;