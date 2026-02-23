import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RoleSelectScreen from '../screens/RoleSelectScreen';
import { navigationRef, RootStackParamList } from './navigationService';
import LoginSheet from '../screens/LoginScreen';
import EmailLoginScreen from '../screens/EmailLoginScreen';
import CreateNewAccountScreen from '../screens/CreateNewAccountScreen';
import PhoneSignupScreen from '../screens/PhoneSignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OTPScreen from '../screens/OTPScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import BecomeProfessionalIntroScreen from '../screens/BecomeProfessionalIntroScreen';
import WorkAreasScreen from '../screens/WorkAreasScreen';
import SelectCountryScreen from '../screens/SelectCountryScreen';
import ProfessionalProfileScreen from '../screens/ProfessionalProfileScreen';
import ChatConversationScreen from '../screens/ChatConversationScreen';
import TabNavigator from './TabNavigator';
import ProviderTabNavigator from './ProviderTabNavigator';
import SearchScreen from '../screens/SearchServices/SearchScreen';
import RepairMaintenance from '../screens/SearchServices/RepairMaintenance';
import Home from '../screens/SearchServices/Home';
import Beauty from '../screens/SearchServices/Beauty';
import MediaEvent from '../screens/SearchServices/MediaEvent';
import TechIT from '../screens/SearchServices/TectIT';
import Automobile from '../screens/SearchServices/Automobile';
import Others from '../screens/SearchServices/Others';
import AddAddressScreen from '../screens/AddAddress';
import RequestDetailScreen from '../screens/Provider/RequestDetailScreen';
import UpdateEventScreen from '../screens/Provider/UpdateEventScreen';
import PersonalDetailsScreen from '../screens/Provider/PersonalDetailsScreen';
import EditProfileScreen from '../screens/Provider/EditProfileScreen';
import ChangePasswordScreen from '../screens/Provider/ChangePasswordScreen';
import MyBalanceScreen from '../screens/MyBalanceScreen';
import CreateListingScreen from '../screens/Provider/CreateListingScreen';
import ListingPriceScreen from '../screens/Provider/ListingPriceScreen';
import ListingPhoneScreen from '../screens/Provider/ListingPhoneScreen';
import ListingVerificationScreen from '../screens/Provider/ListingVerificationScreen';
import ListingAboutMeScreen from '../screens/Provider/ListingAboutMeScreen';

// Wrapper component with default props for initial route

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
        initialRouteName='ProviderTabs'
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
        <Stack.Screen
          name="Login"
          component={LoginSheet}
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="EmailLogin"
          component={EmailLoginScreen}
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="CreateNewAccount"
          component={CreateNewAccountScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="PhoneSignup"
          component={PhoneSignupScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetupScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ProviderTabs"
          component={ProviderTabNavigator}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="BecomeProfessionalIntro"
          component={BecomeProfessionalIntroScreen}
        />
        <Stack.Screen
          name="WorkAreas"
          component={WorkAreasScreen}
        />
        <Stack.Screen
          name="SelectCountry"
          component={SelectCountryScreen}
        />
        <Stack.Screen
          name="ProfessionalProfile"
          component={ProfessionalProfileScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ChatConversation"
          component={ChatConversationScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="RepairMaintenance"
          component={RepairMaintenance}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Beauty"
          component={Beauty}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="MediaEvent"
          component={MediaEvent}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="TechIT"
          component={TechIT}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Automobile"
          component={Automobile}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Others"
          component={Others}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddressScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="RequestDetail"
          component={RequestDetailScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="UpdateEvent"
          component={UpdateEventScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="PersonalDetails"
          component={PersonalDetailsScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="MyBalance"
          component={MyBalanceScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="CreateListing"
          component={CreateListingScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ListingPrice"
          component={ListingPriceScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ListingPhone"
          component={ListingPhoneScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ListingVerification"
          component={ListingVerificationScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="ListingAboutMe"
          component={ListingAboutMeScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}