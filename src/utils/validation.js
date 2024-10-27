const validator = require("validator");

const validationForSignin = async (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("First name and last name are required.");
    }
    if (!validator.isEmail(emailId)) {
        throw new Error("Invalid email format.");
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough.");
    }
};

const validationForProfileEdit = async (req) => {
    const allowedList = ["about", "skill"];

    if (!Object.keys(req.body).every((key) => allowedList.includes(key))) {
        throw new Error("Invalid field in profile edit request.");
    }
};

module.exports = { validationForSignin, validationForProfileEdit };
