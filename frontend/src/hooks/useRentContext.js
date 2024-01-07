import { RentContext } from "../context/RentContext"
import { useContext } from "react"

export const useRentContext = () => {
    const context = useContext(RentContext)
    if(!context) {
        throw Error("useRentContext turi būti Rent ContextProvider viduje")
    }
    return context
}