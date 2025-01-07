// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const studentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     require: true,
//   },
//   department: {
//     type: String,
//     require: true,
//   },
//   enrollmentNo: {
//     type: String,
//     require: true,
//     unique: true,
//   },
// });

// // Hash password before saving to the database;
// studentSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });


// // Method to compare passwords;
// studentSchema.methods.matchPassword = async (enteredPassword) => {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const Student = mongoose.model("Student", studentSchema);

// module.exports = Student;
