const express = require("express");
const router = express.Router();
let { people } = require("../data");
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name " });
  }
  res.status(201).json({ success: true, person: name });
});
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name " });
  }
  res.status(201).json({ success: true, data: [...people, { name }] });
});
//put method
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id == parseInt(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      msg: `person with the id of ${id} doesnt exist to update`,
    });
  }
  const updatedPeople = people.map((person) => {
    if (person.id == id) {
      return (person.name = name);
    }
    return person;
  });

  res.status(200).json({
    success: true,
    people: updatedPeople,
  });
});
//delete method
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id == parseInt(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      msg: `person with the id of ${id} doesnt exist to update`,
    });
  }
  const updatedPeople = people.filter((person) => person.id !== parseInt(id));

  res.status(200).json({
    success: true,
    people: updatedPeople,
  });
});
module.exports = router;
