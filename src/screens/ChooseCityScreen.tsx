import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../navigation/navigationService';
import CustomIcon, { IconNames } from '../components/Icon';
import { scale, fontSize, padding, margin } from '../utils/responsive';

const NIGERIAN_CITIES = [
  'Ilorin',
  'Abuja',
  'Ogbomosho',
  'Ikorodu',
  'Maiduguri',
  'Bauchi',
  'Akure',
  'Abeokuta',
  'Sokoto',
  'Owerri',
  'Calabar',
  'Lagos',
  'Kano',
  'Port Harcourt',
  'Benin City',
  'Kaduna',
  'Warri',
  'Enugu',
  'Jos',
  'Ibadan',
];

export default function ChooseCityScreen() {
  const handleSelectCity = (city: string) => {
    navigate('WorkAreas');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Progress bar */}
      <View style={styles.progressBg}>
        <View style={styles.progressFill} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <CustomIcon name={IconNames.arrowBack} size={fontSize(20)} color="#3FA565" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Choose city</Text>
        <Text style={styles.subtitle}>
          In which city do you want to offer your services?
        </Text>

        <FlatList
          data={NIGERIAN_CITIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.cityRow}
              onPress={() => handleSelectCity(item)}
              activeOpacity={0.7}
            >
              <Text style={styles.cityText}>{item}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  progressBg: {
    height: 6,
    backgroundColor: '#E0E0E0',
    marginHorizontal: padding.xl,
    marginTop: padding.md,
    borderRadius: 10,
  },
  progressFill: {
    width: '28%',
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
  content: {
    flex: 1,
    padding: padding.xl,
    paddingTop: 0,
  },
  title: {
    fontSize: fontSize(28),
    fontWeight: '700',
    color: '#3FA565',
    marginBottom: margin.md,
  },
  subtitle: {
    fontSize: fontSize(16),
    color: '#555',
    marginBottom: margin.xxl,
    lineHeight: fontSize(22),
  },
  cityRow: {
    paddingVertical: padding.lg,
  },
  cityText: {
    fontSize: fontSize(16),
    color: '#333',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
});
