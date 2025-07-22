const {
  getEmp,
  addEmp,
  editEmp,
  updateEmp,
  deleteEmp,
} = require("../controller/empController");
const express = require("express");
const router = express.Router();

router.get("/", getEmp);
router.post("/add", addEmp);
router.get("/edit/:id", editEmp);
router.post("/update/:id", updateEmp);
router.get("/delete/:id", deleteEmp);

module.exports = router;
