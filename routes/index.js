const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('models/Dog')
const dog = mongoose.model('dogs')


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const filter = {}
    const results = await dog.find();
    console.log(results);
    res.render('index', { title: 'dogs', dogs: results });
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const myDog = new dog({
      name: req.body.name,
      gender: req.body.gender,
      breed: req.body.breed,
      age: req.body.age,
      treat: req.body.breed
    });
    await myDog.save(); // Wait for the document to be saved before redirecting
    console.log('Document saved');
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error'); // Send 500 Internal Server Error status code
  }
});

module.exports = router;
