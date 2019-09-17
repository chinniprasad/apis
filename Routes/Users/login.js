const Users = require("../../Models/Users");

module.exports = async (req, res) => {
  const response = Object.assign({}, BasicResponse);
  try {
    let users = new Users();
    let result = await users.get(req.query);
    console.log("result--------------", result);
    if (result) {
      console.log("--------------");
      response.success = true;
      response.message = "You logged successfully";
      response.data = result;
      res.status(200).json(response);
    } else {
      response.message = "Please Provide valid credentials";
      res.status(403).json(response);
    }
  } catch (err) {
    console.log("error", err);
  }
};
