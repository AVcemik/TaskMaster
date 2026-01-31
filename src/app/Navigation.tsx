import { useEffect, useState } from "react";
import { AppStack, AuthStack } from "../navigation/stacks";
import { useAuthStore } from "../features/auth/model/auth.store";
import { ActivityIndicator, StyleSheet, View } from "react-native";



export function Navigation() {
    const { token, hydrate, isHydrated } = useAuthStore();

    useEffect(() => {
        hydrate();
    }, []);

    if (!isHydrated) {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator size={"large"}/>
            </View>
        )
    }

    return token ? <AppStack/> : <AuthStack/>;
};


const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
});