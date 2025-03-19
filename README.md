# 🚀 Dockerized Full-Stack To-Do Application

## 📌 Overview
This is a **full-stack to-do application** built with a **Node.js backend**, a **PostgreSQL database**, and a **React front-end**. The project is **fully containerized using Docker**, utilizing **Prisma ORM** for database interactions and **JWT authentication** for user security. 

This project was developed as a **practice exercise** to reinforce backend fundamentals, database management with Prisma, authentication with JWT, and containerization using Docker.

---

## ✨ Features
- ✅ **User Authentication**: Sign up, log in, and secure routes with **JWT**.
- ✅ **Task Management**: Add, update, delete, and mark tasks as completed.
- ✅ **Prisma ORM**: Simplifies database operations with **TypeScript support**.
- ✅ **Dockerized Setup**: Easily deployable with **Docker Compose**.
- ✅ **PostgreSQL Database**: Persistent data storage.
- ✅ **RESTful API**: Clean and structured endpoints.
- ✅ **Environment Variables**: Uses a `.env` file for configuration.

---

## 🛠️ Tech Stack
### **Backend**
- **Node.js** (Express.js)
- **Prisma ORM** (PostgreSQL database management)
- **JWT** (Authentication & Authorization)
- **Docker & Docker Compose** (Containerized setup)
- **bcryptjs** (Password hashing)
- **dotenv** (Environment variable management)

### **Database**
- **PostgreSQL** (SQL-based relational database)

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (For local development without Docker)

### 🔥 Running the Project with Docker
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/docker-todo-app.git
   cd docker-todo-app
   ```
2. Run the application using Docker Compose:
   ```sh
   docker-compose up --build
   ```
3. The application will be available at:
   - **Backend**: `http://localhost:5000`
   - **Frontend**: Open `index.html` manually in a browser
   - **PostgreSQL Database**: Running on port `5432`

### 🛠️ How It Works
- The **backend container** is built from the `Dockerfile`, which:
  - Uses the `node:22-alpine` image as the base.
  - Sets `/app` as the working directory.
  - Copies `package.json` and `package-lock.json`, then runs `npm install`.
  - Copies the remaining source code.
  - Exposes port `5000` and runs `node ./src/server.js`.
- The **database container** uses `postgres:13-alpine` and is configured via environment variables.
- The **frontend** is a simple `index.html` file that interacts with the API using JavaScript's Fetch API.
- The `volumes` ensure data persistence for PostgreSQL.

### 🛠️ Running Without Docker (Local Development)
If you prefer to run it without Docker, follow these steps:

1. **Start the PostgreSQL database** and create a database named `todoapp`.
2. **Configure Prisma**:
   ```sh
   cd server
   npm install
   npx prisma migrate dev --name init
   ```
3. **Start the backend**:
   ```sh
   npm run dev
   ```
4. **Open the frontend manually**:
   - Open `index.html` in a browser

---

## 📡 API Endpoints
### **Authentication**
| Method | Endpoint         | Description         | Protected |
|--------|-----------------|---------------------|-----------|
| POST   | /auth/register  | Register new user  | ❌       |
| POST   | /auth/login     | Login user         | ❌       |

### **Tasks**
| Method | Endpoint     | Description                   | Protected |
|--------|-------------|-------------------------------|-----------|
| GET    | /todos      | Get all tasks for a user     | ✅        |
| POST   | /todos      | Create a new task            | ✅        |
| PUT    | /todos/:id  | Update a task                | ✅        |
| DELETE | /todos/:id  | Delete a task                | ✅        |

(*Protected routes require a JWT token in the `Authorization` header*)

---
## 📜 License
This project is **MIT licensed**. Feel free to modify and use it as needed!

---

## 🙌 Acknowledgements
This project was built as a **learning exercise** to improve backend development skills, practice **Prisma ORM**, **Docker**, and authentication with **JWT**.

If you like this project, feel free to **⭐️ the repository** on GitHub!

---
