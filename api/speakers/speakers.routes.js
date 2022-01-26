module.exports = app => {
    const speakersController = require("./speakers.controller");
    
    const auth = require("../../middleware/authenticateToken");

    var router = require("express").Router();

    router.use(auth);



    // -- Create a new speaker
    router.post("/", speakersController.save);

    // -- To retrieve all speakers
    router.get("/", speakersController.findAll);

    // -- To retrieve a speaker
    router.get("/:speakerId", speakersController.findOne);

        // -- To delete a speaker
        router.delete("/:speakerId", speakersController.delete);

    app.use("/conferences-app/api/v1/speakers", router);
}