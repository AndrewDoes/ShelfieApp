import React, { useEffect, useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Link, useRouter } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import useUser from '../../hooks/useUser'
import { Colors } from '../../constants/Colors'

//themed component

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null);

    const { register, login } = useUser();
    const router = useRouter();

    const handleSubmit = async () => {
        setError(null);
        try {
            await register({ email, password });
            // Automatically log in after registration
            await login({ email, password });
            router.replace('/(dashboard)/profile');
        } catch (err: any) {
            setError(err.message);
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>

                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Register your account
                </ThemedText>
                <ThemedText title={false} style={styles.desc}>
                    Create your account to start a new journey with Shelfie
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

                <ThemedButton onPress={handleSubmit} style={{ marginTop: 20 }} >
                    <Text style={{ color: '#f2f2f2', }}>Register</Text>
                </ThemedButton>

                <Spacer height={40} />
                {error && <Text style={styles.error}>{error}</Text>}

                <Spacer height={20} />
                <Link href='/login'>
                    <ThemedText style={{ textAlign: 'center' }}>
                        Already Have an Account? <Text style={{ textDecorationLine: 'underline' }}>Login Instead</Text>
                    </ThemedText>
                </Link>

            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 8
    },
    desc: {
        marginTop: 12,
        marginBottom: 30,
        width: '70%',
        textAlign: 'center'
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