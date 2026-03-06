import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

type Props = {
    width?: ViewStyle['width']
    height?: ViewStyle['height']
    style?: StyleProp<ViewStyle>
}

const Spacer = ({ width = "100%", height = 20, style }: Props) => {
    return (
        <View style={[{ width, height }, style]} />
    )
}

export default Spacer
