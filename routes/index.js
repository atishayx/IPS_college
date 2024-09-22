const express = require('express');
const NewsAndUpdate = require('../models/newsAndUpdate');
const ipsEvent = require('../models/ipsEvent');

const router = express.Router();

router.get('/', async function(req, res, next) {
  const newsAndUpdate = await NewsAndUpdate.find({});
  const ipsevent = await ipsEvent.find({});
  res.render('index', 
    { title: 'IPS College',
      news: newsAndUpdate,
      ipsevent: ipsevent
    });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page ' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Team Page ' });
});

router.get('/administration', function(req, res, next) {
  res.render('administration', { title: 'Administartion Page ' });
});

router.get('/placements', function(req, res, next) {
  res.render('placement', { title: 'Placement page ' });
});

router.get('/tours', function(req, res, next) {
  res.render('tours', { title: 'Tours Page' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Tours Page' });
});

router.get('/rankers', function(req, res, next) {
  res.render('rankers', { title: 'Ranker Page' });
});

router.get('/facilities', function(req, res, next) {
  res.render('facilities', { title: 'Ranker Page' });
});

router.get('/teaching', function(req, res, next) {
  res.render('teaching', { title: 'Ranker Page' });
});

router.get('/nonteaching', function(req, res, next) {
  res.render('nonteaching', { title: 'Ranker Page' });
});

router.get('/studentcorner', function(req, res, next) {
  res.render('studentcorner', { title: 'Ranker Page' });
});

router.get('/classrooms', function(req, res, next) {
  res.render('classrooms', { title: 'Ranker Page' });
});

router.get('/library', function(req, res, next) {
  res.render('library', { title: 'Ranker Page' });
});

router.get('/orientation', function(req, res, next) {
  res.render('orientation', { title: 'Ranker Page' });
});

router.get('/admissionprocess', function(req, res, next) {
  res.render('admissionprocess', { title: 'Ranker Page' });
});

router.get('/rules', function(req, res, next) {
  res.render('rules', { title: 'Ranker Page' });
});

router.get('/examinationscheme', function(req, res, next) {
  res.render('examinationscheme', { title: 'Ranker Page' });
});

router.get('/fee', function(req, res, next) {
  res.render('fee', { title: 'Ranker Page' });
});

router.get('/timetable', function(req, res, next) {
  res.render('timetable', { title: 'Ranker Page' });
});

router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Ranker Page' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Ranker Page' });
});

router.get('/campus', function(req, res, next) {
  res.render('campus', { title: 'Ranker Page' });
});

router.get('/lab', function(req, res, next) {
  res.render('lab', { title: 'Ranker Page' });
});

router.get('/community', function(req, res, next) {
  res.render('community', { title: 'Ranker Page' });
});

router.get('/health', function(req, res, next) {
  res.render('health', { title: 'Ranker Page' });
});

router.get('/nature', function(req, res, next) {
  res.render('nature', { title: 'Ranker Page' });
});

router.get('/yuvautsav', function(req, res, next) {
  res.render('yuvautsav', { title: 'Ranker Page' });
});

router.get('/activity', function(req, res, next) {
  res.render('activity', { title: 'Ranker Page' });
});

router.get('/social', function(req, res, next) {
  res.render('social', { title: 'Ranker Page' });
});

router.get('/footer', function(req, res, next) {
  res.render('footer', { title: 'Ranker Page' });
});

router.get('/cl2', function(req, res, next) {
  res.render('cl2', { title: 'Ranker Page' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Ranker Page' });
});

module.exports = router;
