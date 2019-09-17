const Schema = require("mongoose").Schema;

const createSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      select: true
    },
    email: {
      type: String,
      required: true,
      select: true
    },
    phone: {
      type: Number,
      required: true,
      select: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    collection: "Users",
    strict: "false",
    useNestedStrict: false
  }
);
module.exports = createSchema;
