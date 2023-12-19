const Category = require("../models/Category")


async function getCategory (req,res) {
    try {
        const data = await Category.find()
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {getCategory}