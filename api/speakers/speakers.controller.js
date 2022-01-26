const db = require("../../config/db")

// -- Create speaker 
exports.save = (req, res) => {

    if(req.body.firstname === "" || req.body.conferenceid === "") {
        res.status(400).send({
            "error": "Name and conference id are required"
        });
    }

    db.collection("speakers").add({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "cardid": req.body.cardid,
        "address": req.body.address,
        "email": req.body.email,
        "phone": req.body.phone,
        "profession": req.body.profession,
        "title": req.body.title,
        "indemnity": req.body.indemnity,
        "conferenceid": req.body.conferenceid,
        
    }).then(function(docRef) {
        let message = "Speaker added successfully";
        db.collection("speakers").doc(docRef.id).update({
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

// -- To get all speakers
exports.findAll = async (req, res) => {
    try{
        const speakersQuerySnapshot = await db.collection("speakers").get();
        const speakers = [];

        speakersQuerySnapshot.forEach((doc) => {
            speakers.push(doc.data());
        });

        res.status(200).json(speakers);
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- To get a speaker
exports.findOne = async (req, res) => {
    try{
        const speakerQuerySnapShot = await db.collection("speakers").doc(req.params.speakerId).get();
        if(speakerQuerySnapShot.data()) {
            res.status(200).json(speakerQuerySnapShot.data());
        }
        res.status(404).send({"error": `Speaker not found: ${req.params.speakerId}`});
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}


// -- update speaker
exports.update = async (req, res) => {
    await db.collection("speakers").doc(req.params.speakerId).set(req.body,{merge:true})
    .then(()=> res.json({"message": "speaker updated successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

// -- delete a speaker 
exports.delete = (req, res) => {
    db.collection("speakers").doc(req.params.speakerId).delete()
    .then(()=> res.json({"message": "speaker deleted successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}



exports.isExist = async (speakerId) => {
    try{
        const speakerQuerySnapShot = await db.collection("speakers").doc(speakerId).get();
        if(speakerQuerySnapShot.data()) {
            return true;
        }
        return false;
    } catch {
        return false;
    }
}