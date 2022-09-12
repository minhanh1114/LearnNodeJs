const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create); // chọc vào param con
router.post('/store', courseController.store); // chọc vào param con
router.put('/update/:id', courseController.update); // chọc vào param con
router.get('/:id/edit', courseController.edit); // chọc vào param con
router.get('/:slug', courseController.show); // chọc vào param con

module.exports = router;
