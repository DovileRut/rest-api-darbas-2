import { useState } from "react";
import { useRentContext } from "../hooks/useRentContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import RentUpdate from "./RentUpdate"
import ContactModal from "./ContactModal"

const RentDetails = ({nuoma}) => {
    const {dispatch} = useRentContext()
    const [isEditing, setIsEditing] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleClick = async () => {
        const confirmed = window.confirm("Ar tikrai norite ištrinti šį nuomos pasiūlymą?")
        if(confirmed) {
            const response = await fetch("/api/nuomininkai/" + nuoma._id, {
            method: "DELETE"
            })
            const json = await response.json()
            if(response.ok) {
                dispatch({type: "DELELE_RENT", payload: json})
                window.location.reload()
            }
        }
    }
    
    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleUpdate = async (updatedNuoma) => {
        const response = await fetch(`/api/nuomininkai/${nuoma._id}`, {
            method: "PUT",
            body: JSON.stringify(updatedNuoma),
            headers: { "Content-Type": "application/json" },
        })
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: "UPDATE_RENT", payload: json });
            setIsEditing(false)
        }
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return ( 
        <div className="rent-details">
            {isEditing ? (
                <RentUpdate nuoma={nuoma} onUpdate={handleUpdate} onCancel={handleCancel}/>
            ) : (
                <div>
                    <h2>{nuoma.markė} {nuoma.modelis}, {nuoma.metai}</h2>
                    <p><strong>Nuomos kaina parai:</strong> {nuoma.kaina} Eur</p>
                    <p><strong>Ar automobilis laisvas?   </strong> {nuoma.laisvas ? <i className="bi bi-check-circle-fill icon-green" ></i> : <i className="bi bi-x-circle-fill icon-red"/>}</p>
                    <p>{nuoma.vardas}, {nuoma.miestas}</p>
                    <p>{formatDistanceToNow(new Date(nuoma.createdAt), {addSuffix: true})}</p>                    
                    <span onClick={handleEdit}><i className="bi bi-pencil-square edit-btn"></i></span>
                    <span onClick={handleClick}><i className="bi bi-trash-fill delete-btn"></i></span>
                    <div className="modal-box">
                        <button className="contact-btn" onClick={openModal}>Susisiekti</button>
                        {showModal && <ContactModal onClose={closeModal} />}
                    </div>
                </div>
            )}
        </div>
    )
}
 
export default RentDetails