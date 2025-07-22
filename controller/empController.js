const empModel = require("../model/empModel");

const getEmp = async (req, resp) => {
  try {
    const result = await empModel.find();
    resp.render("index", { result: result, employee: null });
  } catch (error) {
    console.log(error);
  }
};

const addEmp = async (req, resp) => {
  try {
    const data = new empModel({
      name: req.body.name,
      salary: req.body.salary,
    });
    await data.save();
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const editEmp = async (req, resp) => {
  try {
    const employee = await empModel.findById(req.params.id);
    const result = await empModel.find();
    resp.render("index", { result: result, employee: employee });
  } catch (error) {
    console.log(error);
  }
};

const updateEmp = async (req, resp) => {
  try {
    await empModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      salary: req.body.salary,
    });
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteEmp = async (req, resp) => {
  try {
    await empModel.findByIdAndDelete(req.params.id);
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getEmp, addEmp, editEmp, updateEmp, deleteEmp };
