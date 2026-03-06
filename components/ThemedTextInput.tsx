import { StyleProp, TextInput, TextInputProps, TextStyle, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

interface Prop extends TextInputProps {
    style?: StyleProp<TextStyle>;

}

const ThemedTextInput = ({ style, ...props }: Prop) => {
    const colorScheme = useColorScheme()
    const themeMode = colorScheme === "dark" ? "dark" : "light"
    const theme = Colors[themeMode]
    return (
        <TextInput
            placeholderTextColor={theme.iconColor}
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    padding: 20,
                    borderRadius: 6
                },
                style
            ]}
            {...props} />
    )
}

export default ThemedTextInput
