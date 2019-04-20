var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.getIndex);

router.get('/dashboard', indexController.getDashboard);
router.get('/helpline', indexController.getHelpline);
router.get('/events', indexController.getEvents);
router.get('/blogs', indexController.getBlogs);
router.post('/helpline', indexController.postHelpline);
router.get('/about', indexController.getAbout);
router.get('/roadmap', indexController.getRoadmap);

router.post('/handleSearch', indexController.handleSearch);

module.exports = router;
