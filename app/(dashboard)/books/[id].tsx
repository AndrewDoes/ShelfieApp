import React, { useEffect, useState } from 'react'
import { Theme } from 'react-native-appwrite'
import ThemedView from '../../../components/ThemedView'
import { StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import ThemedText from '../../../components/ThemedText'
import useBooks from '../../../hooks/useBooks'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedButton from '../../../components/ThemedButton'
import { Colors } from '../../../constants/Colors'


const BookDetails = () => {
    const { id } = useLocalSearchParams();
    const [book, setBook] = useState<any>(null);
    const { fetchBookById, deleteBook } = useBooks();

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

    const handleDelete = async () => {
        if (!book) return;
        await deleteBook(book.$id);
        setBook(null);
        router.replace("/books");
    }

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

            <ThemedButton style={styles.delete} onPress={() => {
                handleDelete()
            }}>
                <ThemedText>
                    Delete Book
                </ThemedText>
            </ThemedButton>
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
    },
    delete: {
        backgroundColor: Colors.warning,
        padding: 15,
        borderRadius: 5,
        width: "90%",
        alignItems: "center",
        marginTop: 20,
    }
})

export default BookDetails
