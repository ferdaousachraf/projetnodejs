module.exports = app => {
    const authController = require("./auth.controller");
    var router = require("express").Router();


    // -- register 
    router.post("/register", authController.register);

      // -- To update a attendee
      router.post("/login", authController.login);

    

    app.use("/conferences-app/api/v1", router);
}