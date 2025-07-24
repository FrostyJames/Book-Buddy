# 📚 BookBuddy

BookBuddy is a user-friendly React application that allows users to browse, add, favorite, and delete books. It integrates with a local JSON Server backend and the Open Library API to create a dynamic and interactive book management experience.

---

## 🚀 Features

- 🔍 Browse books with cover images, genre, and author info  
- ➕ Add new books via a responsive form  
- 🗑️ Permanently delete books from the backend  
- 💖 Mark books as favorites (stored in localStorage)  
- 📖 Toggle book descriptions  
- 🔗 Link to external book sources via Open Library

---

## 🛠️ Tech Stack

| Frontend | Backend     | Tools         |
|----------|-------------|---------------|
| React    | JSON Server | Vite          |
| JSX      | REST API    | Git           |
| CSS      | localStorage| Open Library API |

---

## 📦 Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/bookbuddy.git
cd bookbuddy
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set up JSON Server

Create a \`db.json\` file in the root directory:


Start the server:

\`\`\`bash
json-server --watch db.json --port 3001
\`\`\`

### 4. Run the React app

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📁 Project Structure

\`\`\`
bookbuddy/
├── public/
├── src/
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── README.md
└── package.json
\`\`\`

---


## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgments

- [Open Library API](https://openlibrary.org/developers/api)  
- [JSON Server](https://github.com/typicode/json-server)  
- [Vite](https://vitejs.dev/)
