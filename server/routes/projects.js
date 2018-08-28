const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/projects', function (req, res, next) {
    Project.find({}, (err, projects) => {
        if (err) {
            console.log(err);
            console.log('Bip');
        } else {
            res.send(projects);
        }
    })
});

// get projects by category
router.get('/projects/category/:category', (req, res, next) => {
    Project.find({categories: req.params.category}).then((projects) => {
        res.send(projects);
    });
});

// get a single project
router.get('/projects/:id', (req, res, next) => {
    Project.findById({_id: req.params.id}).then((project) => {
        res.send(project);
    });
});

module.exports = router;