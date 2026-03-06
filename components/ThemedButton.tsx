import React from 'react'
import { Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'
import { Colors } from '../constants/Colors'

type Props = PressableProps & {
    style?: StyleProp<ViewStyle>
    title?: string
}

const ThemedButton = ({ style, ...props }: Props) => {
    return (
        <Pressable
            {...props}
            style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}>
        </Pressable>
    )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
        borderCurve: 'circular'
    },
    pressed: {
        opacity: 0.8
    }
})