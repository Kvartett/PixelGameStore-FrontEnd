import React, { useState } from "react"

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        /* Aqui vai as informações que o back end nos envia */
    })

    const [percentage, setPercentage] = useState()

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        } // config do Header
    }

    return (
        <AuthContext.Provider value={{ user, config }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)