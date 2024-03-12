import { useState, createContext, useContext } from "react";
import Childa from "./Childa";
import Login1 from "./Login1";
import Register from "./Register";
import Home1 from "./Home1";
export const UserContext = createContext();
export default function App13a() {
  const [user, setUser] = useState("John");
  const [flag, setFlag] = useState(0);
 
  return (
    <>
      <UserContext.Provider value={{ user, setUser, flag, setFlag } }>
        {/* <h2>Hello {user} from App13 component</h2>
        <Childa /> */}
        {!flag?<Login1/>:flag==1?<Home1/>:flag==2?<Register/>:<Login1/> }
       {/* <Login1/>
        <Register/>
        <Home1/> */}
      </UserContext.Provider>
    </>
  );
}