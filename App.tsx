import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

    const handleIncrementCount = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    const handleDecrementCount = () => {
        setCount((prevCount) => {
            return prevCount - 1;
        })
    }

    const handleResetCount = () => {
        setCount(0);
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text}>Счетчик: {count}</Text>
                <View style={styles.wrapper}>
                    <Button title="Увеличить" onPress={handleIncrementCount} />
                    <Button title="Уменьшить" onPress={handleDecrementCount} />
                    <Button title="Сбросить" onPress={handleResetCount} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold'
    }
});
