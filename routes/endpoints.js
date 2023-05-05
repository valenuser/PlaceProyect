const express = require('express')
const Router = express.Router()

Router.get('/',(req,res)=>{
    res.json({'status':'ok'})
})

Router.post('/',(req,res)=>{
    res.json({'status':'ok'})
})

Router.put('/',(req,res)=>{
    res.json({'status':'ok'})
})

Router.delete('/',(req,res)=>{
    res.json({'status':'ok'})
})

module.exports = Router