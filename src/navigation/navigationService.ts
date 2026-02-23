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
  WorkAreas: undefined;
  SelectCountry: undefined;
  MainTabs: undefined;
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
