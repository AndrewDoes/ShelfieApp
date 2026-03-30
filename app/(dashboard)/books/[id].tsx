import React, { useEffect, useState } from 'react'
import { Theme } from 'react-native-appwrite'
import ThemedView from '../../../components/ThemedView'
import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import ThemedText from '../../../components/ThemedText'
import useBooks from '../../../hooks/useBooks'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'

const BookDetails = () => {
    const { id } = useLocalSearchParams();
    const [book, setBook] = useState<any>(null);
    const { fetchBookById } = useBooks();

    useEffect(() => {
        async function loadBook() {
            const bookIdString = Array.isArray(id) ? id[0] : id;
            if (bookIdString) {
                const bookData = await fetchBookById(bookIdString);
                setBook(bookData);
            }
        }
        loadBook();
    }, [id])

    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container} >
                <ThemedLoader />
            </ThemedView >
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book description:</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20,
        width: "100%"
    }
})

export default BookDetails
