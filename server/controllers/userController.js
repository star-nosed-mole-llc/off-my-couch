/*
  userController.js  --> This file will handle interacting with the 'users' table in our database

  Possible methods include createUser, deleteUser,
*/

const db = require('../databasePool');
const userController = {};


/* getAllUsers is a test method on the userController */
userController.getAllUsers = async (req, res, next) => {
  try {
    //setting up query string
    const sqlString= `
      SELECT * FROM users
    `;
    const queryRes = db.query(sqlString);

    res.locals.allUsers = queryRes.rows;
    next();
  } catch(err) {
    return next({
      log: `getAllUsers: ERROR: ${err}`,
      status: 404,
      message: {err: 'Error occurred in getAllUsers Check server logs for more detail'}
    });
  }

  // //query db to get all users
  // db.query(sqlString).then(queryResponse => {
  //   // console.log('queryResponse.rows:', queryResponse.rows);
  //   res.locals.allUsers = queryResponse.rows;
  //   next();
  // })
  // .catch(err => {
  //   return next(err);
  // });
}

userController.addUser = async (req, res, next) => {
  /* PLEASE FORMAT LIKE SO BELOW OR LET US KNOW
  req.query = {
    lastName: ?,
    firstName: ?,
    address: ?,
    email: ?,
    password: ?
  };
  */

  console.log('addUser\'s req.body', req.body);
  try {
    const { lastName, firstName, address, email, password } = req.body;
    if (lastName && firstName && address && email && password) {
      const sqlString = `
        INSERT INTO users (last_name, first_name, address, email, password)
        Values ($1, $2, $3, $4, $5)
      `;
      const params = [lastName, firstName, address, email, password];
      const queryRes = await db.query(sqlString, params);

      return next();
    } else {
      throw new Error('Error occurred in addUser. Possible undefined values.');
    }
  } catch(err) {
    return next({
      log: `createUser: ERROR: ${err}`,
      status: 404,
      message: {err: 'Error occurred in addUser Check server logs for more detail'}
    });
  }
}


userController.login = async (req, res, next) => {
  /* PLEASE FORMAT LIKE SO BELOW OR LET US KNOW
  req.body = {
    email: ?,
    password: ?
  };
  */

  const {email, password} = req.body;
  const params = [email, password];

  const sqlString= `
    SELECT email FROM users
    WHERE email = $1 AND password = $2
  `;

  try {
    const queryRes = await db.query(sqlString, params);
    console.log('login\'s queryRes:', queryRes);
    //conditional to check that a user has loged in.
    if (queryRes.rows.length !== 0) return next();
    else {
      throw new Error('Error occurred in login. email and password don\'t match');
    }
  } catch(err) {
    return next({
      log: `login: ERROR: ${err}`,
      status: 404,
      message: {err: 'Error occurred in login Check server logs for more detail'}
    });
  }
}

userController.updateUser = (req,res,next) => {

}

userController.deleteUser = (req, res, next) => {

}

module.exports = userController;