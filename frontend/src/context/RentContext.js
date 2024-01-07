import { createContext, useReducer } from "react"

export const RentContext = createContext()

export const rentReducer = (state, action) => {
    switch(action.type) {
        case "SET_RENTS":
            return {nuomos: action.payload}
        case "CREATE_RENT":
            return {nuomos: [action.payload, ...state.nuomos]}
        case "UPDATE_RENT":
            const atnaujintosNuomos = state.nuomos.map(nuoma => {
                if(nuoma._id === action.payload._id) {
                    return action.payload
                }
                return nuoma
            })
            return {nuomos: atnaujintosNuomos}
        case "DELETE_RENT":
            return {
                nuomos: state.nuomos.filter(nuoma => nuoma._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const RentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(rentReducer, {
        nuomos: null
    })
    return (
        <RentContext.Provider value={{...state, dispatch}}>
            {children}
        </RentContext.Provider>
    )
}