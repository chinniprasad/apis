//const connection = db[Object.keys(db)[0]]
const createSchema = require('./createSchema')

module.exports = {
 createUserModel : db.model('createUserModel', createSchema)
}