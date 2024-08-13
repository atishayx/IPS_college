var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const NewsAndUpdate = require('../models/newsAndUpdate');
const ipsEvent = require('../models/ipsEvent');

// Set up Multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify the directory to save uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) // Name the file with a timestamp to avoid conflicts
  }
});

const upload = multer({ storage: storage });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is Admin Router');
});
router.get('/page', function(req, res, next) {
    res.render('admin');
  });

router.get('/clickme', function(req, res, next) {
  res.render('clickme');
});

router.post('/ips-event', upload.single('image'), async (req, res) => {
  // try {
    const { title } = req.body;
    const image = req.file ? req.file.path : null; // Get the image file path

    const newEntry = new ipsEvent({
      title: title,
      image: image // Store the path of the uploaded image
    });

    await newEntry.save();
    res.send('Event created successfully with image uploaded!');
  // } catch (err) {
  //   res.status(500).send('Error saving event to the database.');
  //   console.error(err);
  // }
});

 // Handle form submission
router.post('/newsAndUpdate', async(req, res) => {
  const { datetime, information } = req.body;

  // Create a new entry based on the submitted data
  const newEntry = new NewsAndUpdate({
      date: datetime,
      text: information
  });

  try {
    // Save the entry to MongoDB
    await newEntry.save();
    res.send('Form submitted and data saved successfully!');
  } catch (err) {
    res.status(500).send('Error saving data to the database.');
    console.error(err);
  }
}); 


module.exports = router;
