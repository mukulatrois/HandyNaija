import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from '../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';
import { Button } from '../components';

interface FavoriteCategory {
  id: string;
  name: string;
  icon: string;
  professionalCount: number;
  professionalAvatars?: string[];
}

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<FavoriteCategory[]>([
    // {
    //   id: '1',
    //   name: 'Handyman',
    //   icon: '🔧',
    //   professionalCount: 1,
    // },
    // {
    //   id: '2',
    //   name: 'Cleaning',
    //   icon: '🧹',
    //   professionalCount: 4,
    //   professionalAvatars: ['👤', '👤', '👤', '👤'],
    // },
  ]);

  const isEmpty = favorites.length === 0;

  const handleCategoryPress = (category: FavoriteCategory) => {
    // Navigate to professional profile or category detail
    navigate('ProfessionalProfile' as any, { categoryId: category.id });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {isEmpty ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No favorites</Text>
            
            <View style={styles.emptyIconContainer}>
              <Image
                source={require('../Images/favourite.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </View>

            <Text style={styles.emptyInstruction}>
              To save a professional, tap the heart icon(❤️)
            </Text>

            <Button
              title="Find professional"
              onPress={() => navigate('Search')}
              variant="primary"
              style={{ marginTop: margin.xxl, width: '100%' }}
            />
          </View>
        ) : (
          <View style={styles.favoritesList}>
            {favorites.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => handleCategoryPress(category)}
              >
                <View style={styles.categoryLeft}>
                  <View style={styles.categoryIconContainer}>
                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                  </View>
                  <View style={styles.categoryInfo}>
                    <Text style={styles.categoryName}>{category.name}</Text>
                    <Text style={styles.professionalCount}>
                      {category.professionalCount} {category.professionalCount === 1 ? 'professional' : 'professionals'}
                    </Text>
                    {category.professionalAvatars && category.professionalAvatars.length > 0 && (
                      <View style={styles.avatarRow}>
                        {category.professionalAvatars.slice(0, 3).map((avatar, index) => (
                          <View key={index} style={styles.avatar}>
                            <Text style={styles.avatarText}>{avatar}</Text>
                          </View>
                        ))}
                        {category.professionalAvatars.length > 3 && (
                          <View style={styles.avatarMore}>
                            <Text style={styles.avatarMoreText}>
                              {category.professionalAvatars.length - 3}+
                            </Text>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                </View>
                <Text style={styles.arrowIcon}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: fontSize(24),
    fontWeight: 'bold',
    color: '#3FA565',
  },
  scrollContent: {
    padding: padding.xl,
    paddingBottom: margin.xxxl,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: margin.xxxl,
    paddingHorizontal: padding.xl,
  },
  emptyTitle: {
    fontSize: fontSize(24),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: margin.xxl,
  },
  emptyIconContainer: {
    width: scale(200),
    height: scale(200),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: margin.xxl,
    position: 'relative',
  },
  emptyIcon: {
    fontSize: fontSize(120),
    position: 'absolute',
  },
  heartIcon: {
    position: 'absolute',
    top: scale(20),
    right: scale(40),
  },
  heartEmoji: {
    fontSize: fontSize(40),
  },
  pencilIcon: {
    fontSize: fontSize(30),
    position: 'absolute',
    bottom: scale(60),
    left: scale(30),
  },
  basketIcon: {
    position: 'absolute',
    bottom: scale(20),
    right: scale(20),
  },
  basketEmoji: {
    fontSize: fontSize(50),
  },
  dollarSigns: {
    fontSize: fontSize(16),
    color: '#3FA565',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyInstruction: {
    fontSize: fontSize(16),
    color: '#666',
    textAlign: 'center',
    lineHeight: fontSize(24),
    marginBottom: margin.xl,
  },
  favoritesList: {
    gap: margin.md,
  },
  categoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    padding: padding.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIconContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: borderRadius.md,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: margin.md,
  },
  categoryIcon: {
    fontSize: fontSize(24),
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: fontSize(18),
    fontWeight: '600',
    color: '#000',
    marginBottom: margin.xs,
  },
  professionalCount: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: margin.xs,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: margin.xs,
  },
  avatar: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(-8),
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarText: {
    fontSize: fontSize(12),
  },
  avatarMore: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    backgroundColor: '#3FA565',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(4),
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarMoreText: {
    fontSize: fontSize(10),
    color: '#fff',
    fontWeight: 'bold',
  },
  arrowIcon: {
    fontSize: fontSize(24),
    color: '#999',
    marginLeft: margin.md,
  },
});
