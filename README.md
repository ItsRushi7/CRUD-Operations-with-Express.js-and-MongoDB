# CRUD Operations with Express.js and MongoDB

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using **Express.js** and **MongoDB (Mongoose)**. It serves as a practical guide for developers to integrate MongoDB with an Express.js backend to manage data efficiently.

---

## 📌 Description

CRUD operations are fundamental when working with databases. This project utilizes **MongoDB**, a NoSQL database, and **Mongoose**, an Object Data Modeling (ODM) library for MongoDB, to perform CRUD operations seamlessly. 

### **Create**
Creating new data involves inserting a document into a MongoDB collection. In this project, users can be added via a **POST** request to `/users`, providing details such as `firstname`, `lastname`,  `age`,`email`,`isAdmin`. The request body is validated before storing the data in the database.

### **Read**
Retrieving data is crucial for any application. This project includes routes to fetch all users (`GET /users`) and a specific user by ID (`GET /users/:id`). The responses return JSON objects containing the requested user details.

### **Update**
Updating data requires modifying an existing document in the database. Users can update their information via a **PUT** request to `/users/:id`. The API ensures that only valid MongoDB Object IDs are processed, and updates are validated before being saved.

### **Delete**
Removing data is performed using a **DELETE** request to `/users/:id`. If the user exists, they are removed from the database, and a success message is returned. Invalid or non-existent IDs result in appropriate error handling responses.

This project is structured efficiently, separating concerns with a modular approach. Routes are defined in `routes/userRoutes.js`, models are managed in `models/User.js`, and the main Express application is in `server.js`. Additionally, environment variables are handled using a `.env` file to manage MongoDB connection details securely.

By implementing this project, developers can understand how to set up a RESTful API with Express.js and MongoDB, manage database operations with Mongoose, and handle error responses effectively. The project follows best practices, including input validation, error handling, and proper response structuring.

---

## 📌 Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

---

## 📥 Installation

### 1️⃣ Clone the Repository
```sh
git clone <your-repository-url>
cd <your-project-folder>
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure MongoDB Connection
Create a **.env** file and add your MongoDB connection string:
```env
MONGODB_URI=mongodb://localhost:27017/mydatabase
PORT=3000
```

---

## 🚀 Running the Server

Start the server with:
```sh
npm start
```
The API will be available at: `http://localhost:3000`

---

## 📌 API Routes

### 1️⃣ **Create a User**
- **Endpoint:** `POST /users`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully",
    "user": { ... }
  }
  ```

### 2️⃣ **Get All Users**
- **Endpoint:** `GET /users`
- **Response:**
  ```json
  [
    {
      "_id": "650123abc",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 25
    }
  ]
  ```

### 3️⃣ **Get a Single User by ID**
- **Endpoint:** `GET /users/:id`

### 4️⃣ **Update a User by ID**
- **Endpoint:** `PUT /users/:id`
- **Request Body:**
  ```json
  {
    "name": "Jane Doe"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User updated successfully",
    "user": { ... }
  }
  ```

### 5️⃣ **Delete a User by ID**
- **Endpoint:** `DELETE /users/:id`
- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

---

## 📜 Project Structure
```
├── server.js          # Main Express app
├── models             # Mongoose schemas
│   ├── User.js        # User schema
├── routes             # API routes
│   ├── userRoutes.js  # User-related routes
├── .env               # Environment variables
├── package.json       # Dependencies
└── README.md          # Documentation
```

---

## 🔧 Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

---

## 📌 License
This project is open-source and available under the **MIT License**.

Happy Coding! 🚀

