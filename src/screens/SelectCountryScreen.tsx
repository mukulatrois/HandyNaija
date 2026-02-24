import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../navigation/navigationService';
import CustomIcon, { IconNames } from '../components/Icon';
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';

const COUNTRIES = [
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  // Add more countries as needed
];

export default function SelectCountryScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelectCountry = (code: string) => {
    setSelected(code);
    if (code === 'NG') {
      navigate('ChooseCity');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Progress bar */}
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <CustomIcon name={IconNames.arrowBack} size={fontSize(20)} color="#3FA565" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Select country.</Text>
        <Text style={styles.subtitle}>
          In which country do you want to offer your services?
        </Text>

        {COUNTRIES.map((country) => (
          <TouchableOpacity
            key={country.code}
            style={[styles.countryCard, selected === country.code && styles.countryCardActive]}
            onPress={() => handleSelectCountry(country.code)}
            activeOpacity={0.7}
          >
            <Text style={styles.flag}>{country.flag}</Text>
            <Text style={styles.countryName}>{country.name}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            Haven't we reached your area yet?
          </Text>
          <Text style={styles.footerText}>
            <Text
              style={styles.footerLink}
              onPress={() => {}}
            >
              Request an opening in your area
            </Text>
            , and we will do our best to reach you as soon as possible.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  progressBg: {
    height: 6,
    backgroundColor: '#E0E0E0',
    marginHorizontal: padding.xl,
    marginTop: padding.md,
    borderRadius: 10,
  },
  progressFill: {
    width: '15%',
    height: '100%',
    backgroundColor: '#3FA565',
    borderRadius: 10,
  },
  header: {
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
  },
  backButton: {
    width: scale(40),
  },
  content: {
    flex: 1,
    padding: padding.xl,
    paddingTop: 0,
  },
  title: {
    fontSize: fontSize(28),
    fontWeight: '700',
    color: '#3FA565',
    marginBottom: margin.md,
  },
  subtitle: {
    fontSize: fontSize(16),
    color: '#555',
    marginBottom: margin.xxl,
    lineHeight: fontSize(22),
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: padding.lg,
    backgroundColor: '#F7F7F7',
    borderRadius: borderRadius.lg,
    marginBottom: margin.md,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  countryCardActive: {
    backgroundColor: '#E8F5EE',
    borderColor: '#3FA565',
  },
  flag: {
    fontSize: fontSize(32),
    marginRight: padding.lg,
  },
  countryName: {
    fontSize: fontSize(16),
    color: '#333',
    fontWeight: '500',
  },
  footer: {
    marginTop: margin.xxl,
    paddingTop: margin.xl,
  },
  footerTitle: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: '#333',
    marginBottom: margin.sm,
  },
  footerText: {
    fontSize: fontSize(14),
    color: '#555',
    lineHeight: fontSize(20),
    marginBottom: margin.sm,
  },
  footerLink: {
    fontSize: fontSize(14),
    color: '#3FA565',
    fontWeight: '600',
  },
});
