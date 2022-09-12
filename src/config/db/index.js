const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/learn_education_dev');
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failed: ' + error);
    }
}

module.exports = { connect };

// ý nghĩa xuất ra 1 mảng có key là connect ' db.connect()'  ;
