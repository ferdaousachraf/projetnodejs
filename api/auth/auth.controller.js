
const db = require("../../config/db")

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs");

// get config vars
dotenv.config();

const authController = require("../../api/auth/auth.controller");
// -- register a new user 
exports.register = async (req, res) => {

    // Our register logic starts here
    try {
        // Get user input
        const { firstname, lastname, email, password } = req.body;

        // Validate user input
        if (!(email && password && firstname && lastname)) {
            res.status(400).send("All inputs are required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = authController.isExist(email);

        /* if (oldUser) {
             return res.status(409).send("Email Already Exist. Please Use another Email");
         }*/

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        let userID = "";

        db.collection("users").add({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "email": req.body.email,
            "password": encryptedPassword,
        }).then(function (docRef) {

            userID = docRef.id;

            // Create token
            const token = jwt.sign(
                { user_id: userID, email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: "2h",
                }
            );

            db.collection("users").doc(docRef.id).update({
                "uid": userID,
                "token": token,
            });

            //const user = authController.getUser("1AlV65KJj9UOerD7sTdl");


            // return new user
            res.status(201).json({
                "message": "user created successfully",
                "uid": userID,
                "token": token,
            });

        });







    } catch (error) {
        let errorMessage = "Something went wrong :( : " + error;
        res.status(500).send({ "error": errorMessage });
    };

}


// -- Login
exports.login = async (req, res) => {

    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All inputs are required");
        }
        // Validate if user exist in our database
        const snapshot = await db.collection("users").where('email', '==', email).get();
        snapshot.forEach(doc => {
            user = doc.data();
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;
            user.password = "";

            // user
            res.status(200).json(user);
        }
        else res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }


}


// -- To get a User
exports.getUser = async (id) => {
    try {
        const QuerySnapshot = await db.collection("users").doc(id).get();
        if (QuerySnapshot.data()) {
            return QuerySnapshot.data();
        }
        return { "error": `User not found: ${id}` };
    } catch {
        return { "error": "Something went wrong" };
    }
}




exports.isExist = async (email) => {
    try {
        const QuerySnapShot = await db.collection("users").where('email', isEqualTo, email).get();
        if (QuerySnapShot.data()) {
            return true;
        }
        return false;
    } catch {
        return false;
    }
}