const express = require("express")
const barsRouter = new express.Router()
const Bar = require("../models/Bar.js")
const {verifyToken} = require("../serverAuth.js")


barsRouter.get("/",(req,res)=>{
    Bar.find({}).populate("user").exec((err, bars)=>{
      res.json(bars)
  })
})

barsRouter.use(verifyToken)

barsRouter.post("/", (req,res)=>{
  console.log(req.user)
  Bar.create({...req.body, user: req.user}, (err, bar)=>{
    res.json({success:true, message: "bar created.", bar})
  })
})



module.exports = barsRouter