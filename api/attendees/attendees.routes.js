module.exports = app => {
    const attendeesController = require("./attendees.controller");
    
    const auth = require("../../middleware/authenticateToken");

    var router = require("express").Router();

    router.use(auth);


    // -- Create a new attendee
    router.post("/", attendeesController.save);

      // -- To update a attendee
      router.put("/:attendeeId", attendeesController.update);

    // -- To retrieve all attendees
    router.get("/", attendeesController.findAll);

    // -- To retrieve a attendee
    router.get("/:attendeeId", attendeesController.findOne);

        // -- To delete a attendee
        router.delete("/:attendeeId", attendeesController.delete);

    app.use("/conferences-app/api/v1/attendees", router);
}