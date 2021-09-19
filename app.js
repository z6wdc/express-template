const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  // database => an array of objects
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
    { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
    { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
    { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
  ];
  res.render("index.ejs", { languages });
});

app.get("/person", (req, res) => {
  res.render("person.ejs");
});

app.listen(80, () => {
  console.log("Server is running on port 80.");
});
