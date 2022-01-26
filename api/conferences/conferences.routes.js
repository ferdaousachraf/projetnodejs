module.exports = app => {

    const controller = require("./conferences.controller");

    const auth = require("../../middleware/authenticateToken");

    var router = require("express").Router();

    router.use(auth);

    // -- Create a new conferences
    router.post("/", controller.save);

    // -- To retrieve all conferences
    router.get("/", controller.findAll);

    // -- To retrieve a conferences
    router.get("/:conferenceId", controller.findOne);

    // -- To update a conferences
    router.put("/:conferenceId", controller.update);

    // -- To add Attendee to a conference
    router.post("/:conferenceId/attendee", controller.addAttendeeToConference);

    // -- To delete a conferences
    router.delete("/:conferenceId", controller.delete);



    // -- To add conferences url 
    app.use("/conferences-app/api/v1/conferences", router);
}