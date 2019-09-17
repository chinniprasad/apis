const usersModel = require("../../../Schemas/User").createUserModel;

module.exports = async data => {
  try {
    let result = await usersModel.findOne({
      email: data.email,
      password: data.password
    });
    return result
  } catch (error) {
    throw error;
  }
};
