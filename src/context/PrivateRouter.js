import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRouter=({children})=>{
 const {auth:{isAuthenticated}} =useAuth();
 return isAuthenticated ? children: <Navigate to="/login" />
}

export {PrivateRouter};