import React, { useEffect, useState } from 'react';

function Home() {
  const [books, setBooks] = useState([]);
  const [showDesc, setShowDesc] = useState({});
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    cover: '',
    description: '',
    link: ''
  });

  // Fetch books from JSON Server
  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  // Toggle description visibility
  const toggleDescription = (id) => {
    setShowDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle favorite status
  const toggleFavorite = (book) => {
    const isFav = favorites.find(fav => fav.id === book.id);
    const updated = isFav
      ? favorites.filter(fav => fav.id !== book.id)
      : [...favorites, book];

    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const isFavorite = (id) => favorites.some(book => book.id === id);

  // Handle form input
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  // Add new book to JSON Server
  const addBook = () => {
    const bookWithId = { ...newBook, id: Date.now() };

    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookWithId)
    })
      .then(() => {
        setBooks(prev => [...prev, bookWithId]);
        setNewBook({
          title: '',
          author: '',
          genre: '',
          cover: '',
          description: '',
          link: ''
        });
      })
      .catch(err => console.error('Error adding book:', err));
  };

  // Permanently delete book from JSON Server
  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to permanently delete this book?')) {
      fetch(`http://localhost:3001/books/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          setBooks(prev => prev.filter(book => book.id !== id));
        })
        .catch(err => console.error('Error deleting book:', err));
    }
  };

  return (
    <div className="home-page">
      <h1>📚 BookBuddy</h1>

      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} />
            <h4>{book.title}</h4>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>

            <button onClick={() => toggleDescription(book.id)}>
              {showDesc[book.id] ? 'Hide Description' : 'Show Description'}
            </button>

            {showDesc[book.id] && <p>{book.description}</p>}

            <button
              onClick={() => window.open(book.link, '_blank')}
              style={{ backgroundColor: '#0077cc', color: 'white' }}
            >
              Get Book
            </button>

            <button onClick={() => toggleFavorite(book)}>
              {isFavorite(book.id) ? '💖 Remove Favorite' : '🤍 Add to Favorites'}
            </button>

            <button
              onClick={() => deleteBook(book.id)}
              style={{ backgroundColor: '#cc0000', color: 'white' }}
            >
              🗑 Delete Book
            </button>
          </div>
        ))}
      </div>

      <div className="add-book-form">
        <h2>Add a Book</h2>
        <input name="title" placeholder="Title" value={newBook.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={newBook.author} onChange={handleChange} />
        <input name="genre" placeholder="Genre" value={newBook.genre} onChange={handleChange} />
        <input name="cover" placeholder="Cover URL" value={newBook.cover} onChange={handleChange} />
        <input name="description" placeholder="Description" value={newBook.description} onChange={handleChange} />
        <input name="link" placeholder="Open Library Link" value={newBook.link} onChange={handleChange} />
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default Home;