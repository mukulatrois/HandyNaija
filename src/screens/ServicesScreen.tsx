import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, fontSize, padding, margin, borderRadius } from '../utils/responsive';
import { Button } from '../components';

interface Service {
  id: string;
  title: string;
  professional: string;
  date: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  price: string;
}

export default function ServicesScreen() {
  const [services] = useState<Service[]>([
    {
      id: '1',
      title: 'Plumbing Repair',
      professional: 'John Doe',
      date: 'Feb 15, 2026',
      status: 'in-progress',
      price: '₦5,000',
    },
    {
      id: '2',
      title: 'House Cleaning',
      professional: 'Jane Smith',
      date: 'Feb 14, 2026',
      status: 'completed',
      price: '₦3,500',
    },
    {
      id: '3',
      title: 'Electrical Work',
      professional: 'Mike Johnson',
      date: 'Feb 16, 2026',
      status: 'pending',
      price: '₦7,000',
    },
  ]);

  const getStatusColor = (status: Service['status']) => {
    switch (status) {
      case 'pending':
        return '#FFA500';
      case 'in-progress':
        return '#4285F4';
      case 'completed':
        return '#3FA565';
      case 'cancelled':
        return '#FF3B30';
      default:
        return '#666';
    }
  };

  const getStatusText = (status: Service['status']) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Services</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {services.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>📋</Text>
            <Text style={styles.emptyText}>No services yet</Text>
            <Text style={styles.emptySubtext}>Book a service to get started</Text>
            <Button
              title="Find Services"
              onPress={() => {}}
              variant="primary"
              style={{ marginTop: margin.xl }}
            />
          </View>
        ) : (
          <View style={styles.servicesList}>
            {services.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceCard}>
                <View style={styles.serviceHeader}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(service.status) + '20' }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(service.status) }]}>
                      {getStatusText(service.status)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.professionalName}>👤 {service.professional}</Text>
                <Text style={styles.serviceDate}>📅 {service.date}</Text>
                <View style={styles.serviceFooter}>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                  <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
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
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingHorizontal: padding.xl,
    paddingVertical: padding.lg,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: fontSize(24),
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContent: {
    padding: padding.xl,
    paddingBottom: margin.xxxl,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: margin.xxxl,
  },
  emptyEmoji: {
    fontSize: fontSize(64),
    marginBottom: margin.lg,
  },
  emptyText: {
    fontSize: fontSize(20),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: margin.sm,
  },
  emptySubtext: {
    fontSize: fontSize(14),
    color: '#666',
    textAlign: 'center',
  },
  servicesList: {
    gap: margin.md,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.lg,
    padding: padding.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: margin.md,
  },
  serviceTitle: {
    fontSize: fontSize(18),
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: padding.md,
    paddingVertical: padding.xs,
    borderRadius: borderRadius.md,
  },
  statusText: {
    fontSize: fontSize(12),
    fontWeight: '600',
  },
  professionalName: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: margin.xs,
  },
  serviceDate: {
    fontSize: fontSize(14),
    color: '#666',
    marginBottom: margin.md,
  },
  serviceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  servicePrice: {
    fontSize: fontSize(18),
    fontWeight: 'bold',
    color: '#3FA565',
  },
  viewButton: {
    paddingHorizontal: padding.md,
    paddingVertical: padding.xs,
  },
  viewButtonText: {
    fontSize: fontSize(14),
    color: '#3FA565',
    fontWeight: '600',
  },
});
