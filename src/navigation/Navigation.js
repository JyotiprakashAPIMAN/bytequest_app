import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import HomeScreen from '../screens/userScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../screens/loginScreen/RegisterScreen';
import SplashScreen from '../screens/loginScreen/SplashScreen';
import OnBoardingScreen from '../screens/loginScreen/OnBoardingScreen';
import ProfileScreen from '../screens/userScreen/ProfileScreen';
import BookingHistoryScreen from '../screens/userScreen/BookingHistoryScreen';
import NotificationScreen from '../screens/userScreen/NotificationScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BLACK, BRANDCOLOR, WHITE } from '../constants/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingScree from '../screens/userScreen/SettingScreen';
import AccountScreen from '../screens/userScreen/AccountScreen';
import SignInScreen from '../screens/userScreen/SignInScreen';
import DataPrivacyScreen from '../screens/userScreen/DataPrivacyScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
            activeColor={BLACK}
            inactiveColor={BRANDCOLOR}
            barStyle={{
                backgroundColor: WHITE,
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-flood" color={BLACK} size={28} />
                    )
                }} />
            <Tab.Screen name="Notification" component={NotificationScreen}
            options={{
                tabBarLabel:"Notification",
                tabBarIcon:({WHITE})=>(
                    <MaterialCommunityIcons name="bell-ring" color={BLACK} size={28}/>
                )
            }} />
            <Tab.Screen name="Booking History" component={BookingHistoryScreen} 
            options={{
                tabBarLabel:"Booking History",
                tabBarIcon:({WHITE})=>(
                    <MaterialCommunityIcons name="history" color={BLACK} size={28}/>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
                tabBarLabel:"Profile",
                tabBarIcon:({WHITE})=>(
                    <MaterialCommunityIcons name="account-circle" color={BLACK} size={28}/>
                )
            }} />
        </Tab.Navigator>
    )
}
const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Setting" component={SettingScree}/>
            <Stack.Screen name='Account' component={AccountScreen}/>
            <Stack.Screen name='SignIn' component={SignInScreen}/>
            <Stack.Screen name='DataPrivacy' component={DataPrivacyScreen}/>
            <Stack.Screen name="Main" component={BottomTabNavigation} />
        </Stack.Navigator>
    )
}

export default Navigations = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}