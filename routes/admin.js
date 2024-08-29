var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const NewsAndUpdate = require('../models/newsAndUpdate');
const ipsEvent = require('../models/ipsEvent');
const teams = require('../models/teams');
const administration = require('../models/administration');
const tour = require('../models/tourGallery');
const ourInfrastructureFacilities = require('../models/ourInfrastructureFacilities');
const ourTopRankers = require('../models/ourTopRankers');
const ourPlacement = require('../models/ourPlacements');
const ipsTours = require('../models/ipsTours');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Specify the directory to save uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName); // Name the file with a timestamp to avoid conflicts
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



router.post('/our-infrastructure-facilities', upload.single('image'), async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;  // Get the image file path

    const newEntry = new ourInfrastructureFacilities({
      image: image, // Store the path of the uploaded image
      title: title
    });

    await newEntry.save();
    res.send('Tour Place added successfuly');
    
  } catch (err) {
    res.status(500).send('Error saving event to the database.');
    console.error(err);
  }
});

router.post('/tour-gallery', upload.single('image'), async (req, res) => {
  try {
    const { place } = req.body;
    const image = req.file ? req.file.filename : null;  // Get the image file path

    const newEntry = new tour({
      image: image, // Store the path of the uploaded image
      place: place
    });

    await newEntry.save();
    res.send('Tour Place added successfuly');
    
  } catch (err) {
    res.status(500).send('Error saving event to the database.');
    console.error(err);
  }
});

router.post('/administration', upload.single('image'), async (req, res) => {
  try {
    const { name, role, department } = req.body;
    const image = req.file ? req.file.filename : null;  // Get the image file path

    const newEntry = new administration({
      name: name,
      role: role,
      image: image, // Store the path of the uploaded image
      department: department
    });

    await newEntry.save();
    res.send('department successfully with image uploaded!');
    
  } catch (err) {
    res.status(500).send('Error saving event to the database.');
    console.error(err);
  }
});

router.post('/teams', upload.single('image'), async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;  // Get the image file path

    const newEntry = new teams({
      title: title,
      image: image // Store the path of the uploaded image
    });

    await newEntry.save();
    res.send('Event created successfully with image uploaded!');
    
  } catch (err) {
    res.status(500).send('Error saving event to the database.');
    console.error(err);
  }
});

router.post('/ips-event', upload.single('image'), async (req, res) => {
  // try {
    const { title } = req.body;
    const image = req.file ? req.file.filename : null;  // Get the image file path

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
