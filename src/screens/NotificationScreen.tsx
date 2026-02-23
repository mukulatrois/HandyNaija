import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';

export default function NotificationScreen() {
  const notifications = [
    { id: 1, title: 'New Booking', message: 'You have a new service booking', time: '2 hours ago', read: false },
    { id: 2, title: 'Payment Received', message: 'Payment of ₦5,000 received', time: '5 hours ago', read: false },
    { id: 3, title: 'Service Completed', message: 'Your service has been completed', time: '1 day ago', read: true },
    { id: 4, title: 'Review Received', message: 'You received a 5-star review', time: '2 days ago', read: true },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Mark all as read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {notifications.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🔔</Text>
            <Text style={styles.emptyText}>No notifications yet</Text>
            <Text style={styles.emptySubtext}>You'll see notifications here when you have updates</Text>
          </View>
        ) : (
          notifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.read && styles.unreadCard,
              ]}
            >
              <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
              {!notification.read && <View style={styles.unreadDot} />}
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: padding.xl,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: fontSize(24),
    fontWeight: 'bold',
    color: '#000',
  },
  markAllRead: {
    fontSize: fontSize(14),
    color: '#3FA565',
    fontWeight: '600',
  },
  scrollContent: {
    padding: padding.xl,
    paddingBottom: margin.xxxl,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: margin.xxxl,
  },
  emptyEmoji: {
    fontSize: fontSize(64),
    marginBottom: margin.lg,
  },
  emptyText: {
    fontSize: fontSize(20),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: margin.sm,
  },
  emptySubtext: {
    fontSize: fontSize(14),
    color: '#666',
    textAlign: 'center',
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    padding: padding.lg,
    marginBottom: margin.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  unreadCard: {
    backgroundColor: '#F0F9FF',
    borderLeftWidth: 4,
    borderLeftColor: '#3FA565',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: margin.xs,
  },
  notificationMessage: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: margin.xs,
  },
  notificationTime: {
    fontSize: fontSize(12),
    color: '#999',
  },
  unreadDot: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(6),
    backgroundColor: '#3FA565',
    marginLeft: margin.md,
    alignSelf: 'center',
  },
});
