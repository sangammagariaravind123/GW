const express = require("express");
const { getAllLaptops,searchContoller } = require("../controllers/Laptop");

const router = express.Router();

router.get("/getAllLaptops", getAllLaptops);
router.get("/search/:keyword",searchContoller);



module.exports = router;

