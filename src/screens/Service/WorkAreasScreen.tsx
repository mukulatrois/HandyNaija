import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/navigationService';
import CustomIcon, { IconNames } from '../../components/Icon';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';

export default function WorkAreasScreen() {
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

      <Text style={styles.title}>Work areas</Text>
      <Text style={styles.subtitle}>
        Select the areas you can travel to in order to offer your services.
        Remember that you cannot charge an extra fee for travel
      </Text>

      {/* Map with List toggle - List opens separate screen */}
      <View style={styles.mapWrapper}>
        <MapView
          provider="google"
          style={styles.map}
          initialRegion={{
            latitude: 6.5244,
            longitude: 3.3792,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
          <Marker coordinate={{ latitude: 6.52, longitude: 3.37 }} />
          <Marker coordinate={{ latitude: 6.53, longitude: 3.38 }} />
          <Marker coordinate={{ latitude: 6.525, longitude: 3.39 }} />
        </MapView>
        <View style={styles.toggleOverlay}>
          <View style={styles.toggle}>
            <TouchableOpacity style={[styles.toggleBtn, styles.activeBtn]}>
              <Text style={styles.activeText}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => navigate('WorkAreasList')}>
              <Text style={styles.toggleText}>List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Continue Button - disabled on map; use List to select areas */}
      <TouchableOpacity
        disabled
        style={[styles.continueBtn, styles.disabledBtn]}
      >
        <Text style={[styles.continueText, styles.continueTextDisabled]}>
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
    width: '18%',
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSize(14),
    color: '#555',
    marginHorizontal: padding.xl,
    marginBottom: margin.lg,
    lineHeight: fontSize(20),
  },
  mapWrapper: {
    flex: 1,
    marginHorizontal: padding.xl,
    borderRadius: borderRadius.lg,
  },
  map: {
    flex: 1,
    borderRadius: borderRadius.lg,
  },
  toggleOverlay: {
    position: 'absolute',
    bottom: margin.lg,
    left: padding.xl,
    right: padding.xl,
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    padding: 4,
    borderRadius: 25,
    marginHorizontal: padding.xl,
    marginBottom: margin.md,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: padding.md,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: '#3FA565',
  },
  toggleText: {
    fontSize: fontSize(14),
    color: '#555',
  },
  activeText: {
    color: '#fff',
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
