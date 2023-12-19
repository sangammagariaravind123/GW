const mongoose = require("mongoose");

const LaptopSchema = mongoose.Schema({
    category: String,
    productName: String,
    image: String,
    cpu: String,
    ram: String,
    storage: String,
    screen: String,
    price: String,
    description: String,
});

module.exports = mongoose.model("Laptop", LaptopSchema);