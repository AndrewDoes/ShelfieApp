import { FlatList, Pressable, StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import useBooks from '../../hooks/useBooks'
import { Colors } from '../../constants/Colors'
import ThemedCard from '../../components/ThemedCard'
import { useRouter } from 'expo-router'

const Books = () => {
    const router = useRouter();
    const { books } = useBooks();
    return (
        <ThemedView style={styles.container} safe={true}>

            <Spacer />
            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>

            <Spacer />

            <FlatList
                data={books}
                keyExtractor={(item) => item.$id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {
                        router.push(`/books/${item.$id}`)
                    }}>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>
                            <ThemedText style={styles.author}>Written by {item.author}</ThemedText>
                            <ThemedText>{item.description}</ThemedText>
                        </ThemedCard>
                    </Pressable>
                )}
            >

            </FlatList>

        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "stretch",
    },
    heading: {
        marginTop: 50,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    list: {
        marginTop: 40,
    },
    card: {
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        paddingLeft: 20,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4,
        display: 'flex',
        flexDirection: 'column',

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    author: {
        fontSize: 12,
        opacity: 0.8,
        marginBottom: 10
    }
})