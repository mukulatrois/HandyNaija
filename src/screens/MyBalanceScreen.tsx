import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  scale,
  fontSize,
  padding,
  margin,
  borderRadius,
} from '../utils/responsive';
import { colors } from '../theme/colors';
import { goBack } from '../navigation/navigationService';

const PRIMARY_GREEN = '#3FA565';

const transactions = [
  {
    id: '1',
    icon: 'cash-outline',
    iconBg: '#DC2626',
    text: '₦50.00 already cut from your account as service commission.',
  },
  {
    id: '2',
    icon: 'home-outline',
    iconBg: '#7DD3FC',
    text: 'You have successfully received ₦0.00 on your account via Referral & complete registration as professional in HandyNaija app.',
  },
  {
    id: '3',
    icon: 'cash-outline',
    iconBg: '#DC2626',
    text: '₦10.00 already cut from your account as service commission.',
  },
  {
    id: '4',
    icon: 'business-outline',
    iconBg: '#3B82F6',
    text: 'You have successfully Withdraw ₦50.00 on your account via bank.',
  },
];

export default function MyBalanceScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.headerButton}>
          <Icon name="chevron-back" size={scale(24)} color={PRIMARY_GREEN} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Balance</Text>
        <TouchableOpacity
          style={[styles.headerButton, styles.headerButtonRight]}
          activeOpacity={0.7}
        >
          <Icon
            name="receipt-outline"
            size={scale(22)}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Available Balance */}
        <View style={styles.balanceSection}>
          <View style={styles.balanceRow}>
            <View>
              <Text style={styles.balanceAmount}>₦50.00</Text>
              <Text style={styles.balanceLabel}>Available Balance</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.transferButton}
            activeOpacity={0.7}
          >
            <Text style={styles.transferButtonText}>
              Transfer to my account
            </Text>
          </TouchableOpacity>

          <Text style={styles.withdrawalInfo}>
            Minimum withdrawal amount ₦50.00
          </Text>
        </View>

        {/* Pending Payments */}
        <View style={styles.pendingSection}>
          <View style={styles.pendingHeader}>
            <Text style={styles.pendingTitle}>Pending Payments</Text>
            <View style={styles.pendingRight}>
              <Text style={styles.pendingAmount}>₦0.00</Text>
              <TouchableOpacity style={styles.infoIcon} activeOpacity={0.7}>
                <Icon
                  name="help-circle-outline"
                  size={scale(20)}
                  color={colors.textSecondary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Payment History */}
        <Text style={styles.sectionTitle}>Payment history</Text>
        {transactions.map((tx) => (
          <View key={tx.id} style={styles.transactionCard}>
            <View style={[styles.transactionIcon, { backgroundColor: tx.iconBg }]}>
              <Icon name={tx.icon as any} size={scale(20)} color="#fff" />
            </View>
            <Text style={styles.transactionText}>{tx.text}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: padding.lg,
    paddingVertical: padding.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerButton: {
    minWidth: scale(40),
  },
  headerButtonRight: {
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontSize: fontSize(18),
    fontWeight: '700',
    color: colors.text,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: padding.xl,
    paddingTop: margin.xl,
    paddingBottom: margin.xxxl,
  },
  balanceSection: {
    marginBottom: margin.xxl,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: margin.xl,
  },
  balanceAmount: {
    fontSize: fontSize(32),
    fontWeight: '700',
    color: colors.text,
  },
  balanceLabel: {
    fontSize: fontSize(14),
    color: colors.text,
    marginTop: padding.xs,
  },
  transferButton: {
    backgroundColor: PRIMARY_GREEN,
    paddingVertical: padding.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: padding.md,
  },
  transferButtonText: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: colors.white,
  },
  withdrawalInfo: {
    fontSize: fontSize(13),
    color: colors.textSecondary,
  },
  pendingSection: {
    marginBottom: margin.xxl,
  },
  pendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pendingTitle: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: colors.text,
  },
  pendingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: padding.sm,
  },
  pendingAmount: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: colors.text,
  },
  infoIcon: {
    padding: padding.xs,
  },
  sectionTitle: {
    fontSize: fontSize(14),
    fontWeight: '600',
    color: colors.text,
    marginBottom: margin.md,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.borderLight,
    borderRadius: borderRadius.lg,
    padding: padding.lg,
    marginBottom: margin.md,
  },
  transactionIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: padding.lg,
  },
  transactionText: {
    flex: 1,
    fontSize: fontSize(14),
    color: colors.text,
    lineHeight: fontSize(20),
  },
});
