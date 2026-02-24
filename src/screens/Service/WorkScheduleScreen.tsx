import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/navigationService';
import CustomIcon, { IconNames } from '../../components/Icon';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

type TimeSlot = { from: string; until: string };

export default function WorkScheduleScreen() {
  const [schedule, setSchedule] = useState<Record<string, boolean>>(
    DAYS.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );
  const [timeSlots, setTimeSlots] = useState<Record<string, TimeSlot[]>>(
    DAYS.reduce((acc, day) => ({ ...acc, [day]: [{ from: '', until: '' }] }), {})
  );

  const toggleDay = (day: string) => {
    const isActivating = !schedule[day];
    setSchedule((prev) => ({ ...prev, [day]: isActivating }));
    if (!isActivating) {
      setTimeSlots((prev) => ({ ...prev, [day]: [{ from: '', until: '' }] }));
    }
  };

  const removeTimeSlot = (day: string, index: number) => {
    setTimeSlots((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const updateTimeSlot = (
    day: string,
    index: number,
    field: 'from' | 'until',
    value: string
  ) => {
    setTimeSlots((prev) => {
      const slots = [...(prev[day] || [])];
      slots[index] = { ...slots[index], [field]: value };
      return { ...prev, [day]: slots };
    });
  };

  const activeCount = Object.values(schedule).filter(Boolean).length;
  const canContinue = activeCount > 0;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Progress bar ~35% */}
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <CustomIcon name={IconNames.arrowBack} size={fontSize(20)} color="#3FA565" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Work Schedule</Text>
      <Text style={styles.subtitle}>
        When are you available to offer your services?
      </Text>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}>
        {DAYS.map((day) => (
          <View key={day} style={styles.dayCard}>
            <View style={styles.row}>
              <Text style={styles.dayText}>{day}</Text>
              <View style={styles.toggleRow}>
                <Text
                  style={[
                    styles.statusText,
                    schedule[day] && styles.statusTextActive,
                  ]}>
                  {schedule[day] ? 'Available' : 'Not Activate'}
                </Text>
                <Switch
                  value={schedule[day]}
                  onValueChange={() => toggleDay(day)}
                  trackColor={{ false: '#E0E0E0', true: '#3FA565' }}
                  thumbColor="#fff"
                />
              </View>
            </View>
            {schedule[day] && (
              <View style={styles.timeSlotsSection}>
                {(timeSlots[day] || []).map((slot, index) => (
                  <View key={`${day}-${index}`} style={styles.timeSlotRow}>
                    <TextInput
                      style={styles.timeInput}
                      placeholder="From"
                      placeholderTextColor="#999"
                      value={slot.from}
                      onChangeText={(v) =>
                        updateTimeSlot(day, index, 'from', v)
                      }
                    />
                    <Text style={styles.timeDash}>-</Text>
                    <TextInput
                      style={styles.timeInput}
                      placeholder="Until"
                      placeholderTextColor="#999"
                      value={slot.until}
                      onChangeText={(v) =>
                        updateTimeSlot(day, index, 'until', v)
                      }
                    />
                    <TouchableOpacity
                      style={styles.removeSlotBtn}
                      onPress={() => removeTimeSlot(day, index)}>
                      <CustomIcon
                        name={IconNames.close}
                        size={fontSize(16)}
                        color="#999"
                      />
                    </TouchableOpacity>
                  </View>
                ))}
                <Text style={styles.addHoursText}>Add hours</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        disabled={!canContinue}
        style={[styles.continueBtn, !canContinue && styles.disabledBtn]}
        onPress={() => navigate('WorkScheduleCalendar')}>
        <Text
          style={[
            styles.continueText,
            !canContinue && styles.continueTextDisabled,
          ]}>
          Continue
        </Text>
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
    width: '35%',
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
  list: { flex: 1 },
  listContent: {
    paddingHorizontal: padding.xl,
    paddingBottom: margin.xxl,
  },
  dayCard: {
    paddingVertical: padding.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayText: {
    fontSize: fontSize(16),
    color: '#000',
    fontWeight: '700',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: padding.md,
  },
  statusText: {
    fontSize: fontSize(14),
    color: '#999',
  },
  statusTextActive: {
    color: '#000',
  },
  timeSlotsSection: {
    marginTop: margin.lg,
  },
  timeSlotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: margin.md,
    gap: padding.sm,
  },
  timeInput: {
    flex: 1,
    fontSize: fontSize(16),
    color: '#000',
    paddingVertical: padding.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeDash: {
    fontSize: fontSize(16),
    color: '#999',
  },
  removeSlotBtn: {
    padding: padding.sm,
  },
  addHoursText: {
    fontSize: fontSize(14),
    color: '#3FA565',
    fontWeight: '600',
  },
  continueBtn: {
    backgroundColor: '#3FA565',
    margin: padding.xl,
    padding: padding.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#E0E0E0',
  },
  continueText: {
    color: '#fff',
    fontSize: fontSize(16),
    fontWeight: '600',
  },
  continueTextDisabled: {
    color: '#888',
  },
});
