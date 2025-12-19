import { View, Text, StyleSheet } from "react-native";



export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Экран с детальной информацией</Text>
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
});