const jwt = require("jsonwebtoken");
const UserModel = require("../Modals/user-modal")

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader;

        jwt.verify(token, process.env.SECRET_KEY, async (err, payload) => {
            try {
                if (err) {
               
                    return res.status(200).send({ error: "Unauthorized User!" });
                }

                const user = await UserModel.findOne({ _id: payload.id }).select(
                    "-password"
                );
                req.user = user;
                next();
            } catch (err) {
                console.log(err);
            }
        });
    } else {
        return res.status(200).send({ error: "Forbidden operation" });
    }
};
