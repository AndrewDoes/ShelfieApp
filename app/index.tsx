import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

export default function Index() {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.image} />
            <ThemedText style={styles.title}> The Number One </ThemedText>
            <Spacer height={10} />
            <ThemedText> Reading List App</ThemedText>
            <Spacer height={30} />
            <Link href='/login' style={styles.link}>
                <ThemedText>Login</ThemedText>
            </Link>
            <Link href='/register' style={styles.link}>
                <ThemedText>Register</ThemedText>
            </Link>
            <Link href='/profile' style={styles.link}>
                <ThemedText>Profile</ThemedText>
            </Link>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'purple'
    },
    link: {
        marginBottom: 20,
        borderBottomWidth: 1
    },
    image: {
        marginVertical: 20
    }

})
