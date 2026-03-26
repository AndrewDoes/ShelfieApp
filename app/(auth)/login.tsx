import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Color, Link, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import useUser from '../../hooks/useUser'

//themed component


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const { login } = useUser();
    const router = useRouter();

    const handleSubmit = async () => {
        setError(null);
        try {
            await login({ email, password });
            router.replace('/(dashboard)/profile');
        } catch (err: any) {
            setError(err.message);
        }
    }
    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>
            <ThemedTextInput
                placeholder='email'
                keyboardType='email-address'
                onChangeText={setEmail}
                style={{ width: '80%', marginBottom: 20 }}></ThemedTextInput>
            <ThemedTextInput
                placeholder='password'
                onChangeText={setPassword}
                secureTextEntry
                style={{ width: '80%', marginBottom: 20 }}></ThemedTextInput>
            <ThemedButton onPress={handleSubmit} style={{ marginTop: 20 }}>
                <Text style={{ color: '#f2f2f2' }}>Login</Text>
            </ThemedButton>
            <Spacer height={40} />
            {error && <Text style={styles.error}>{error}</Text>}
            <Spacer height={40} />
            <Link href='/register'>
                <ThemedText style={{ textAlign: 'center' }}>
                    Register Instead
                </ThemedText>
            </Link>

        </ThemedView >
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',

    },
    pressed: {
        opacity: 0.8
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }
})