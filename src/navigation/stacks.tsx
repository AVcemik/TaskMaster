import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import LoginScreen from "../features/auth/ui/LoginScreen";
import RegistrationScreen from "../features/auth/ui/RegistrationScreen";




const Stack = createNativeStackNavigator();

function HomeScreen() {
    

    return (
        <View>
            <Text>Главная страница</Text>
        </View>
    )
}


export function AuthStack() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Registration" component={RegistrationScreen}/>
        </Stack.Navigator>
    )
}

export function AppStack() {


    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}