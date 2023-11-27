import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Chat from "../screens/Chat";
import CreateCall from "../screens/CreateCall";
import CallDashboard from "../screens/CallDashboard";
import Map from "../screens/Map";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator screenOptions={{

    }}>
        {/* <AppStack.Screen name="ConfirmEmail" component={ConfirmEmail} /> */}
        {/* <AppStack.Screen name="DefinePassword" component={DefinePassword} /> */}
        <AppStack.Screen name="Home" component={Home} options={{
            header: () => null
        }}/>
        <AppStack.Screen name="Chat" component={Chat}  options={{
            headerBackTitleVisible: false,
            headerStyle: {
                height: 80
            }
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
        <AppStack.Screen name="Map" component={Map} options={{
            headerTransparent: true,
            headerTitle: "Localização",
            headerBackTitleVisible: false,
            headerTintColor: '#000',
            headerStyle: {
                height: 70
            }
        }} />
    </AppStack.Navigator>
);

export default AppRoutes;