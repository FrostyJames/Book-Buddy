import React, { useState, useEffect } from 'react';

function Library() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Remove book from favorites
  const removeFavorite = (id) => {
    const updated = favorites.filter(book => book.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="library-page">
      <h1>❤ Your Library</h1>

      {favorites.length === 0 ? (
        <p>No favorite books yet. Go to Home and add some!</p>
      ) : (
        <div className="book-list">
          {favorites.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} />
              <h4>{book.title}</h4>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p>{book.description}</p>

              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <button>Get Book</button>
              </a>

              <button onClick={() => removeFavorite(book.id)}>❌ Remove from Favorites</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;