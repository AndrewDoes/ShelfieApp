import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function DashboardLayout() {
    const scheme = useColorScheme()

    const theme =
        scheme === "dark"
            ? Colors.dark
            : Colors.light

    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.navBackground,
                        paddingTop: 10,
                        height: 90
                    },
                    tabBarActiveTintColor: theme.iconColorFocused,
                    tabBarInactiveTintColor: theme.iconColor
                }}
            >
                <Tabs.Screen name="profile" options={{ title: "Profile" }} />
                <Tabs.Screen name="books" options={{ title: "Books" }} />
                <Tabs.Screen name="create" options={{ title: "Create" }} />
            </Tabs>
        </>
    )
}
