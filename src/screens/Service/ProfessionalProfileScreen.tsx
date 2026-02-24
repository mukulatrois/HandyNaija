import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, RouteProp } from '@react-navigation/native';
import { goBack } from '../../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';
import { Button } from '../../components';
import CustomIcon, { IconNames } from '../../components/Icon';

type ProfessionalProfileRouteProp = RouteProp<{ params: { categoryId?: string } }, 'params'>;

export default function ProfessionalProfileScreen() {
  const route = useRoute<ProfessionalProfileRouteProp>();
  const [isFavorited, setIsFavorited] = useState(true);

  const galleryImages = [
    { id: 1, emoji: '🔨' },
    { id: 2, emoji: '⚡' },
    { id: 3, emoji: '🪚' },
    { id: 4, emoji: '🔧' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <CustomIcon name={IconNames.arrowBack} size={fontSize(20)} color="#000" />
          <Text style={styles.backText}>Profile</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Handyman</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Professional Card */}
        <View style={styles.profileCard}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => setIsFavorited(!isFavorited)}
          >
            <CustomIcon 
              name={isFavorited ? IconNames.heart : IconNames.heartOutline} 
              size={fontSize(32)} 
              color={isFavorited ? '#FF3B30' : '#999'} 
            />
          </TouchableOpacity>

          <View style={styles.profileHeader}>
            <View style={styles.profileImageContainer}>
              <View style={styles.profileImage}>
                <CustomIcon name="person" size={fontSize(40)} color="#999" />
              </View>
              <View style={styles.onlineIndicator} />
            </View>

            <View style={styles.profileInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.profileName}>Nicolas bond</Text>
                <View style={styles.statusBadge}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>Handyman</Text>
                </View>
              </View>

              <Text style={styles.price}>₦20.50 Per hour</Text>

              <View style={styles.statsRow}>
                <Text style={styles.statText}>656 Services</Text>
                <View style={styles.ratingContainer}>
                  <CustomIcon name={IconNames.star} size={fontSize(14)} color="#FFD700" />
                  <Text style={styles.ratingText}> 4.8 | 4,323 Reviews</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Info Buttons */}
          <View style={styles.infoButtons}>
            <TouchableOpacity style={styles.infoButton}>
              <CustomIcon name={IconNames.business} size={fontSize(16)} color="#666" />
              <Text style={styles.infoText}>Business Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButton}>
              <CustomIcon name={IconNames.refresh} size={fontSize(16)} color="#666" />
              <Text style={styles.infoText}>7 have repeated</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButton}>
              <CustomIcon name={IconNames.calendar} size={fontSize(16)} color="#666" />
              <Text style={styles.infoText}>Updated schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.infoButton}>
              <CustomIcon name={IconNames.cash} size={fontSize(16)} color="#666" />
              <Text style={styles.infoText}>Minimum charge ₦30</Text>
            </TouchableOpacity>
          </View>

          {/* Image Gallery */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
            {galleryImages.map((image) => (
              <View key={image.id} style={styles.galleryImage}>
                <Text style={styles.galleryEmoji}>{image.emoji}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Book Now"
            onPress={() => {}}
            variant="primary"
            style={{ flex: 1, marginRight: margin.md }}
          />
          <Button
            title="Message"
            onPress={() => {}}
            variant="secondary"
            style={{ flex: 1 }}
          />
        </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: padding.xl,
    paddingVertical: padding.md,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: fontSize(16),
    color: '#000',
  },
  headerTitle: {
    fontSize: fontSize(18),
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: scale(80),
  },
  scrollContent: {
    padding: padding.xl,
    paddingBottom: margin.xxxl,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    padding: padding.xl,
    marginBottom: margin.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
  },
  favoriteButton: {
    position: 'absolute',
    top: padding.lg,
    right: padding.lg,
    zIndex: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: margin.lg,
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: margin.md,
  },
  profileImage: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(40),
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: scale(2),
    right: scale(2),
    width: scale(18),
    height: scale(18),
    borderRadius: scale(9),
    backgroundColor: '#3FA565',
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: margin.xs,
  },
  profileName: {
    fontSize: fontSize(20),
    fontWeight: 'bold',
    color: '#000',
    marginRight: margin.sm,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: padding.sm,
    paddingVertical: scale(2),
    borderRadius: borderRadius.sm,
  },
  statusDot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: '#3FA565',
    marginRight: scale(4),
  },
  statusText: {
    fontSize: fontSize(12),
    color: '#3FA565',
    fontWeight: '600',
  },
  price: {
    fontSize: fontSize(18),
    fontWeight: 'bold',
    color: '#3FA565',
    marginBottom: margin.sm,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: margin.md,
  },
  statText: {
    fontSize: fontSize(14),
    color: '#666',
  },
  ratingText: {
    fontSize: fontSize(14),
    color: '#666',
  },
  infoButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: margin.md,
    marginBottom: margin.lg,
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: padding.md,
    paddingVertical: padding.sm,
    borderRadius: borderRadius.md,
    minWidth: scale(120),
  },
  infoText: {
    fontSize: fontSize(12),
    color: '#666',
  },
  gallery: {
    marginTop: margin.md,
  },
  galleryImage: {
    width: scale(100),
    height: scale(100),
    borderRadius: borderRadius.md,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: margin.md,
  },
  galleryEmoji: {
    fontSize: fontSize(40),
  },
  actionButtons: {
    flexDirection: 'row',
    gap: margin.md,
  },
});
