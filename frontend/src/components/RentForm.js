import { useState } from "react"
import { useRentContext } from "../hooks/useRentContext"

const RentForm = () => {
    const [ vardas, setVardas ] = useState("")
    const [ miestas, setMiestas ] = useState("")
    const [ laisvas, setLaisvas ] = useState(true)
    const [ markė, setMarkė ] = useState("")
    const [ metai, setMetai ] = useState("")
    const [ modelis, setModelis ] = useState("")
    const [ kaina, setKaina ] = useState("")
    const [ error, setError ] = useState(null)
    const {dispatch} = useRentContext()
    const [emptyFields, setEmptyFields] = useState([])
    const currentYear = new Date().getFullYear()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const nuoma = {vardas, miestas, laisvas, markė, metai, modelis, kaina}
        const response = await fetch("/api/nuomininkai", {
            method: "POST",
            body: JSON.stringify(nuoma),
            headers: {"Content-Type": "application/json"}
        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setEmptyFields([])
            setVardas("")
            setMiestas("")
            setLaisvas(true)
            setMarkė("")
            setMetai("")
            setModelis("")
            setKaina("")
            setError(null)
            dispatch({type: "CREATE_RENT", payload: json})
        }
    }
    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Prideti naują nuomos pasiūlymą</h3>

            <label>Jūsų vardas:</label>
            <input 
                type="text"
                onChange={(e) => setVardas(e.target.value)}
                value={vardas}
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
                value={laisvas}
                className={emptyFields.includes("laisvas") ? "error" : ""}
            > 
                <option value="true">Taip</option>
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
                className={emptyFields.includes("metai") ? "error" : ""}
                min={2000}
                max={currentYear}
            />

            <label>Automobilio nuomos kaina parai (Eur):</label>
            <input 
                type="number"
                onChange={(e) => setKaina(e.target.value)}
                value={kaina} 
                className={emptyFields.includes("kaina") ? "error" : ""}
                min={0}
            />

            <button>Prideti nuomos pasiūlymą</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
 
export default RentForm