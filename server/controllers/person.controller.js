const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createPerson = (req, res) => {
  const { firstName, lastName } = req.body;
  Person.create({
    firstName,
    lastName,
  })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};
