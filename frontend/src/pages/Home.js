import { useEffect } from "react";
import RentDetails from "../components/RentDetails.js"
import RentForm from "../components/RentForm";
import { useRentContext } from "../hooks/useRentContext.js"

const Home = () => {
    const {nuomos, dispatch} = useRentContext()
    
    useEffect(() => {
        const fetchNuomas = async () => {
            const response = await fetch("/api/nuomininkai")
            const json = await response.json()
            if(response.ok) {
                dispatch({type: "SET_RENTS", payload: json})
            }
        }
        fetchNuomas()
    }, [dispatch])

    return ( 
        <div className="home">
            <div className="rents">
                {nuomos && nuomos.map((nuoma) => (
                    <RentDetails key={nuoma._id} nuoma={nuoma} />
                ))}
            </div>
            <RentForm />
        </div>
    )
}
 
export default Home;