var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const NewsAndUpdate = require('../models/newsAndUpdate');
const teams = require('../models/teams');
const administration = require('../models/administration');
const tour = require('../models/tourGallery');
const ourInfrastructureFacilities = require('../models/ourInfrastructureFacilities');

// have to delete this thing
const ourTopRankers = require('../models/ourTopRankers');
const ourPlacement = require('../models/ourPlacements');
const ipsTours = require('../models/ipsTours');
const ipsEvent = require('../models/ipsEvent');
const teaching = require('../models/teaching');

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
router.get('/page', async function(req, res, next) {
  const News = await NewsAndUpdate.find({});
  const ipsevent = await ipsEvent.find({});
  const Teams = await teams.find({});
  const Administration = await administration.find({});
  const Tour = await tour.find({});
  const OurInfrastructure = await ourInfrastructureFacilities.find({});
  const Teaching = await teaching.find({});

  res.render('admin', {News,Teaching, ipsevent, Teams, Administration, Tour, OurInfrastructure});
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

// Edit Teaching Data (including image)
router.post('/update-ourInfra', upload.single('image'), async (req, res) => {
  console.log("body_teams", req.body)
  console.log("file", req.file)
  const { id, title } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
      const updateData = { title, image };

      const updatedTeaching = await ourInfrastructureFacilities.findByIdAndUpdate(id, updateData, { new: true });
      console.log(updatedTeaching)

      if (!updatedTeaching) { 
          return res.status(404).send({ message: 'Teaching record not found' });
      }

      res.status(200).send({ message: 'Teaching record updated successfully', data: updatedTeaching });
  } catch (err) {
      res.status(500).send({ message: 'Error updating teaching record', error: err.message });
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

// Edit Teaching Data (including image)
router.post('/update-tour-gallery', upload.single('image'), async (req, res) => {
  console.log("body_teams", req.body)
  console.log("file", req.file)
  const { id, place } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
      const updateData = { place, image };

      const updatedTeaching = await tour.findByIdAndUpdate(id, updateData, { new: true });
      console.log(updatedTeaching)

      if (!updatedTeaching) { 
          return res.status(404).send({ message: 'Teaching record not found' });
      }

      res.status(200).send({ message: 'Teaching record updated successfully', data: updatedTeaching });
  } catch (err) {
      res.status(500).send({ message: 'Error updating teaching record', error: err.message });
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

// Edit Teaching Data (including image)
router.post('/update-administration', upload.single('image'), async (req, res) => {
  console.log("body_teams", req.body)
  console.log("file", req.file)
  const { id, name, role, department } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
      const updateData = { name, role, department, image };

      const updatedTeaching = await administration.findByIdAndUpdate(id, updateData, { new: true });
      console.log(updatedTeaching)

      if (!updatedTeaching) { 
          return res.status(404).send({ message: 'Teaching record not found' });
      }

      res.status(200).send({ message: 'Teaching record updated successfully', data: updatedTeaching });
  } catch (err) {
      res.status(500).send({ message: 'Error updating teaching record', error: err.message });
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

// Edit Teaching Data (including image)
router.post('/update-teams', upload.single('image'), async (req, res) => {
  console.log("body_teams", req.body)
  console.log("file", req.file)
  const { id, title } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
      const updateData = { title, image };

      const updatedTeaching = await teams.findByIdAndUpdate(id, updateData, { new: true });
      console.log(updatedTeaching)

      if (!updatedTeaching) { 
          return res.status(404).send({ message: 'Teaching record not found' });
      }

      res.status(200).send({ message: 'Teaching record updated successfully', data: updatedTeaching });
  } catch (err) {
      res.status(500).send({ message: 'Error updating teaching record', error: err.message });
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
    // res.render('admin.ejs')
    res.redirect('/admin/page')
  // } catch (err) {
  //   res.status(500).send('Error saving event to the database.');
  //   console.error(err);
  // }
});



// teaching route add, edit, delete
router.post('/teaching', upload.single('image'), async (req, res) => {
  try {
    const { name, role, course } = req.body;
    const image = req.file ? req.file.filename : null;  // Get the image file path

    const teachingStaff = new teaching({
      image: image, // Store the path of the uploaded image
      role: role,
      name: name,
      course: course
    });

    await teachingStaff.save();
    res.send('Teaching staff added successfuly');
    
  } catch (err) {
    res.status(500).send('Error saving event to the database.');
    console.error(err);
  }
});

// Edit Teaching Data (including image)
router.post('/update-teaching', upload.single('image'), async (req, res) => {
  console.log("body", req.body)
  console.log("file", req.file)
  const { id, name, course, role } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
      const updateData = { name, course, role, image };

      const updatedTeaching = await teaching.findByIdAndUpdate(id, updateData, { new: true });
      console.log(updatedTeaching)

      if (!updatedTeaching) { 
          return res.status(404).send({ message: 'Teaching record not found' });
      }

      res.status(200).send({ message: 'Teaching record updated successfully', data: updatedTeaching });
  } catch (err) {
      res.status(500).send({ message: 'Error updating teaching record', error: err.message });
  }
});

// Delete Teaching Data
router.post('/delete-teaching', async (req, res) => {
  const { id } = req.body;

  try {
      const deletedTeaching = await teaching.findByIdAndDelete(id);

      if (!deletedTeaching) {
          return res.status(404).send({ message: 'Teaching record not found' });
      }

      res.status(200).send({ message: 'Teaching record deleted successfully' });

  } catch (err) {
      res.status(500).send({ message: 'Error deleting teaching record', error: err.message });
  }
});



 // News Update route add, edit, delete
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

router.post('/update-newsAndUpdate', async (req, res) => {
  const { id, date, text } = req.body;

  try {
    // Find the document by id and update it
    const updatedNews = await NewsAndUpdate.findByIdAndUpdate(
      id, 
      { date: date, text: text }, 
      { new: true } // This returns the updated document
    );

    if (!updatedNews) {
      return res.status(404).send({ message: 'News item not found' });
    }

    res.status(200).send({ message: 'News updated successfully', data: updatedNews });

  } catch (err) {
    // If there's an error, send a 500 status and the error message
    res.status(500).send({ message: 'Error updating news', error: err.message });
  }
});

router.post('/delete-newsAndUpdate', async (req, res) => {
  const { id } = req.body;

  try {
      // Find the document by id and delete it
      const deletedNews = await NewsAndUpdate.findByIdAndDelete(id);

      if (!deletedNews) {
          return res.status(404).send({ message: 'News item not found' });
      }

      res.status(200).send({ message: 'News deleted successfully' });

  } catch (err) {
      // If there's an error, send a 500 status and the error message
      res.status(500).send({ message: 'Error deleting news', error: err.message });
  }
});



module.exports = router;
