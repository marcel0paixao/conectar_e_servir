import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Chat from "../screens/Chat";
import CreateCall from "../screens/CreateCall";
import CallDashboard from "../screens/CallDashboard";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        {/* <AppStack.Screen name="ConfirmEmail" component={ConfirmEmail} /> */}
        {/* <AppStack.Screen name="DefinePassword" component={DefinePassword} /> */}
        <AppStack.Screen name="Home" component={Home} options={{
            header: () => null
        }}/>
        <AppStack.Screen name="Chat" component={Chat}  options={{
            headerBackTitleVisible: false,
        }}/>
        <AppStack.Screen name="CreateCall" component={CreateCall} options={{
            headerTransparent: true,
            headerTitle: () => null,
            headerBackTitleVisible: false,
            headerStyle: {
                height: 50
            }
        }} />
        <AppStack.Screen name="CallDashboard" component={CallDashboard} options={{
            headerLeft: () => null,
            headerBackTitle: "Dashboard de ajuda",
            headerTransparent: true,
            headerTitle: () => null,
            gestureEnabled: false
        }} />
    </AppStack.Navigator>
);

export default AppRoutes;