const db = require("../../config/db")

// -- Create attendee 
exports.save = (req, res) => {

    if(req.body.firstname === "" || req.body.cardid === "") {
        res.status(400).send({
            "error": "Name and Card ID are required"
        });
    }

    db.collection("attendees").add({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "cardid": req.body.cardid,
        "address": req.body.address,
        "email": req.body.email,
        "phone": req.body.phone,
        "profession": req.body.profession,
        
    }).then(function(docRef) {
        let message = "Attendee added successfully";
        db.collection("attendees").doc(docRef.id).update({
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


// -- update attendee
exports.update = async (req, res) => {
    await db.collection("attendees").doc(req.params.attendeeId).set(req.body,{merge:true})
    .then(()=> res.json({"message": "attendee update successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

// -- To get all attendees
exports.findAll = async (req, res) => {
    try{
        const attendeesQuerySnapshot = await db.collection("attendees").get();
        const attendees = [];

        attendeesQuerySnapshot.forEach((doc) => {
            attendees.push(doc.data());
        });

        res.status(200).json(attendees);
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- To get a attendee
exports.findOne = async (req, res) => {
    try{
        const attendeeQuerySnapShot = await db.collection("attendees").doc(req.params.attendeeId).get();
        if(attendeeQuerySnapShot.data()) {
            res.status(200).json(attendeeQuerySnapShot.data());
        }
        res.status(404).send({"error": `Attendee not found: ${req.params.attendeeId}`});
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- delete a attendee 
exports.delete = (req, res) => {
    db.collection("attendees").doc(req.params.attendeeId).delete()
    .then(()=> res.json({"message": "Attendee deleted successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}



exports.isExist = async (attendeeId) => {
    try{
        const attendeeQuerySnapShot = await db.collection("attendees").doc(attendeeId).get();
        if(attendeeQuerySnapShot.data()) {
            return true;
        }
        return false;
    } catch {
        return false;
    }
}