import { View, useColorScheme, ViewProps, StyleProp, ViewStyle } from 'react-native'
import { Colors } from '../constants/Colors'

type Props = ViewProps & {
    style?: StyleProp<ViewStyle>
}

export default function ThemedView({ style, ...props }: Props) {
    const colorScheme = useColorScheme()
    const themeMode = colorScheme === "dark" ? "dark" : "light"
    const theme = Colors[themeMode]

    return (
        <View
            style={[
                { backgroundColor: theme.background },
                style
            ]}
            {...props}
        />
    )
}