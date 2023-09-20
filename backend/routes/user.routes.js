const express = require('express')
const router = require('./router')

const User = require('../models/User')

// SI PONG EL CRUD EN router.js funciona en Postman pero si lo pongo aqui da err.404

// CRUD

// router.get('/users',async (req,res) => {
//     try {
//         const data = await User.find()
//         res.status(200).json(data)
//     } catch (error) {
//         console.error(error)
//     }
// })
// router.get('/users/byId/:id',async (req,res) => {
//     try {
//         const id = req.params.id
//         const data = await User.findById(id)
//         res.status(200).json(data)
//     } catch (error) {
//         console.error(error)
//     }
// })
// router.post('/users/add',async (req,res) => {
    
//     try {
//         const user  = new User({
//             name:req.body.name,
//             lastName: req.body.lastName,
//             userName: req.body.userName,
//             email: req.body.email,
//             birthday: req.body.birthday,
//         });
//         const result = await user.save()
//         res.status(200).json(result)
//     } catch (error) {
//         res.status(500).json({error: error})    
//     }
// })
// router.delete('/users/delete/:id',async (req,res) => {
//     try {
//         const id = req.params.id
//         const result = User.findByIdAndDelete(id)
//         res.status(200).json('deleted')
//     } catch (error) {
//         console.error(error)
//     }
// })
// router.put('/users/update/:id',async (req,res) => {
//     try {
//         const id = req.params.id
//         const data = req.body
//         const options = {new:true}
//         const result = await User.findByIdAndUpdate(id,data,options)
//         res.status(200).json(result)
//     } catch (error) {
//         console.error(error)
//     }
// })