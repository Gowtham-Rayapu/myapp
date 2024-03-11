import React, { createContext } from 'react';
import Child from "./Child";
export const UserContext = createContext();
export default function App11(){
    const[user,setUser]= useState("john");
    const[email,setEmail]=useState("john@gmail.com")
    return(
        <>
        <UserContext.Provider value={{user, email}}>
            <h2>Hello {user} from App5 component</h2>
            <child/>
        </UserContext.Provider>
        </>
    );
}
