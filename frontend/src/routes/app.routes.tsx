import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ConfirmEmail from "../screens/ConfirmEmail";
import DefinePassword from "../screens/DefinePassword";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import CreateCall from "../screens/CreateCall";
import CallDashboard from "../screens/CallDashboard";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        {/* <AppStack.Screen name="ConfirmEmail" component={ConfirmEmail} /> */}
        {/* <AppStack.Screen name="DefinePassword" component={DefinePassword} /> */}
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Chat" component={Chat} initialParams={{ id: 42 }} />
        <AppStack.Screen name="CreateCall" component={CreateCall} />
        <AppStack.Screen name="CallDashboard" component={CallDashboard} />
    </AppStack.Navigator>
);

export default AppRoutes;