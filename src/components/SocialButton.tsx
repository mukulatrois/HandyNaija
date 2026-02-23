import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { fontSize, padding, borderRadius, margin } from '../utils/responsive';

export type SocialProvider = 'apple' | 'facebook' | 'google';

interface SocialButtonProps {
  provider: SocialProvider;
  onPress: () => void;
  style?: ViewStyle;
}

const SOCIAL_CONFIG = {
  apple: {
    backgroundColor: '#000',
    textColor: '#fff',
    icon: '🍎',
    text: 'Continue with Apple',
  },
  facebook: {
    backgroundColor: '#1877F2',
    textColor: '#fff',
    icon: 'f',
    text: 'Continue with Facebook',
  },
  google: {
    backgroundColor: '#fff',
    textColor: '#000',
    icon: 'G',
    text: 'Continue with Google',
    border: true,
  },
};

export default function SocialButton({
  provider,
  onPress,
  style,
}: SocialButtonProps) {
  const config = SOCIAL_CONFIG[provider];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: config.backgroundColor },
        config.border && styles.border,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.icon}>{config.icon}</Text>
      <Text style={[styles.text, { color: config.textColor }]}>
        {config.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding.lg,
    borderRadius: borderRadius.lg,
    marginBottom: margin.md,
  },
  border: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  icon: {
    fontSize: fontSize(20),
    marginRight: padding.sm,
  },
  text: {
    fontSize: fontSize(16),
    fontWeight: '600',
  },
});
