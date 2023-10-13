import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import SingUp from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

export default function DrawerComponent() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Início" component={Welcome} options={{
                drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />
            }} />
            <Drawer.Screen name="Registrar-se" component={SingUp} options={{
                drawerIcon: ({color, size}) => <Feather name="user-plus" color={color} size={size} />
            }} />
            <Drawer.Screen name="Registrar-se" component={Login} options={{
                drawerIcon: ({color, size}) => <Feather name="log-in" color={color} size={size} />
            }} />
        </Drawer.Navigator>
    )
}