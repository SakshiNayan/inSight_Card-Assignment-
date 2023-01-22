const express = require("express");
const bcrypt = require("bcryptjs");
const UserModel = require("../Modals/user-modal");
const jwt = require("jsonwebtoken");

const authCheck = require("../middleware/authCheck")

const router = express.Router();

//checking user by email of its existence
const checkTheUser = async (email) => {

    const data = await UserModel.findOne({ email });
    if (data) {
        return true;
    } else {
        return false;
    }
}

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).send({ error: "Please enter all the required fields." })
    }
    try {
        let userExist = await checkTheUser(email);
        if (userExist) {
            res.status(400).send({ error: "This email already exists, try using any other email." });
        } else {
            //salt and hash value added to a password for security
            const salt = bcrypt.genSaltSync(parseFloat(process.env.SALT));
            const passwordHash = bcrypt.hashSync(password, salt);

            let userData = await UserModel.create({ username, password: passwordHash , email });
            res.status(200).send({ ...userData._doc, password: undefined });
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message });
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: "Please enter all the required fields." })
    }
    try {
        let userEmailPresent = await UserModel.findOne({ email });
        console.log(userEmailPresent._id)
        if (!userEmailPresent) {
            res.status(400).send({ error: "This user already exists, try using any other User." });
        } else {
            const isPasswordMatched = bcrypt.compareSync(password, userEmailPresent.password);

            if (!isPasswordMatched) {
                res.status(400).send({ error: "Incorrect password." });
            } else {
                const payload = { id: userEmailPresent._id }
                const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
                const user = { ...userEmailPresent._doc, password: undefined };
                res.status(200).send({ token, user });
            }
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.get("/check", authCheck, async (req, res) => {
    return res.status(200).send({ ...req.user._doc });
});

module.exports = router;

