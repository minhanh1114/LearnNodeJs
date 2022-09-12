const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewController');

// slug
router.get('/:slug', newsController.show);

//index cấp thấp hơn của news slug // (luôn nằm dưới để các tuyến đường khác lướt qua trước)
router.get('/', newsController.index);

module.exports = router;
// Chọc vào tiếp cấp dưới nếu k có tham số sẽ trả ra  controller index build lên view index
