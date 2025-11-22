import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleStartCount = () => {
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {
            handleIncrementCount();
        }, 1000) as unknown as number;
    }

    const handleStopCount = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
        handleResetCount();
    };

    const handlePauseCount = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    };

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

    const handleExit = () => {
        BackHandler.exitApp();
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>Счетчик: {count}</Text>
                <View style={styles.wrapper}>
                    <Button title='Старт' onPress={handleStartCount} />
                    <Button title='Пауза' onPress={handlePauseCount} />
                    <Button title='Стоп' onPress={handleStopCount} />
                </View>
                <View style={styles.wrapper}>
                    <Button title="Увеличить" onPress={handleIncrementCount} />
                    <Button title="Уменьшить" onPress={handleDecrementCount} />
                    <Button title="Сбросить" onPress={handleResetCount} />
                </View>
            </View>
            <Button title='Выход' onPress={handleExit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 30,
        marginBottom: 50, 

        flex: 1,
        gap: 5,

        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        gap: 5,

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
