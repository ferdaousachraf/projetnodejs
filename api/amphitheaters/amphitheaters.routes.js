module.exports = app => {
    const amphitheatersController = require("./amphitheaters.controller");
    
    const auth = require("../../middleware/authenticateToken");

    var router = require("express").Router();

    router.use(auth);


    // -- Create a new amphitheater
    router.post("/", amphitheatersController.save);

    // -- To retrieve all amphitheaters
    router.get("/", amphitheatersController.findAll);

    // -- To retrieve a amphitheater
    router.get("/:amphitheaterId", amphitheatersController.findOne);

        // -- To delete a amphitheater
        router.delete("/:amphitheaterId", amphitheatersController.delete);

    app.use("/conferences-app/api/v1/amphitheaters", router);
}