const db = require("../../config/db")

// -- Create certificate 
exports.save = (req, res) => {

    if(req.body.firstname === "" || req.body.lastname === "") {
        res.status(400).send({
            "error": "firstname and lastname are required"
        });
    }

    db.collection("certificates").add({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "date": req.body.date,
        "conferenceid": req.body.conferenceid,
        "attendeeid": req.body.attendeeid,
            
    }).then(function(docRef) {
        let message = "certificate added successfully";
        db.collection("certificates").doc(docRef.id).update({
            "uid": docRef.id
        });

        console.log(message);
        res.status(201).send({
            "message": message
        });
    }).catch(function (error) {
        let errorMessage = "Something went wrong :(";
        res.status(500).send({"error": errorMessage});
    });
}

// -- To get all certificates
exports.findAll = async (req, res) => {
    try{
        const certificatesQuerySnapshot = await db.collection("certificates").get();
        const certificates = [];

        certificatesQuerySnapshot.forEach((doc) => {
            certificates.push(doc.data());
        });

        res.status(200).json(certificates);
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- To get a certificate
exports.findOne = async (req, res) => {
    try{
        const certificateQuerySnapShot = await db.collection("certificates").doc(req.params.certificateId).get();
        if(certificateQuerySnapShot.data()) {
            res.status(200).json(certificateQuerySnapShot.data());
        }
        res.status(404).send({"error": `certificate not found: ${req.params.certificateId}`});
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- update certificate
exports.update = async (req, res) => {
    await db.collection("certificates").doc(req.params.certificateId).set(req.body,{merge:true})
    .then(()=> res.json({"message": "certificate updated successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

// -- delete a certificate 
exports.delete = (req, res) => {
    db.collection("certificates").doc(req.params.certificateId).delete()
    .then(()=> res.json({"message": "certificate deleted successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}



exports.isExist = async (certificateId) => {
    try{
        const certificateQuerySnapShot = await db.collection("certificates").doc(certificateId).get();
        if(certificateQuerySnapShot.data()) {
            return true;
        }
        return false;
    } catch {
        return false;
    }
}