
const db = require("../../config/db")

const conferencesController = require("../../api/conferences/conferences.controller");

// -- Create conferences 
exports.save = (req, res) => {

    if(req.body.title === "" || req.body.description === "") {
        res.status(400).send({
            "error": "Veuillez remplir les champs requis"
        });
    }

    db.collection("conferences").add({
        "title": req.body.title,
        "description": req.body.description,
        "contactPerson": req.body.contactPerson,
        "contactEmail": req.body.contactEmail,
        "contactPhone": req.body.contactPhone,
        "startDate": req.body.startDate,
        "endDate": req.body.endDate,
        "registrationFee": req.body.registrationFee,
    }).then(function(docRef) {
        let message = "conference added successfully";
        db.collection("conferences").doc(docRef.id).update({
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

// -- To get all conferences
exports.findAll = async (req, res) => {
    try{
        const conferencesQuerySnapshot = await db.collection("conferences").get();
        const conferences = [];

        conferencesQuerySnapshot.forEach((doc) => {
            conferences.push(doc.data());
        });

        res.status(200).json(conferences);
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- To get a conference
exports.findOne = async (req, res) => {
    try{
        const conferencesQuerySnapshot = await db.collection("conferences").doc(req.params.conferenceId).get();
        if(conferencesQuerySnapshot.data()) {
            res.status(200).json(conferencesQuerySnapshot.data());
        }
        res.status(404).send({"error": `conference not found: ${req.params.conferenceId}`});
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- update conferences
exports.update = async (req, res) => {
    await db.collection("conferences").doc(req.params.conferenceId).set(req.body,{merge:true})
    .then(()=> res.json({"message": "conference update successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

// -- delete conferences 
exports.delete = (req, res) => {
    db.collection("conferences").doc(req.params.conferenceId).delete()
    .then(()=> res.json({"message": "conference deleted successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

exports.addAttendeeToConference = async (req, res) => {
    conferencesToAdd = [];

    req.body.forEach((schoolId) => {
        if (conferencesController.isExist(schoolId)) {
            conferencesToAdd.push(schoolId);
        } else {
            res.status(404).send({"error": `Problem to add school, it's not found: ${schoolId}`});
        }
    });

    await db.collection("conferences").doc(req.params.conferencesId).set({
        conferences: conferencesToAdd
    }, {merge:true})
    .then(()=> res.send({"message": "Campus update successfully with new conferences"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}


exports.getConferenceWithAttendees = async (req, res) => {
    try {
    const conference = {};
    const conferencesQuerySnapshot = await db.collection("conferences").doc(req.params.conferenceId).get();
    if(conferencesQuerySnapshot.data()) {
        conference = conferencesQuerySnapshot.data();
    }
    else {res.status(404).send({"error": `conference not found: ${req.params.conferenceId}`});}

    const attendeesList = [];

    const  attendeesQuerySnapshot = await db.collection("attendees").get(req.params.conferenceId);
         

    attendeesQuerySnapshot.forEach((doc) => {
        attendeesList.push(doc.data());
        });

        conference.push({attendees : attendeesList});

        res.status(200).json(conference);


    }catch(error) {

        res.status(500).send({"error": "Something went wrong"});
    } 
}