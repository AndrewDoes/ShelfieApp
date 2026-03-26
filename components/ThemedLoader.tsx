import React from 'react'
import { ActivityIndicator, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';
import ThemedView from './ThemedView';

const ThemedLoader = () => {
    const colorScheme = useColorScheme();
    const themeMode = colorScheme === "dark" ? "dark" : "light"
    const theme = Colors[themeMode]
    return (
        <ThemedView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.background
        }}>
            <ActivityIndicator size='large' color={theme.iconColor} />
        </ThemedView>
    )
}

export default ThemedLoader
