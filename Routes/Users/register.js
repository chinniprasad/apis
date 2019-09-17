const Users = require("../../Models/Users");

module.exports = async (req, res) => {
  const response = Object.assign({}, BasicResponse);
  try {
    let users = new Users();
    let result = await users.create(req.body);
    response.success = true;
    response.message = "registration completed";
    response.data = result;
    res.status(200).json(response);
  } catch (err) {
    console.log("error",err)
    response.message = err;
    res.status(403).json(response);
  }
};
