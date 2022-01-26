module.exports = app => {
    const certificatesController = require("./certificates.controller");
    
    const auth = require("../../middleware/authenticateToken");

    var router = require("express").Router();

    router.use(auth);


    // -- Create a new certificate
    router.post("/", certificatesController.save);

    // -- To retrieve all certificates
    router.get("/", certificatesController.findAll);

    // -- To retrieve a certificate
    router.get("/:certificateId", certificatesController.findOne);

        // -- To delete a certificate
        router.delete("/:certificateId", certificatesController.delete);

    app.use("/conferences-app/api/v1/certificates", router);
}