Book Management API

Node.js + Express REST API for managing books. Implemented work with
MongoDB and basic routes for reading and adding books 

────────────────────────────────────────────── Project Contents

The project contains two versions:

Versions
 Main 
 With autotests 
Folders
 book-management
 book-management-tests 
Purpose 
 Working version of API without autotests
 Attempt to implement tests with mocha + chai-http
──────────────────────────────────────────────
Installation and launch

1\. Go to the desired folder (book-management or book-management-tests)

2\. Install dependencies: npm install

3\. Create a .env file with the following content:
MONGO_URI=mongodb://localhost:27017/bookdb

4\. Start the server: npm start

────────────────────────────────────────────── API routes

Method 
 GET 
 POST 
URL 
 /books 
 /books 
Description 
 Get a list of all books
 Add a new book

Example JSON for POST request:

{
"title": "Title",
"author": "Author",
"year": 2003,
"pages": 100
}

────────────────────────────────────────────── About tests

In the book-management-tests/ folder, an attempt at autotesting was
implemented using:

- mocha
- chai
 - chai-http

Test file: test/book.test.js

Command to run: npm test

However, when connecting chai-http, an error occurred: TypeError:
chai.request is not a function

Due to the ESM/CJS conflict and technical limitations, autotests did not
work stably. All API routes were tested manually via Postman.
────────────────────────────────────────────── Project structure

Backend_Project/
├── book-management/
│   ├── app.js
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── ...
├── book-management-tests/
│   ├── app.js
│   ├── test/
│   │   └── book.test.js
│   └── ...
└── README.md

────────────────────────────────────────────── 
Made by 
Nurassyl Ibraimov
Ali Bertys
