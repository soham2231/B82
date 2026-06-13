const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5003;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("We are learning Express");
});

app.get("/route1", (req, res) => {
  res.status(200).send("The First Route");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  name = name.toUpperCase();
  res
    .status(200)
    .send({ msg: "successfully submitted", success: true, user: name });
});

let student;

app.post("/stud-info", (req, res) => {
  console.log(req.body);

  student = {
    name: req.body.name,
    course: req.body.course,
    id: req.body.id,
  };
  res.status(200).json({ msg: "Got Student Info", success: true });
});

app.get("/get-stud", (req, res) => {
  res.status(200).send({ success: true, stud: student });
});

//------------------------------------------------------------------
app.listen(port, () => {
  console.log("Server Started on ", port);
});
