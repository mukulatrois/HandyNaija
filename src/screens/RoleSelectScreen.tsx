import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate, goBack } from '../navigation/navigationService';
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';

export default function RoleSelectScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={goBack}
      >
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        What will you do on HandyNaija?
      </Text>
      <Text style={styles.subtitle}>
        This decision is not final, you can later be both a client and a professional from the same account if you wish
      </Text>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigate('CreateNewAccount')}
      >
        <View style={styles.imagePlaceholder}>
          {/* <Image source={require('../assets/client.png')} style={styles.img}/> */}
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.big}>Book a service</Text>
          <Text style={styles.small}>(I'm a Client)</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigate('BecomeProfessionalIntro')}
      >
        <View style={styles.imagePlaceholder}>
          {/* <Image source={require('../assets/pro.png')} style={styles.img}/> */}
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.big}>Offer services</Text>
          <Text style={styles.small}>(I'm a Professional)</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: padding.xl, 
    backgroundColor: '#FFFFFF' 
  },

  backButton: {
    marginBottom: margin.xl,
    width: scale(40),
  },

  backIcon: {
    fontSize: fontSize(24),
    color: '#000',
    fontWeight: 'bold',
  },

  title: {
    fontSize: fontSize(22),
    fontWeight: 'bold',
    marginBottom: margin.md,
    color: '#000',
  },

  subtitle: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: margin.xxl,
    lineHeight: fontSize(20),
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: padding.lg,
    borderRadius: borderRadius.lg,
    marginBottom: margin.lg,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  imagePlaceholder: {
    width: scale(60),
    height: scale(60),
    borderRadius: borderRadius.round,
    backgroundColor: '#F0F0F0',
    marginRight: padding.lg,
  },

  img: {
    width: scale(60),
    height: scale(60),
    borderRadius: borderRadius.round,
    marginRight: padding.lg,
  },

  cardContent: {
    flex: 1,
  },

  big: { 
    fontWeight: 'bold', 
    fontSize: fontSize(16),
    color: '#000',
    marginBottom: scale(4),
  },
  small: { 
    color: '#666', 
    fontSize: fontSize(14),
  },
});
