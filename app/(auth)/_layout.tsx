import { Redirect, Stack } from 'expo-router'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import useUser from '../../hooks/useUser'

export default function AuthLayout() {
    const { user } = useUser();
    if (user) {
        return <Redirect href="/(dashboard)/profile" />
    }

    const scheme = useColorScheme()

    const theme =
        scheme === "dark"
            ? Colors.dark
            : Colors.light

    return (
        <>
            <StatusBar barStyle={'default'} backgroundColor={theme.navBackground} />
            <Stack screenOptions={{
                animation: 'none',
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title
            }} />
        </>
    )
}
