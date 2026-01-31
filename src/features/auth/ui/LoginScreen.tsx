import { Button, Text, View } from "react-native";
import { useAuthStore } from "../model/auth.store";



export default function LoginScreen() {
    const login = useAuthStore((s) => s.login);
    


    return (
        <View>
            <Text>Имитация входа</Text>
            <Button title="Регистрация" onPress={() => login('FAKE_JWT_TOKEN')}/>
        </View>
    )
}