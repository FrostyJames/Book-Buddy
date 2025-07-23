function handleAddToReading() {
  const book = { title, author, key: bookKey };
  const reading = JSON.parse(localStorage.getItem('reading')) || [];
  const updated = [...reading, book];
  localStorage.setItem('reading', JSON.stringify(updated));
  alert(`${title} added to your reading list!`);
}