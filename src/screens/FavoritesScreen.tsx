import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from '../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';
import { Button, ScreenHeader, EmptyState, Card } from '../components';
import CustomIcon, { IconNames } from '../components/Icon';

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
      <ScreenHeader title="Favorites" titleColor="#3FA565" />

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {isEmpty ? (
          <EmptyState
            title="No favorites"
            image={require('../Images/favourite.png')}
            instruction={
              <Text style={styles.emptyInstruction}>
                To save a professional, tap the heart icon(<CustomIcon name={IconNames.heart} size={fontSize(16)} color="#FF3B30" />)
              </Text>
            }
            actionLabel="Find professional"
            onAction={() => navigate('FindProfessionals')}
          />
        ) : (
          <View style={styles.favoritesList}>
            {favorites.map((category) => (
              <Card
                key={category.id}
                onPress={() => handleCategoryPress(category)}
                style={styles.categoryCard}
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
                <CustomIcon name={IconNames.arrowForward} size={fontSize(20)} color="#999" />
              </Card>
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
  scrollContent: {
    padding: padding.xl,
    paddingBottom: margin.xxxl,
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
