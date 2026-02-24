import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { goBack, navigate } from '../../navigation/navigationService';
import CustomIcon, { IconNames } from '../../components/Icon';
import { scale, fontSize, padding, margin, borderRadius } from '../../utils/responsive';

const FEW_AREAS_THRESHOLD = 3; // Show modal when <= 3 areas selected

const AREAS = [
  'Ajeromi-Ifelodun',
  'Alimosho',
  'Kosofe',
  'Mushin',
  'Oshodi-Isolo',
  'Ojo',
  'Ikorodu',
  'Surulere',
];

export default function WorkAreasListScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showFewAreasModal, setShowFewAreasModal] = useState(false);

  const toggleArea = (area: string) => {
    if (selected.includes(area)) {
      setSelected(selected.filter((a) => a !== area));
    } else {
      setSelected([...selected, area]);
    }
  };

  const handleContinue = () => {
    if (selected.length === 0) return;
    if (selected.length <= FEW_AREAS_THRESHOLD) {
      setShowFewAreasModal(true);
    } else {
      navigate('WorkSchedule');
    }
  };

  const handleModalContinue = () => {
    setShowFewAreasModal(false);
    navigate('WorkSchedule');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Progress bar - same as map */}
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

      <FlatList
        data={AREAS}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => toggleArea(item)}
            activeOpacity={0.7}>
            <View
              style={[
                styles.checkbox,
                selected.includes(item) && styles.checked,
              ]}>
              {selected.includes(item) && (
                <CustomIcon
                  name={IconNames.checkmark}
                  size={fontSize(14)}
                  color="#fff"
                />
              )}
            </View>
            <Text
              style={[
                styles.areaText,
                !selected.includes(item) && styles.areaTextUnchecked,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.rowSeparator} />}
      />

      <TouchableOpacity
        disabled={selected.length === 0}
        style={[
          styles.continueBtn,
          selected.length === 0 && styles.disabledBtn,
        ]}
        onPress={handleContinue}>
        <Text
          style={[
            styles.continueText,
            selected.length === 0 && styles.continueTextDisabled,
          ]}>
          Continue
        </Text>
      </TouchableOpacity>

      {/* Few selected areas warning modal */}
      <Modal
        visible={showFewAreasModal}
        transparent
        animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowFewAreasModal(false)}>
          <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalHandle} />
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setShowFewAreasModal(false)}>
              <CustomIcon name={IconNames.close} size={fontSize(20)} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Few selected areas</Text>
            <Text style={styles.modalBody}>
              You have selected very few available work areas. Remember that your
              profile will only be visible to clients searching in the areas you
              have marked as available.
            </Text>
            <TouchableOpacity
              style={styles.modalContinueBtn}
              onPress={handleModalContinue}>
              <Text style={styles.modalContinueText}>Continue</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
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
  },
  subtitle: {
    fontSize: fontSize(14),
    color: '#555',
    marginHorizontal: padding.xl,
    marginBottom: margin.lg,
    lineHeight: fontSize(20),
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: padding.xl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: padding.lg,
  },
  rowSeparator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  checkbox: {
    width: scale(22),
    height: scale(22),
    borderRadius: scale(6),
    borderWidth: 2,
    borderColor: '#E0E0E0',
    marginRight: padding.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#3FA565',
    borderColor: '#3FA565',
  },
  areaText: {
    fontSize: fontSize(16),
    color: '#000',
    fontWeight: '500',
  },
  areaTextUnchecked: {
    color: '#999',
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

  // Few areas modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: padding.xl,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: borderRadius.xl,
    padding: padding.xxl,
    paddingTop: padding.lg,
  },
  modalHandle: {
    width: scale(40),
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: margin.lg,
  },
  modalClose: {
    position: 'absolute',
    top: padding.lg,
    right: padding.lg,
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: fontSize(22),
    fontWeight: '700',
    color: '#3FA565',
    marginBottom: margin.lg,
  },
  modalBody: {
    fontSize: fontSize(16),
    color: '#555',
    lineHeight: fontSize(22),
    marginBottom: margin.xxl,
  },
  modalContinueBtn: {
    backgroundColor: '#3FA565',
    padding: padding.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  modalContinueText: {
    color: '#fff',
    fontSize: fontSize(16),
    fontWeight: '600',
  },
});
