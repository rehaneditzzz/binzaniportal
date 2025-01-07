const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: String, required: true },
    placeOfBirth: { type: String, required: true },
    photo: { type: String, required: true }, // Store the file name
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
