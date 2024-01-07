import React from "react"

const ContactModal = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Jūsų užklausa nusiųsta! Su Jumis netrukus susisieks automobilio savininkas.")
        onClose()
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Vardas" required/>
                <input type="tel" placeholder="Telefonas" required/>
                <input type="email" placeholder="El. paštas" required/>
                <button type="submit">Siųsti</button>
                </form>
            </div>
        </div>
    )
}

export default ContactModal