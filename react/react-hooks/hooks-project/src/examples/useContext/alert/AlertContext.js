import React from "react";

export const AlertContext = React.createContext();

// export const AlertToggleContext = React.createContext();

export const useAlert = () => {
    return React.useContext(AlertContext)
}

// export const useToggleContext = () => {
//     return React.useContext(AlertToggleContext)
// }

export const AlertProvider = ( {children} ) => {
    const [alert1, setAlert] = React.useState(false);  

    const toggleAlert1 = () => {
        setAlert(prev => !prev)
        console.log(alert1);
    }

    return (
        <AlertContext.Provider value={{
            visible: alert1,
            toggleAlert1
        }}>
            {/* <AlertToggleContext.Provider value={toggleAlert1}>   */}
                {children}
            {/* </AlertToggleContext.Provider> */}
        </AlertContext.Provider>
    )
}