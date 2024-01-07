import { useState } from "react";

const RentUpdate = ({ nuoma, onUpdate, onCancel }) => {
    const [vardas, setVardas] = useState(nuoma.vardas)
    const [miestas, setMiestas] = useState(nuoma.miestas)
    const [laisvas, setLaisvas] = useState(nuoma.laisvas)
    const [markė, setMarkė ] = useState(nuoma.markė)
    const [metai, setMetai] = useState(nuoma.metai)
    const [modelis, setModelis] = useState(nuoma.modelis)
    const [kaina, setKaina] = useState(nuoma.kaina)
    const [ error, setError ] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const currentYear = new Date().getFullYear()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedNuoma = { vardas, miestas, laisvas, markė, metai, modelis, kaina}
        const emptyFields = []

        for (const [key, value] of Object.entries(updatedNuoma)) {
            if (value === "" || value === null) {
                emptyFields.push(key)
            }
        }

        if (emptyFields.length > 0) {
            setEmptyFields(emptyFields);
            setError("Užpildykite visus laukus!")
            return
        }

        const response = await fetch(`/api/nuomininkai/${nuoma._id}`, {
            method: "PUT",
            body: JSON.stringify(updatedNuoma),
            headers: { "Content-Type": "application/json" },
        })

        const json = await response.json()
        if (response.ok) {
            onUpdate(json)
        }
        if(!response.ok) {
            setError(json.error)
        }

    }

    const handleCancel = () => {
        onCancel()
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <label>Jūsų vardas:</label>
            <input 
                type="text"
                value={vardas}
                onChange={(e) => setVardas(e.target.value)}
                className={emptyFields.includes("vardas") ? "error" : ""}
            />
            <label>Miestas:</label>
            <input 
                type="text"
                onChange={(e) => setMiestas(e.target.value)}
                value={miestas}
                className={emptyFields.includes("miestas") ? "error" : ""}
            />

            <label>Ar automobilis laisvas?</label>
            <select
                onChange={(e) => setLaisvas(e.target.value === 'true')}
                value={laisvas ? 'true' : 'false'}
                className={emptyFields.includes("laisvas") ? "error" : ""}
            > 
                <option value="true">Taip</option>
                <option value="false">Ne</option>
            </select>

            <label>Automobilio markė:</label>
            <input 
                type="text"
                onChange={(e) => setMarkė(e.target.value)}
                value={markė} 
                className={emptyFields.includes("markė") ? "error" : ""}
            />

            <label>Automobilio modelis:</label>
            <input 
                type="text"
                onChange={(e) => setModelis(e.target.value)}
                value={modelis} 
                className={emptyFields.includes("modelis") ? "error" : ""}
            />

            <label>Automobilio metai:</label>
            <input 
                type="number"
                onChange={(e) => setMetai(e.target.value)}
                value={metai}
                min={2000}
                max={currentYear} 
                className={emptyFields.includes("metai") ? "error" : ""}
            />

            <label>Automobilio nuomos kaina parai:</label>
            <input 
                type="number"
                onChange={(e) => setKaina(e.target.value)}
                value={kaina} 
                min={0}
                className={emptyFields.includes("kaina") ? "error" : ""}
            />
            <button type="submit">Išsaugoti pakeitimus</button>
            {error && <div className="error">{error}</div>}
            <button type="button" onClick={handleCancel}>Atšaukti</button>
        </form>
    )
}

export default RentUpdate