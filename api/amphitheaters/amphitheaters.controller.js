const db = require("../../config/db")

// -- Create amphitheater 
exports.save = (req, res) => {

    if(req.body.name === "" || req.body.capacity === "") {
        res.status(400).send({
            "error": "Name and capacity are required"
        });
    }

    db.collection("amphitheaters").add({
        "name": req.body.name,
        "number": req.body.number,
        "capacity": req.body.capacity,
        "price": req.body.price,
            
    }).then(function(docRef) {
        let message = "amphitheater added successfully";
        db.collection("amphitheaters").doc(docRef.id).update({
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

// -- To get all amphitheaters
exports.findAll = async (req, res) => {
    try{
        const amphitheatersQuerySnapshot = await db.collection("amphitheaters").get();
        const amphitheaters = [];

        amphitheatersQuerySnapshot.forEach((doc) => {
            amphitheaters.push(doc.data());
        });

        res.status(200).json(amphitheaters);
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}

// -- To get a amphitheater
exports.findOne = async (req, res) => {
    try{
        const amphitheaterQuerySnapShot = await db.collection("amphitheaters").doc(req.params.amphitheaterId).get();
        if(amphitheaterQuerySnapShot.data()) {
            res.status(200).json(amphitheaterQuerySnapShot.data());
        }
        res.status(404).send({"error": `amphitheater not found: ${req.params.amphitheaterId}`});
    } catch {
        res.status(500).send({"error": "Something went wrong"});
    }
}


// -- update amphitheater
exports.update = async (req, res) => {
    await db.collection("amphitheaters").doc(req.params.amphitheaterId).set(req.body,{merge:true})
    .then(()=> res.json({"message": "amphitheater updated successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}

// -- delete a amphitheater 
exports.delete = (req, res) => {
    db.collection("amphitheaters").doc(req.params.amphitheaterId).delete()
    .then(()=> res.json({"message": "amphitheater deleted successfully"}))
    .catch((error)=> res.status(500).send({"error": "Something went wrong"}))
}



exports.isExist = async (amphitheaterId) => {
    try{
        const amphitheaterQuerySnapShot = await db.collection("amphitheaters").doc(amphitheaterId).get();
        if(amphitheaterQuerySnapShot.data()) {
            return true;
        }
        return false;
    } catch {
        return false;
    }
}