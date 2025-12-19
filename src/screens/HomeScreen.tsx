
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, Pressable, StyleSheet } from "react-native";


interface HomeScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export default function HomeScreen({navigation}: HomeScreenProps) {

    const toggleDetails = () => {
        navigation.navigate("Details");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Главная страница</Text>
            <Pressable style={styles.button} onPress={toggleDetails}>
                <Text style={styles.buttonText}>Перейти на страницу деталей</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "hsl(0, 0%, 15%)",
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        padding: 10,

        backgroundColor: "hsl(210, 90%, 50%)",

        borderRadius: 4,
    },
    buttonText: {
        color: "hsl(0, 0%, 95%)",
        fontSize: 20,
    }
});