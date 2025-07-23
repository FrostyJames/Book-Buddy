import { useEffect, useState } from 'react';

function Library() {
  const [favorites, setFavorites] = useState([]);
  const [reading, setReading] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const savedReading = JSON.parse(localStorage.getItem('reading')) || [];
    setFavorites(savedFavorites);
    setReading(savedReading);
  }, []);

  return (
    <div className="page-content">
      <h2>📚 Your Library</h2>

      <section>
        <h3>❤️ Favorites</h3>
        {favorites.length === 0 ? (
          <p>No favorite books yet.</p>
        ) : (
          favorites.map(book => (
            <div key={book.key} className="book-card">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))
        )}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>📖 Currently Reading</h3>
        {reading.length === 0 ? (
          <p>You’re not reading anything right now.</p>
        ) : (
          reading.map(book => (
            <div key={book.key} className="book-card">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Library;