import React, { createContext, useReducer, useContext } from 'react'

export const StateContext = createContext(null)

function StateProvider({ reducer, initState, children }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initState)}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider

export const useStateValue = () => useContext(StateContext)