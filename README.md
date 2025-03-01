CRUD Operations with Express.js and MongoDB

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Express.js and MongoDB (Mongoose).

📌 Prerequisites

Before running this project, ensure you have the following installed:

Node.js

MongoDB

📥 Installation

1️⃣ Clone the Repository

git clone <your-repository-url>
cd <your-project-folder>

2️⃣ Install Dependencies

npm install

3️⃣ Configure MongoDB Connection

Create a .env file and add your MongoDB connection string:

MONGODB_URI=mongodb://localhost:27017/mydatabase
PORT=3000

🚀 Running the Server

Start the server with:

npm start

The API will be available at: http://localhost:3000

📌 API Routes

1️⃣ Create a User

Endpoint: POST /users

Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}

Response:

{
  "message": "User created successfully",
  "user": { ... }
}

2️⃣ Get All Users

Endpoint: GET /users

Response:

[
  {
    "_id": "650123abc",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
]

3️⃣ Get a Single User by ID

Endpoint: GET /users/:id

4️⃣ Update a User by ID

Endpoint: PUT /users/:id

Request Body:
  
{
  "name": "Jane Doe"
}

Response:

{
  "message": "User updated successfully",
  "user": { ... }
}

5️⃣ Delete a User by ID

Endpoint: DELETE /users/:id

Response:

{
  "message": "User deleted successfully"
}



🔧 Tech Stack

Node.js - JavaScript runtime

Express.js - Web framework

MongoDB - NoSQL database

Mongoose - ODM for MongoDB

📌 License

This project is open-source and available under the MIT License.

Happy Coding! 🚀

