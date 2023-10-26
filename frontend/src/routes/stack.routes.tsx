import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ConfirmEmail from "../screens/ConfirmEmail";
import ForgotPassword from "../screens/ForgotPassword";
import DefinePassword from "../screens/DefinePassword";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
const Stack = createNativeStackNavigator();

type StackNavigation = {
    Welcome: undefined;
    Login: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="DefinePassword" component={DefinePassword} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Chat" component={Chat} initialParams={{ id: 42 }} />
        </Stack.Navigator>
    )
}