import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';
import { Button } from '../../components';
import CustomIcon, { IconNames } from '../../components/Icon';

export default function BecomeProfessionalIntroScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backRow}>
          <CustomIcon name={IconNames.arrowBack} size={fontSize(20)} color="#3FA565" />
          <Text style={styles.profileLink}>Profile</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Become a professional</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Want to offer your services on HandyNaija?</Text>
        <Text style={styles.subtitle}>
          Create your professional profile and start earning money
        </Text>

        {/* Illustration placeholder - replace with actual asset when available */}
        <View style={styles.illustrationPlaceholder}>
          <Text style={styles.illustrationHint}>Illustration</Text>
        </View>

        <View style={styles.bottomButton}>
          <Button
            title="Become a professional"
            onPress={() => navigate('BecomeProfessionalSlider')}
            variant="primary"
          />
        </View>
      </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: padding.sm,
  },
  profileLink: {
    fontSize: fontSize(16),
    color: '#3FA565',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: fontSize(16),
    color: '#000',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: padding.xl,
  },
  title: {
    fontSize: fontSize(28),
    fontWeight: '700',
    color: '#1B3556',
    marginBottom: margin.md,
    textAlign: 'center',
    lineHeight: fontSize(34),
  },
  subtitle: {
    fontSize: fontSize(16),
    color: '#555',
    lineHeight: fontSize(22),
    marginBottom: margin.xxl,
    textAlign: 'center',
  },
  illustrationPlaceholder: {
    flex: 1,
    minHeight: scale(200),
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
  bottomButton: {
    marginTop: 'auto',
  },
});
