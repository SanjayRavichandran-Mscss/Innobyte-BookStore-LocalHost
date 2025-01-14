import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());
// Option 2:Allow Custom Origins
app.use(
    cors({
        origin:'http://localhost:5173',
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type'],
    })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Book-Store");
});

app.use('/books',booksRoute);
 const PORT = 5555;

mongoose
  .connect('mongodb+srv://sanjayravichandran006:SanjaySanjay.@book-store-mern.azmuetj.mongodb.net/books-collection?retryWrites=true&w=majority&appName=Book-Store-MERN')
  .then(() => {
    console.log("App Connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
