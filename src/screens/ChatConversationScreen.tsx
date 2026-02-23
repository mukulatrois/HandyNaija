import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { goBack } from '../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';

type ChatConversationRouteProp = RouteProp<{ params: { chatId?: string } }, 'params'>;

interface Message {
  id: string;
  text?: string;
  image?: string;
  sender: 'user' | 'other';
  time: string;
}

export default function ChatConversationScreen() {
  const route = useRoute<ChatConversationRouteProp>();
  const [message, setMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);

  const [messages] = useState<Message[]>([
    { id: '1', image: 'https://via.placeholder.com/300x200', sender: 'other', time: '12:44' },
    { id: '2', text: 'Need a service', sender: 'other', time: '12:44' },
    { id: '3', text: 'Need a service', sender: 'user', time: '12:44' },
    { id: '4', text: 'Need a service', sender: 'user', time: '12:44' },
    { id: '5', text: 'Need a service', sender: 'user', time: '12:44' },
  ]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="chevron-back" size={scale(24)} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>👤</Text>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Yeroxon</Text>
            <Text style={styles.headerService}>Cleaning</Text>
          </View>
        </View>
        <View style={styles.menuButton} />
      </View>

      {/* Service Banner */}
      <View style={styles.serviceBanner}>
        <Text style={styles.serviceBannerText}>Service completed</Text>
        <Text style={styles.serviceBannerTime}>Thursday 09/10 - 12:25 - 15:15</Text>
        <View style={styles.serviceButtons}>
          <TouchableOpacity style={styles.serviceButton}>
            <Icon name="home-outline" size={scale(16)} color="#666" />
            <Text style={styles.serviceButtonText}>Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceButton}>
            <Icon name="share-outline" size={scale(16)} color="#666" />
            <Text style={styles.serviceButtonText}>Share profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Messages Area */}
      <ScrollView 
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              msg.image ? styles.imageMessageContainer : styles.messageBubble,
              msg.sender === 'user' ? styles.userMessage : styles.otherMessage,
            ]}
          >
            {msg.image ? (
              <>
                <Image source={{ uri: msg.image }} style={styles.messageImage} />
                <Text style={styles.messageTime}>{msg.time}</Text>
              </>
            ) : (
              <>
                <Text
                  style={[
                    styles.messageText,
                    msg.sender === 'user' && styles.userMessageText,
                  ]}
                >
                  {msg.text}
                </Text>
                <Text style={styles.messageTime}>{msg.time}</Text>
              </>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Attachment Popup */}
      {showAttachments && (
        <View style={styles.attachmentPopupContainer}>
          <View style={styles.attachmentOptions}>
            <TouchableOpacity style={styles.attachmentOption}>
              <Icon name="camera-outline" size={scale(24)} color="#666" />
              <Text style={styles.attachmentText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachmentOption}>
              <Icon name="images-outline" size={scale(24)} color="#666" />
              <Text style={styles.attachmentText}>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.attachmentOption}>
              <Icon name="document-outline" size={scale(24)} color="#666" />
              <Text style={styles.attachmentText}>Files</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.attachButton}
          onPress={() => setShowAttachments(!showAttachments)}
        >
          <Icon name="add" size={scale(24)} color="#FFFFFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Write a message"
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="paper-plane" size={scale(18)} color="#FFFFFF" />
        </TouchableOpacity>
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
    paddingVertical: padding.md,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: padding.sm,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: margin.md,
  },
  headerAvatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: margin.sm,
  },
  headerAvatarText: {
    fontSize: fontSize(20),
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: '#3FA565',
  },
  headerService: {
    fontSize: fontSize(14),
    color: '#666',
  },
  menuButton: {
    width: scale(40),
  },
  serviceBanner: {
    backgroundColor: '#F5F5F5',
    padding: padding.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  serviceBannerText: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: margin.xs,
  },
  serviceBannerTime: {
    fontSize: fontSize(16),
    fontWeight: 'bold',
    color: '#3FA565',
    marginBottom: margin.md,
  },
  serviceButtons: {
    flexDirection: 'row',
    gap: margin.sm,
    marginTop: margin.sm,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: padding.md,
    paddingVertical: padding.sm,
    borderRadius: borderRadius.md,
    gap: margin.xs,
  },
  serviceButtonText: {
    fontSize: fontSize(12),
    color: '#666',
    fontWeight: '600',
  },
  messagesContainer: {
    padding: padding.xl,
    paddingBottom: margin.xl,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: padding.md,
    borderRadius: borderRadius.md,
    marginBottom: margin.sm,
  },
  imageMessageContainer: {
    maxWidth: '75%',
    borderRadius: borderRadius.md,
    marginBottom: margin.sm,
    overflow: 'hidden',
  },
  messageImage: {
    width: '100%',
    height: scale(200),
    borderRadius: borderRadius.md,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3FA565',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',
  },
  messageText: {
    fontSize: fontSize(14),
    color: '#000',
    marginBottom: scale(4),
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  messageTime: {
    fontSize: fontSize(10),
    color: '#999',
    alignSelf: 'flex-end',
    marginTop: scale(2),
  },
  attachmentPopupContainer: {
    position: 'absolute',
    bottom: scale(80),
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  attachmentOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: borderRadius.lg,
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
    gap: margin.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  attachmentOption: {
    alignItems: 'center',
    minWidth: scale(60),
  },
  attachmentText: {
    fontSize: fontSize(12),
    color: '#666',
    marginTop: margin.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: padding.md,
    paddingVertical: padding.sm,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  attachButton: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: '#3FA565',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: margin.sm,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: borderRadius.lg,
    paddingHorizontal: padding.md,
    paddingVertical: padding.sm,
    fontSize: fontSize(14),
    maxHeight: scale(100),
  },
  sendButton: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: '#3FA565',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: margin.sm,
  },
});
