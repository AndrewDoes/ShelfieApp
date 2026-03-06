import { Slot, Stack } from 'expo-router'
import React, { Component } from 'react'
import { Text, StyleSheet, View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


export default function Layout() {
    const scheme = useColorScheme()

    const theme =
        scheme === "dark"
            ? Colors.dark
            : Colors.light

    return (
        <Stack
            initialRouteName='index'
            screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

})
