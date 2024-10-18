import express from "express";

import morgan from "morgan";
import helmet from "helmet";

import questions from "./questions.json" with { type: "json" };


// const fs = require("fs");
// const path = require("path");
const app = express();

app.use(express.json());
app.use(morgan('common'));
app.use(helmet());

const port = 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the Halloween Quiz Trivia");
});


// endpoint to get quiz data 

app. get("/quiz", (req,res) => {
  res.json(questions)
})


  app.listen(port, () => {
    console.log(`Server is running on http://localhost ${port}`)
  });

