import { View, useColorScheme, ViewProps, StyleProp, ViewStyle } from 'react-native'
import { Colors } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = ViewProps & {
    style?: StyleProp<ViewStyle>
    safe?: boolean
}

export default function ThemedView({ style, safe = false, ...props }: Props) {
    const colorScheme = useColorScheme()
    const themeMode = colorScheme === "dark" ? "dark" : "light"
    const theme = Colors[themeMode]

    if (!safe) {
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

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                {
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom
                },
                style
            ]}
            {...props}
        />
    )

}