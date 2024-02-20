let express=require("express");
const { alldata } = require("./data");
let router=express.Router()


router.get('/restaurent',(req , res)=>{
    res.setHeader('Access-Control-Allow-Methods', '*');
    return res.json(alldata)
})

router.get('/restaurent-detail/:id?',(req , res)=>{
    res.setHeader('Access-Control-Allow-Methods', '*');
    return res.json(alldata.data[req.params.id-1])
})

module.exports=router