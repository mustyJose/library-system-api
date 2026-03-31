const mongoose = require('mongoose');

const attendantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    employeeId: { type: String, required: true, unique: true },
},
 { timestamps: true });

module.exports = mongoose.model('Attendant', attendantSchema);