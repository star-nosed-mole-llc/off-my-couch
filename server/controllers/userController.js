/*
  userController.js  --> This file will handle interacting with the 'users' table in our database

  Possible methods include createUser, deleteUser,
*/

const db = require('../databasePool');
const userController = {};


/* getAllUsers is a test method on the userController */
userController.getAllUsers = async (req, res, next) => {

  //setting up query string
  const sqlString= `
    SELECT * FROM users
  `;

  //query db to get all users
  db.query(sqlString).then(queryResponse => {
    console.log('queryResponse.rows:', queryResponse.rows);
    res.locals.allUsers = queryResponse.rows;
    next();
  })
  .catch(err => {
    return next(err);
  });
}


userController.addUser = (req, res, next) => {
  /*

  we need:
  -last name
  -first name,
  -Address
  -email
  -password
  */
 const {lastName, firstName, address, email, password } = req.query;


}

userController.login = (req, res, next) => {

}

userController.updateUser = (req,res,next) => {

}

userController.deleteUser = (req, res, next) => {

}

module.exports = userController;