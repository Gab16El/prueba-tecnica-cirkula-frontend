import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { StoresScreen } from '../screens/StoresScreen';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const MainTabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false,
        }}>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => <IonIcon name="home-outline" color={color} />
            }}
        />
        <Tab.Screen
            name="Stores"
            component={StoresScreen}
            options={{
                tabBarIcon: ({ color }) => <IonIcon name="storefront-outline" color={color} />,
                headerShown: true,
                headerTitle: 'Tiendas cercanas',
                headerStyle: { backgroundColor: colors.primary },
                headerTitleStyle: { color: colors.white, fontWeight: '700' },
                headerTintColor: colors.white,
            }}
        />
    </Tab.Navigator>
);


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.white,
        borderTopWidth: 0,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        height: 65,
        paddingBottom: 8,
    },
});