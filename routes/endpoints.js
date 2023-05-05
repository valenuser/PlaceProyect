const express = require('express')
const pool= require('../database')
const Router = express.Router()

Router.get('/',(req,res)=>{
    pool.query('select * from usuario',(err,response)=>{
        if(response){
            console.log('conectada');
            res.json({'status':'ok'})
        }
    })
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