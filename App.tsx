import { StyleSheet, Text, View } from 'react-native';

export default function App() {


    return (
        <View style={styles.mainContainer}>
            <View style={styles.primaryContainer}>
                <Text style={styles.text}>Верхний блок</Text>
            </View>

            <View style={styles.secondaryContainer}>
                <Text style={styles.text}>Средний блок</Text>
            </View>

            <View style={styles.threContainer}>
                <Text style={styles.text}>Нижний блок</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'hsl(0, 0%, 10%)',
    },
    primaryContainer: {
        height: 80,

        backgroundColor: 'hsl(0, 0%, 20%)',
    },
    secondaryContainer: {
        flex: 1,

        backgroundColor: 'hsl(0, 0%, 30%)',
    },
    threContainer: {
        height: 60,

        backgroundColor: 'hsl(0, 0%, 40%)',
    },
    text: {
        color: 'hsl(0, 100%, 100%)',
    }
});
