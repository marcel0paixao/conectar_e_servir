import React, { useContext } from "react";
import StackComponent from "./stack.routes";
import AuthContext from "../../contexts/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
    const { logged } = useContext(AuthContext);
    return logged ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;