import React from 'react'
import { StyleProp, Text, TextProps, TextStyle, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


type Props = TextProps & {
    style?: StyleProp<TextStyle>
    title?: boolean
}

const ThemedText = ({ style, title = false, ...props }: Props) => {
    const colorScheme = useColorScheme()
    const themeMode = colorScheme === "dark" ? "dark" : "light"
    const theme = Colors[themeMode]

    const textColor = title ? theme.title : theme.text;

    return (
        <Text style={[{ color: textColor }, style]}
            {...props} />
    )
}

export default ThemedText
