import React, { useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { useRouter } from 'expo-router';
import { Text, ToastAndroid } from 'react-native';

const UserOnly = ({ children }: { children: React.ReactNode }) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user === null) {
            ToastAndroid.showWithGravity(
                "Please Log In First",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            )
            router.replace('/login')
        }
    }, [user, authChecked])

    if (!authChecked || !user) {
        return (
            <Text>Loading...</Text>
        )
    }
    return children;
}

export default UserOnly
