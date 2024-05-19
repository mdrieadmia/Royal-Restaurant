import { useContext } from "react";
import { AuthContext } from "../porviders/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;