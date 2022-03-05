// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
// console.log(process.env.DB_USER)
// const express = require("express");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// require("./auth/passport");

// require("./models/user");

// const middlewares = require("./middlewares");

// var users = require('./api/login')
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(morgan("dev"));
// app.use(helmet());
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     message: "Welcome to the app",
//   });
// });

// app.use('/users', users);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

// app.listen(3001);
// console.log('Listening on port 3001');
// module.exports = app;
