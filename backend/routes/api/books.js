const express = require("express");
const Book = require("../../models/Book");

const router = express.Router();

router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.sendStatus(400).json({ msg: "No books found." }));
});

router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.sendStatus(400).json({ msg: "Book data not found." }));
});

router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book added" }))
    .catch((err) => res.sendStatus(400).json({ err: "Book creation error." }));
});

router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "Book updated" }))
    .catch((err) => res.sendStatus(400).json({ err: "Book updation error." }));
});

router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then((book) => res.json({ msg: "Book deleted" }))
    .catch((err) => res.sendStatus(400).json({ err: "Del error." }));
});

module.exports = router;
