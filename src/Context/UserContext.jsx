import { createContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);


    const getData = (user) => {
        setUserData((prev) => ([...prev, user]))
    }
    console.log(userData);
    return (
        <UserContext.Provider
            value={{
                userData,
                getData
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;