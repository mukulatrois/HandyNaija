/**
 * Common Navigation Actions
 * Re-exports common navigation actions and utilities for easy access
 */

// Re-export CommonActions and StackActions from React Navigation
export {
  CommonActions,
  StackActions,
} from '@react-navigation/native';

// Re-export everything from navigationService
export {
  navigationRef,
  navigate,
  resetNavigation,
  replace,
  goBack,
  getCurrentRouteName,
} from './navigationService';

export type { RootStackParamList } from './navigationService';
