import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/navigationService';
import CustomIcon, { IconNames } from '../../components/Icon';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';

export default function WorkScheduleCalendarScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Progress bar */}
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <CustomIcon name={IconNames.arrowBack} size={fontSize(20)} color="#3FA565" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Calendar</Text>
      <Text style={styles.subtitle}>
        Select the dates when you are not available to offer your services.
      </Text>

      <View style={styles.calendarPlaceholder}>
        <CustomIcon name={IconNames.calendar} size={fontSize(48)} color="#ccc" />
        <Text style={styles.placeholderText}>Calendar</Text>
      </View>

      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => navigate('MainTabs')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  progressBg: {
    height: 6,
    backgroundColor: '#E0E0E0',
    marginHorizontal: padding.xl,
    marginTop: padding.md,
    borderRadius: 10,
  },
  progressFill: {
    width: '40%',
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
  title: {
    fontSize: fontSize(28),
    fontWeight: '700',
    color: '#3FA565',
    marginHorizontal: padding.xl,
    marginBottom: margin.sm,
  },
  subtitle: {
    fontSize: fontSize(14),
    color: '#555',
    marginHorizontal: padding.xl,
    marginBottom: margin.lg,
    lineHeight: fontSize(20),
  },
  calendarPlaceholder: {
    flex: 1,
    marginHorizontal: padding.xl,
    backgroundColor: '#F7F7F7',
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: fontSize(16),
    color: '#999',
    marginTop: margin.md,
  },
  continueBtn: {
    backgroundColor: '#3FA565',
    margin: padding.xl,
    padding: padding.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: fontSize(16),
    fontWeight: '600',
  },
});
