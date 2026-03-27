import { Slot, Stack } from 'expo-router'
import React, { Component } from 'react'
import { Text, StyleSheet, View, useColorScheme, StatusBar } from 'react-native'
import { Colors } from '../constants/Colors'
import { UserProvider } from '../contexts/UserContext'
import { BooksProvider } from '../contexts/BooksContext'


export default function Layout() {
    const scheme = useColorScheme()

    const theme =
        scheme === "dark"
            ? Colors.dark
            : Colors.light

    return (
        <UserProvider>
            <BooksProvider>
                <StatusBar barStyle={'default'} backgroundColor={theme.navBackground} />
                <Stack
                    initialRouteName='index'
                    screenOptions={{
                        headerStyle: { backgroundColor: theme.navBackground },
                        headerTintColor: theme.title,
                    }}>
                    <Stack.Screen name="index" options={{ title: 'Home' }} />
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                    <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
                </Stack>
            </BooksProvider>
        </UserProvider>
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
