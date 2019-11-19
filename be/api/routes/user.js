const express = require("express")
const router  = express.Router()
const Scan  = require("../../models/scan")


router.get("/", async function (req, res, next){
	var query = Scan.distinct("device")
	const doc = await query.exec()
	res.status(200).json(doc)
});


router.post("/", (req, res, next) =>{


});

module.exports = router

