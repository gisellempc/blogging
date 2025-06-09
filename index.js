import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/submit", (req, res) => {
  res.render("entries.ejs");
});

app.post("/submit", (req, res) => {
  let title = req.body.title;
  let text = req.body.text;
  res.render("entries.ejs", {
    title: title,
    text: text,
  });
  res.sendFile(__dirname + "/views/entries.ejs");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});