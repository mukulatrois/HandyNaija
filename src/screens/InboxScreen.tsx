import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from '../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';

interface ChatMessage {
  id: string;
  name: string;
  service: string;
  lastMessage: string;
  time: string;
  avatar: string;
  hasSupport?: boolean;
}

interface Alert {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
}

export default function InboxScreen() {
  const [activeTab, setActiveTab] = useState<'chat' | 'alerts'>('chat');
  const [showSecureModal, setShowSecureModal] = useState(false);

  const [chats] = useState<ChatMessage[]>([
    {
      id: '1',
      name: 'YERXON',
      service: 'Cleaning',
      lastMessage: 'Cleaning de ester misomo preciio se podtlak...',
      time: 'Thursday',
      avatar: '👤',
      hasSupport: true,
    },
    {
      id: '2',
      name: 'YERXON',
      service: 'Handyman',
      lastMessage: 'Need a service',
      time: '15/6/25',
      avatar: '👤',
    },
    {
      id: '3',
      name: 'Professional',
      service: 'Plumbing',
      lastMessage: 'Thank you for booking',
      time: '14/5/25',
      avatar: '👤',
    },
    {
      id: '4',
      name: 'Service Provider',
      service: 'Electrical',
      lastMessage: 'Service completed',
      time: '25/4/24',
      avatar: '👤',
    },
  ]);

  const [alerts] = useState<Alert[]>([
    {
      id: '1',
      icon: '⭐',
      title: 'YERXON has left you a review',
      description: 'Check it out on your profile.',
      date: 'Thursday',
    },
    {
      id: '2',
      icon: '⭐',
      title: 'Rate your service with YEROXON',
      description: 'Let us know how your Cleaning service...',
      date: 'Wednesday',
    },
    {
      id: '3',
      icon: '📅',
      title: 'Your service is about to begin',
      description: 'Just a reminder: in 2 hours...',
      date: 'Tuesday',
    },
    {
      id: '4',
      icon: '✅',
      title: 'Booking request confirmed',
      description: 'Congratulations! YEROXON has confirmed...',
      date: 'Monday',
    },
  ]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'chat' && styles.activeTab]}
          onPress={() => setActiveTab('chat')}
        >
          <Text style={[styles.tabText, activeTab === 'chat' && styles.activeTabText]}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'alerts' && styles.activeTab]}
          onPress={() => setActiveTab('alerts')}
        >
          <Text style={[styles.tabText, activeTab === 'alerts' && styles.activeTabText]}>
            Alerts
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'chat' ? (
          <View style={styles.chatList}>
            {chats.map((chat) => (
              <TouchableOpacity
                key={chat.id}
                style={styles.chatCard}
                onPress={() => navigate('ChatConversation' as any, { chatId: chat.id })}
              >
                <View style={styles.chatLeft}>
                  <View style={styles.avatarContainer}>
                    <Text style={styles.avatar}>{chat.avatar}</Text>
                  </View>
                  <View style={styles.chatInfo}>
                    <Text style={styles.chatName}>{chat.name}</Text>
                    <Text style={styles.chatService}>{chat.service}</Text>
                    <Text style={styles.chatMessage} numberOfLines={1}>
                      {chat.lastMessage}
                    </Text>
                  </View>
                </View>
                <View style={styles.chatRight}>
                  <Text style={styles.chatTime}>{chat.time}</Text>
                  {chat.hasSupport && (
                    <TouchableOpacity style={styles.supportButton}>
                      <Text style={styles.supportButtonText}>Support</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.alertsList}>
            {alerts.map((alert) => (
              <TouchableOpacity key={alert.id} style={styles.alertCard}>
                <View style={styles.alertLeft}>
                  <Text style={styles.alertIcon}>{alert.icon}</Text>
                  <View style={styles.alertInfo}>
                    <Text style={styles.alertTitle}>{alert.title}</Text>
                    <Text style={styles.alertDescription}>{alert.description}</Text>
                  </View>
                </View>
                <View style={styles.alertRight}>
                  <Text style={styles.alertDate}>{alert.date}</Text>
                  <Text style={styles.chevron}>›</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Secure Messaging Modal */}
      {showSecureModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowSecureModal(false)}
            >
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
            <View style={styles.secureBadge}>
              <Text style={styles.secureBadgeText}>100% SECURE</Text>
            </View>
            <Text style={styles.secureTitle}>Helps us to protect you</Text>
            <Text style={styles.secureDescription}>
              Book and communicate with User always though handynaija. This way you will be protected against scams and our satisfaction guarantee.
            </Text>
            <TouchableOpacity
              style={styles.gotItButton}
              onPress={() => setShowSecureModal(false)}
            >
              <Text style={styles.gotItButtonText}>Got it</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: fontSize(28),
    fontWeight: 'bold',
    color: '#3FA565',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: padding.xl,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    paddingVertical: padding.md,
    paddingHorizontal: padding.lg,
    marginRight: margin.xl,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#3FA565',
  },
  tabText: {
    fontSize: fontSize(16),
    color: '#999',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#3FA565',
    fontWeight: '600',
  },
  scrollContent: {
    paddingBottom: margin.xxxl,
  },
  chatList: {
    padding: padding.xl,
  },
  chatCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: padding.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  chatLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  avatarContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: margin.md,
  },
  avatar: {
    fontSize: fontSize(24),
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: scale(2),
  },
  chatService: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: scale(4),
  },
  chatMessage: {
    fontSize: fontSize(14),
    color: '#999',
  },
  chatRight: {
    alignItems: 'flex-end',
  },
  chatTime: {
    fontSize: fontSize(12),
    color: '#999',
    marginBottom: margin.xs,
  },
  supportButton: {
    backgroundColor: '#3FA565',
    paddingHorizontal: padding.md,
    paddingVertical: padding.xs,
    borderRadius: borderRadius.md,
    marginTop: margin.xs,
  },
  supportButtonText: {
    fontSize: fontSize(12),
    color: '#fff',
    fontWeight: '600',
  },
  alertsList: {
    padding: padding.xl,
  },
  alertCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: padding.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  alertLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  alertIcon: {
    fontSize: fontSize(24),
    marginRight: margin.md,
  },
  alertInfo: {
    flex: 1,
  },
  alertTitle: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scale(4),
  },
  alertDescription: {
    fontSize: fontSize(14),
    color: '#666',
  },
  alertRight: {
    alignItems: 'flex-end',
  },
  alertDate: {
    fontSize: fontSize(12),
    color: '#999',
    marginBottom: scale(4),
  },
  chevron: {
    fontSize: fontSize(20),
    color: '#999',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    padding: padding.xl,
    margin: padding.xl,
    alignItems: 'center',
    width: '90%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: padding.sm,
  },
  closeIcon: {
    fontSize: fontSize(20),
    color: '#999',
  },
  secureBadge: {
    backgroundColor: '#3FA565',
    paddingHorizontal: padding.lg,
    paddingVertical: padding.sm,
    borderRadius: borderRadius.md,
    marginBottom: margin.lg,
  },
  secureBadgeText: {
    fontSize: fontSize(14),
    fontWeight: 'bold',
    color: '#fff',
  },
  secureTitle: {
    fontSize: fontSize(24),
    fontWeight: 'bold',
    color: '#3FA565',
    textAlign: 'center',
    marginBottom: margin.md,
  },
  secureDescription: {
    fontSize: fontSize(16),
    color: '#666',
    textAlign: 'center',
    lineHeight: fontSize(24),
    marginBottom: margin.xl,
  },
  gotItButton: {
    backgroundColor: '#3FA565',
    paddingHorizontal: padding.xl,
    paddingVertical: padding.md,
    borderRadius: borderRadius.lg,
    width: '100%',
    alignItems: 'center',
  },
  gotItButtonText: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: '#fff',
  },
});
