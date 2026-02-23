import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { navigate } from '../navigation/navigationService';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Row = ({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: string;
  onPress?: () => void;
}) => (
  <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.rowLeft}>
      <View style={styles.iconBox}>
        <Icon name={icon} size={18} color="#3FA565" />
      </View>
      <Text style={styles.rowText}>{title}</Text>
    </View>
    <Icon name="chevron-forward" size={18} color="#999" />
  </TouchableOpacity>
);

export default function MyAccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

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
        <Row title="₦10 for every friend you bring" icon="gift-outline" />

        {/* Account */}
        <Text style={styles.sectionTitle}>Your Account</Text>
        <Row title="Personal details" icon="person-outline" />
        <Row
          title="My Balance"
          icon="wallet-outline"
          onPress={() => navigate('MyBalance')}
        />
        <Row title="Booking Preference" icon="calendar-outline" />
        <Row title="Change password" icon="lock-closed-outline" />
        <Row title="Language" icon="globe-outline" />

        {/* Switch */}
        <Text style={styles.sectionTitle}>
          So you want to offer services?
        </Text>
        <Row title="Switch to Client version" icon="swap-horizontal-outline" />

        {/* Like app */}
        <Text style={styles.sectionTitle}>Do you like the app?</Text>
        <Row title="Will you give us 5 stars?" icon="star-outline" />
        <Row title="Share the HandyNaija App" icon="share-social-outline" />

        {/* Support */}
        <Text style={styles.sectionTitle}>SUPPORT CENTRE</Text>
        <Row title="Help" icon="help-circle-outline" />
        <Row title="How can we improve?" icon="bulb-outline" />
        <Row title="About HandyNaija App" icon="information-circle-outline" />
        <Row title="Privacy policy" icon="shield-checkmark-outline" />
        <Row title="Terms & Conditions" icon="document-text-outline" />
        <Row title="Log out" icon="log-out-outline" />

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

  row: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#E8F5EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  rowText: {
    fontSize: 16,
  },
});
