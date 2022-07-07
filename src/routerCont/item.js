const express = require("express");
const router = new express.Router();
const Data = require("../models/data")


router.post('/data', async (req, res, next) => {
    const data = new Data(req.body);
    res.status(201).send(data)
})

router.get('/data', async (req, res, next) => {
    const data = await products.find().lean().exec();
    res.status(201).send(data)
})

router.get("/data/:id", async (req, res) => {
    const data = await Data.findById(req.params.id);
    const code = Data.code;
    res.send(data);
})

router.delete("/data/:id", async (req, res) =>{
    const data = await Data.findByIdAndDelete(req.params.id);
    const code = Data.code;
    res.send(data).message("Data deleted succesfully");
})

router.patch("/data/:id", async (req, res) => {
    const data = await Data.findByIdAndUpdate(req.params.id, req.body,{new: true})
    const code = Data.code;
    res.send(data);
})
module.exports = router;