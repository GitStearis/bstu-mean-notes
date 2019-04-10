require("dotenv").config();

const mongoose = require("./database/mongoose");

const app = require("express")();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const router = require("./routes/note");

mongoose.connect();

app.use(bodyParser.json());
app.use((request, response, next) => {
   response.header("Access-Control-Allow-Credentials", "true");
   response.header("Access-Control-Allow-Origin", "*");
   response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
   response.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");
   next();
});
app.use("/api", router);

server.listen(process.env.PORT);