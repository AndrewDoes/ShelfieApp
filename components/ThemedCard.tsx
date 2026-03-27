import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors'
import { ViewStyle } from 'react-native'

const ThemedCard = ({ style, ...props }: { style?: ViewStyle;[key: string]: any }) => {
    const colorScheme = useColorScheme();
    const themeMode = colorScheme === "dark" ? "dark" : "light"
    const theme = Colors[themeMode]

    return (
        <View
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
            {...props}
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})