import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import ConfirmEmail from "../screens/ConfirmEmail";
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
        </Stack.Navigator>
    )
}