const usersModel = require("../../../Schemas/User").createUserModel;

module.exports = async data => {
  try {
    let result = await usersModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};
