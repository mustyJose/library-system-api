# 📚 Library Management API

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## ⚙️ Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-link>
cd library-system-api


📌 API Endpoints
👤 Authors
POST /authors → Create author
GET /authors → Get all authors
GET /authors/:id → Get single author
PUT /authors/:id → Update author
DELETE /authors/:id → Delete author


📚 Books
POST /books → Create book
GET /books → Get all books
GET /books/:id → Get one book
PUT /books/:id → Update book
DELETE /books/:id → Delete book


🔁 Borrow & Return
POST /books/:id/borrow → Borrow a book
POST /books/:id/return → Return a book


🎓 Students
POST /students → Create student
GET /students → Get all students
GET /students/:id → Get one student


🧑‍💼 Attendants
POST /attendants → Create attendant
GET /attendants → Get all attendants


🔥 Features
Book borrowing system
Book return system
Relationship between authors, books, students, and attendants
MongoDB population for detailed responses


👨‍💻 Author
Mustapha Salawu