const express = require('express')
//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();

const JWT_SECRET = 'Coolcool';
//jwt is used for safe client server communication
var jwt = require('jsonwebtoken');

//first install  npm install bcrypt
const bcrypt = require('bcryptjs');


const PeopleUsers = require('../models/People');
const OrgUsers = require('../models/Organizer');
const VenUsers = require('../models/Vendors');
// This is to create a bank customer user account
router.post('/createPUser', async (req, res) => {

    let success = false;
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    try {
        let checkUserName = await PeopleUsers.findOne({ username: req.body.username });
        if (checkUserName) {
            return res.status(400).json({ error: "Sorry user already exists" })

        }

        let pusers = await PeopleUsers.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            password: secPass
            
        })

        const data = {
            pusers: {
                id: pusers.id
            }
        }


        const authtoken = jwt.sign(data, JWT_SECRET); //yeh ek token banayega with format HEADER:ALGORITHM & TOKEN TYPE,PAYLOAD:DATA,VERIFY SIGNATURE see on website if not understood
        //   console.log(authtoken); //token dekhna hai toh karlo yeh
        //   //abh yeh ko nhi bhejhke authkone bhejte hai as response

        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})



// this user login is for advissor login...
router.post('/loginAdvisor', async (req, res) => {

    const { username, password } = req.body;
    let success = false;
    try {
        let pusers = await PeopleUsers.findOne({ username });
        if (!pusers) {
            return res.status(400).json({ error: "please try with correct username" });
        }
        const passwordCompare = await bcrypt.compare(password, pusers.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try with correct password" });
        }
        const data = {
            pusers: {
                id: pusers.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        res.status(500).send("some error occured");
    }

})



//Organizer
router.post('/createOUser', async (req, res) => {

    let success = false;
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.opassword, salt);

    try {
        let checkUserName = await OrgUsers.findOne({ ousername: req.body.ousername });
        if (checkUserName) {
            return res.status(400).json({ error: "Sorry user already exists" })

        }

        let ousers = await OrgUsers.create({
            oname: req.body.oname,
            oemail: req.body.oemail,
            ousername: req.body.ousername,
            ophone: req.body.ophone,
            odob: req.body.odob,
            ogender: req.body.ogender,
            opassword: secPass
            
        })

        const data = {
            ousers: {
                id: ousers.id
            }
        }


        const authtoken = jwt.sign(data, JWT_SECRET); //yeh ek token banayega with format HEADER:ALGORITHM & TOKEN TYPE,PAYLOAD:DATA,VERIFY SIGNATURE see on website if not understood
        //   console.log(authtoken); //token dekhna hai toh karlo yeh
        //   //abh yeh ko nhi bhejhke authkone bhejte hai as response

        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

router.post('/loginOUser', async (req, res) => {

    const { ousername, opassword } = req.body;
    let success = false;

    try {
        let ousers = await OrgUsers.findOne({ousername: req.body.ousername});
        
        if (!ousers) {
            return res.status(400).json({ error: "please try with correct username" });
        }
        const passwordCompare = await bcrypt.compare(opassword,ousers.opassword)
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try with correct password" });
        }
        const data = {
            ousers: {
                id: ousers.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        res.status(500).send("some error occured");
    }

})
//vendors 

// This is to create a bank customer user account
router.post('/createVUser', async (req, res) => {

    let success = false;
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.vpassword, salt);

    try {
        let checkUserName = await VenUsers.findOne({ vusername: req.body.vusername});
        if (checkUserName) {
            return res.status(400).json({ error: "Sorry user already exists" })

        }

        let vusers = await VenUsers.create({
            vname: req.body.vname,
            vemail: req.body.vemail,
            vusername: req.body.vusername,
            vphone: req.body.vphone,
            vdob: req.body.vdob,
            vgender: req.body.vgender,
            vpassword: secPass
            
        })

        const data = {
            vusers: {
                id: vusers.id
            }
        }


        const authtoken = jwt.sign(data, JWT_SECRET); //yeh ek token banayega with format HEADER:ALGORITHM & TOKEN TYPE,PAYLOAD:DATA,VERIFY SIGNATURE see on website if not understood
        //   console.log(authtoken); //token dekhna hai toh karlo yeh
        //   //abh yeh ko nhi bhejhke authkone bhejte hai as response

        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

router.post('/loginVUser', async (req, res) => {

    const {vusername, vpassword } = req.body;
    let success = false;
    
    try {
        let vusers = await VenUsers.findOne({vusername});
        
        if (!vusers) {
            return res.status(400).json({ error: "please try with correct username" });
        }
        const passwordCompare = await bcrypt.compare(vpassword,vusers.vpassword)
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try with correct password" });
        }
        const data = {
            vusers: {
                id: vusers.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        res.status(500).send("some error occured");
    }

})


module.exports = router;