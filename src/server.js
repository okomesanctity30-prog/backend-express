import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/user", (req, res) => {
  res.send({
    firstName: "Pre",
    lastName: "Wilson",
    email: "okomesanctity.com",
    createdAt: "17-03-2024",
    updatedAt: "09-11-2026",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    id: 1,
    firstName: "Pre",
    lastName: "Wilson",
    email: "okomesanctity.com",
    createdAt: "17-03-2024",
    updatedAt: "09-11-2026",
  });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
