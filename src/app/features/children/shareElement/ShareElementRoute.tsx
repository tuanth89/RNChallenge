import { enableScreens } from 'react-native-screens'
import { createStackNavigator } from '@react-navigation/stack';
import { SHARE_SCREEN } from './ScreenType'
import { TransitionRoute1 } from './t1/TransitionRoute1';
enableScreens()

const Stack = createStackNavigator()
export const ShareElement = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={SHARE_SCREEN.TRANSITION_1.ROOT} component={TransitionRoute1} />
        </Stack.Navigator>
    )
}