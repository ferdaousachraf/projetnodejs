const db = require("../../config/db")

// -- Create opinion 
exports.save = (req, res) => {

    if(req.body.text === "" || req.body.conferenceid === "" || req.body.attendeeid === "") {
        res.status(400).send({
            "error": "opinion and conference id and attendee id are required"
        });
    }

    db.collection("opinions").add({
        "text": req.body.text,
        "date": req.body.date,
        "conferenceid": req.body.conferenceid,
        "attendeeid": req.body.attendeeid,
            
    }).then(function(docRef) {
        let message = "Opinion added successfully";
        db.collection("opinions").doc(docRef.id).update({
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

// -- To get all opinions
exports.findAll = async (req, res) => {
    try{
        const opinionsQuerySnapshot = await db.collection("opinions").get();
        const opinions = [];

        opinionsQuerySnapshot.forEach((doc) => {
            opinions.push(doc.data());
        });

        res.status(200).json(opinions);
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- To get a opinion
exports.findOne = async (req, res) => {
    try{
        const opinionQuerySnapShot = await db.collection("opinions").doc(req.params.opinionId).get();
        if(opinionQuerySnapShot.data()) {
            res.status(200).json(opinionQuerySnapShot.data());
        }
        res.status(404).send({"error": `Opinion not found: ${req.params.opinionId}`});
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- update opinion
exports.update = async (req, res) => {
    await db.collection("opinions").doc(req.params.opinionId).set(req.body,{merge:true})
    .then(()=> res.json({"message": "opinion updated successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

// -- delete a opinion 
exports.delete = (req, res) => {
    db.collection("opinions").doc(req.params.opinionId).delete()
    .then(()=> res.json({"message": "opinion deleted successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}



exports.isExist = async (opinionId) => {
    try{
        const opinionQuerySnapShot = await db.collection("opinions").doc(opinionId).get();
        if(opinionQuerySnapShot.data()) {
            return true;
        }
        return false;
    } catch {
        return false;
    }
}