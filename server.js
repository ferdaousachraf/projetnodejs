const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */



// -- API routes definitions

require("./api/auth/auth.routes")(app);


require("./api/attendees/attendees.routes")(app);

require("./api/conferences/conferences.routes")(app);

require("./api/amphitheaters/amphitheaters.routes")(app);

require("./api/speakers/speakers.routes")(app);

require("./api/certificates/certificates.routes")(app);

require("./api/opinions/opinions.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});