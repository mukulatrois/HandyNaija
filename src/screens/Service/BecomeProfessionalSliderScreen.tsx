import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';
import { Button } from '../../components';

const SLIDER_STEPS = [
  {
    id: 0,
    title: 'Offer your at-home services',
    subtitle: "Let us know where you can travel to, when you're available, and what services you want to offer.",
    titleAlign: 'left' as const,
  },
  {
    id: 1,
    title: 'Perform the services',
    subtitle: 'Complete the services for which you have been booked.',
    titleAlign: 'center' as const,
  },
  {
    id: 2,
    title: 'Get Customers',
    subtitle: 'Service requests for customers or actively apply for job leads.',
    titleAlign: 'left' as const,
  },
  {
    id: 3,
    title: 'Earn money',
    subtitle: 'Receive the payment for the services you have provided on your account.',
    titleAlign: 'center' as const,
  },
];

export default function BecomeProfessionalSliderScreen() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step === SLIDER_STEPS.length - 1) {
      navigate('SelectCountry');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.exitText}>Exit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.illustrationPlaceholder}>
          <Text style={styles.illustrationHint}>Illustration</Text>
        </View>

        <Text
          style={[
            styles.title,
            SLIDER_STEPS[step].titleAlign === 'left' && styles.titleLeft,
          ]}
        >
          {SLIDER_STEPS[step].title}
        </Text>
        <Text
          style={[
            styles.subtitle,
            SLIDER_STEPS[step].titleAlign === 'left' && styles.subtitleLeft,
          ]}
        >
          {SLIDER_STEPS[step].subtitle}
        </Text>

        <View style={styles.dotsRow}>
          {SLIDER_STEPS.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === step && styles.dotActive]}
            />
          ))}
        </View>

        <Button
          title="Next"
          onPress={handleNext}
          variant="primary"
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerSpacer: { flex: 1 },
  exitText: {
    fontSize: fontSize(16),
    color: '#3FA565',
    fontWeight: '600',
  },
  scrollContent: {
    flex: 1,
    padding: padding.xl,
    paddingBottom: margin.xxxl,
  },
  illustrationPlaceholder: {
    height: scale(200),
    backgroundColor: '#F5F5F5',
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: margin.xxl,
  },
  illustrationHint: {
    fontSize: fontSize(14),
    color: '#999',
  },
  title: {
    fontSize: fontSize(28),
    fontWeight: '700',
    color: '#1B3556',
    marginBottom: margin.md,
    textAlign: 'center',
  },
  titleLeft: {
    textAlign: 'left',
  },
  subtitle: {
    fontSize: fontSize(16),
    color: '#555',
    lineHeight: fontSize(22),
    marginBottom: margin.xxl,
    textAlign: 'center',
  },
  subtitleLeft: {
    textAlign: 'left',
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: margin.xl,
    gap: scale(8),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#E0E0E0',
  },
  dotActive: {
    backgroundColor: '#3FA565',
  },
  button: {
    marginTop: margin.lg,
  },
});
