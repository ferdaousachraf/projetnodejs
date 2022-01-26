module.exports = app => {
    const opinionsController = require("./opinions.controller");
    
    const auth = require("../../middleware/authenticateToken");

    var router = require("express").Router();

    router.use(auth);



    // -- Create a new opinion
    router.post("/", opinionsController.save);

    // -- To retrieve all opinions
    router.get("/", opinionsController.findAll);

    // -- To retrieve a opinion
    router.get("/:opinionId", opinionsController.findOne);

        // -- To delete a opinion
        router.delete("/:opinionId", opinionsController.delete);

    app.use("/conferences-app/api/v1/opinions", router);
}