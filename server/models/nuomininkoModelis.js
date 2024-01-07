import mongoose from "mongoose"

const Schema = mongoose.Schema
const nuomininkoSchema = new Schema ({
    vardas: {
        type: String,
        required: [true, 'Prašome įrašyti savo vardą']
    },
    miestas: {
        type: String,
        required: [true, 'Prašome įrašyti savo miestą']
    },
    laisvas: {
        type: Boolean,
        default: false
    },
    markė: {
        type: String,
        required: [true, 'Prašome įrašyti savo mašinos markę']
    },
    metai: {
        type: Number,
        required: [true, 'Prašome įrašyti savo mašinos metus']
    },
    modelis: {
        type: String,
        required: [true, 'Prašome įrašyti savo mašinos modelį']
    },
    kaina: {
        type: Number,
        required: [true, 'Prašome įrašyti savo mašinos nuomos kainą']
    }
}, {timestamps: true})

export default mongoose.model("Rent", nuomininkoSchema)