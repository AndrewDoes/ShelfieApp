import React from 'react'
import { Theme } from 'react-native-appwrite'
import ThemedView from '../../../components/ThemedView'
import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import ThemedText from '../../../components/ThemedText'

const BookDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedText title={true}>
                Book Details for ID: {id}
            </ThemedText>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default BookDetails
