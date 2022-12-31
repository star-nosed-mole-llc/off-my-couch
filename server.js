const express = require("express");
const path = require("path");
const app = express();
const assetsRouter = require("./server/assets-router");
const cors = require('cors');

app.use(cors());

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/src", assetsRouter);

app.use("/", express.static(path.join(__dirname, "public")));


/*  testing route to make sure front/backend are communicating  */
app.get('/testing', (req, res) => {
  console.log('got the testing request');
  res.status(200).send({msg: 'All is good!'});
});

/*  Testing that our db is connected and accessible   */
const userController = require('./server/controllers/userController');
app.get('/testDB', userController.getAllUsers, (req, res) => {
  return res.status(200).json(res.locals.allUsers);
})

app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});


app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})


/*
 express error handler
 */
 app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});