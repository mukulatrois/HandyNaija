import {
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

/* ---------------- ROUTE TYPES ---------------- */

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  RoleSelect: undefined;
  Login: undefined;
  EmailLogin: undefined;
  CreateNewAccount: undefined;
  PhoneSignup: undefined;
  ForgotPassword: undefined;
  OTP: { phoneNumber?: string; type?: 'email' | 'phone' };
  ResetPassword: undefined;
  ProfileSetup: undefined;
  BecomeProfessionalIntro: undefined;
  BecomeProfessionalSlider: undefined;
  WorkAreas: undefined;
  WorkAreasList: undefined;
  WorkSchedule: undefined;
  WorkScheduleCalendar: undefined;
  SelectCountry: undefined;
  ChooseCity: undefined;
  MainTabs: undefined;
  ProviderTabs: undefined;
  ProfessionalProfile: { categoryId?: string };
  ChatConversation: { chatId?: string };
  Search: undefined;
  Home: {
    title: string;
    items: any[];
    layout?: string;
  };
  Beauty: undefined;
  MediaEvent: undefined;
  TechIT: undefined;
  Others: undefined;
  RepairMaintenance: undefined;
  Automobile: undefined;
  AddAddress: undefined;
  FindProfessionals: undefined;
  ProfessionalDetail: { professionalId: string };
  PersonalDetails: undefined;
  EditPersonalDetails: undefined;
  ShareAndEarn: undefined;
  MyCodes: undefined;
  MyBookings: undefined;
  MyAddresses: undefined;
  ChooseLanguage: undefined;
  PaymentsAndRefunds: undefined;
  Help: undefined;
  AboutHandynaija: undefined;
  HowCanWeImprove: undefined;
  // Provider flow screens
  CreateListing: undefined;
  ListingAboutMe: undefined;
  ListingVerification: undefined;
  ListingPrice: { serviceName?: string };
  ListingPhone: undefined;
  RequestDetail: {
    requestId: string;
    name?: string;
    avatar?: string;
    price?: string;
    date?: string;
    time?: string;
    services?: string;
    email?: string;
    phone?: string;
    location?: string;
  };
  UpdateEvent: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  PPersonalDetails: undefined;
  ReachSilver: undefined;
  ReachGold: undefined;
  PointTiers: undefined;
};

/* ---------------- NAV REF ---------------- */

export const navigationRef =
  createNavigationContainerRef<RootStackParamList>();

/* ---------------- RESET ---------------- */

export function resetNavigation<T extends keyof RootStackParamList>(
  routeName: T,
  params?: RootStackParamList[T]
) {
  if (!navigationRef.isReady()) return;

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName, params }],
    })
  );
}

/* ---------------- NAVIGATE ---------------- */

export function navigate<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (!navigationRef.isReady()) return;
  navigationRef.navigate(name as any, params as any);
}

/* ---------------- REPLACE ---------------- */

export function replace<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) {
  if (!navigationRef.isReady()) return;

  navigationRef.dispatch(StackActions.replace(name, params));
}

/* ---------------- BACK ---------------- */

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

/* ---------------- CURRENT ROUTE ---------------- */

export function getCurrentRouteName() {
  return navigationRef.getCurrentRoute()?.name;
}
