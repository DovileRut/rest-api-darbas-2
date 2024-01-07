import Rent from "../models/nuomininkoModelis.js"
import mongoose from "mongoose"

export const getRents = async (req, res) => {
    const nuomos = await Rent.find({}).sort({createdAt: -1})
    res.status(200).json(nuomos)
}

export const getRent = async (req, res) => {
   const {id} = req.params
   if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Tokio nuomos pasiūlymo nėra"})
   }
   const nuoma = await Rent.findById(id)
   if(!nuoma) {
    return res.status(404).json({error: "Tokio nuomos pasiūlymo nėra"})
   }
   res.status(200).json(nuoma)
}

export const createRent = async (req, res) => {
    const {vardas, miestas, laisvas, markė, metai, modelis, kaina} = req.body

    let emptyFields = []

    if(!vardas) {emptyFields.push("vardas")}
    if(!miestas) {emptyFields.push("miestas")}
    if(!laisvas) {emptyFields.push("laisvas")}
    if(!markė) {emptyFields.push("markė")}
    if(!metai) {emptyFields.push("metai")}
    if(!modelis) {emptyFields.push("modelis")}
    if(!kaina) {emptyFields.push("kaina")}
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Prašome užpildyti visus laukelius", emptyFields})
    }

    try {
        const nuoma = await Rent.create({vardas, miestas, laisvas, markė, metai, modelis, kaina})
        res.status(200).json(nuoma)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

export const updateRent = async (req, res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Tokio nuomos pasiūlymo nėra"})
    }
    try {
        const nuoma = await Rent.findOneAndUpdate({_id: id}, {...req.body}, {new: true}) 
        if(!nuoma) {
            return res.status(404).json({error: "Tokio nuomos pasiūlymo nėra"})
        }
        res.status(200).json(nuoma)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteRent = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Tokio nuomos pasiūlymo nėra"})
    }
    const nuoma = await Rent.findOneAndDelete({_id: id})
    if(!nuoma) {
        return res.status(404).json({error: "Tokio nuomos pasiūlymo nėra"})
    }
    res.status(200).json(nuoma)
}
