import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingsRow } from '../components';

export default function MyAccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

        {/* Profile */}
        <View style={styles.profile}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Paschaloliver</Text>
            <Text style={styles.profileLink}>View Profile</Text>
          </View>
        </View>

        {/* Share */}
        <Text style={styles.sectionTitle}>SHARE AND EARN MONEY!</Text>
        <SettingsRow title="₦10 for every friend you bring" icon="gift-outline" />

        {/* Account */}
        <Text style={styles.sectionTitle}>Your Account</Text>
        <SettingsRow title="Personal details" icon="person-outline" />
        <SettingsRow title="My Balance" icon="wallet-outline" />
        <SettingsRow title="Booking Preference" icon="calendar-outline" />
        <SettingsRow title="Change password" icon="lock-closed-outline" />
        <SettingsRow title="Language" icon="globe-outline" />

        {/* Switch */}
        <Text style={styles.sectionTitle}>
          So you want to offer services?
        </Text>
        <SettingsRow title="Switch to Client version" icon="swap-horizontal-outline" />

        {/* Like app */}
        <Text style={styles.sectionTitle}>Do you like the app?</Text>
        <SettingsRow title="Will you give us 5 stars?" icon="star-outline" />
        <SettingsRow title="Share the HandyNaija App" icon="share-social-outline" />

        {/* Support */}
        <Text style={styles.sectionTitle}>SUPPORT CENTRE</Text>
        <SettingsRow title="Help" icon="help-circle-outline" />
        <SettingsRow title="How can we improve?" icon="bulb-outline" />
        <SettingsRow title="About HandyNaija App" icon="information-circle-outline" />
        <SettingsRow title="Privacy policy" icon="shield-checkmark-outline" />
        <SettingsRow title="Terms & Conditions" icon="document-text-outline" />
        <SettingsRow title="Log out" icon="log-out-outline" />

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },

  profileLink: {
    color: '#3FA565',
    marginTop: 4,
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 6,
    marginHorizontal: 16,
    fontSize: 12,
    color: '#777',
    fontWeight: '600',
  },
});
