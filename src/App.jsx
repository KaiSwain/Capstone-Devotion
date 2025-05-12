

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Views } from "./views/Views";
import { Login } from "./auth/Login.jsx";
import { Authorized } from "./auth/auth.jsx";


export const App = () => { return <>

    <Routes>
    <Route path="/login" element={<Login/>}/>


    
 <Route 
 path="*"
 element={<Authorized>
    <Views/>
 </Authorized>} />
    </Routes>

</>

}

