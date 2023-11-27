import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../screens/ForgotPassword";
import Welcome from "../screens/Welcome";
import SingUp from "../screens/Signup";
import Login from "../screens/Login";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false
        }} />
        <AuthStack.Screen name="Login" component={Login} options={{
            headerShown: false
        }} />
        <AuthStack.Screen name="Signup" component={SingUp} options={{
            headerBackTitleVisible: false,
            headerTitle: () => null,
            headerTransparent: true,
            headerStyle: {
                height: 5
            }
        }} />
        {/* <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
    </AuthStack.Navigator>
);

export default AuthRoutes;