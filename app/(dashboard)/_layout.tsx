import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from "@expo/vector-icons"
import UserOnly from '../../components/auth/UserOnly'

export default function DashboardLayout() {
    const scheme = useColorScheme()

    const theme =
        scheme === "dark"
            ? Colors.dark
            : Colors.light

    return (
        <UserOnly>
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
                <Tabs.Screen name="profile" options={{
                    title: "Profile", tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Ionicons
                                    size={24}
                                    name="person"
                                    color={theme.iconColorFocused}
                                />
                                :
                                <Ionicons
                                    size={24}
                                    name="person-outline"
                                    color={theme.iconColor}
                                />
                        )
                    }
                }} />
                <Tabs.Screen name="books" options={{
                    title: "Books", tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Ionicons
                                    size={24}
                                    name="book"
                                    color={theme.iconColorFocused}
                                />
                                :
                                <Ionicons
                                    size={24}
                                    name="book-outline"
                                    color={theme.iconColor}
                                />
                        )
                    }
                }} />
                <Tabs.Screen name="create" options={{
                    title: "Create", tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <Ionicons
                                    size={24}
                                    name="create"
                                    color={theme.iconColorFocused}
                                />
                                :
                                <Ionicons
                                    size={24}
                                    name="create-outline"
                                    color={theme.iconColor}
                                />
                        )
                    }
                }} />
                <Tabs.Screen name="books/[id]"
                    options={{ href: null, title: "Book Details" }}
                />
            </Tabs>
        </UserOnly>
    )
}
