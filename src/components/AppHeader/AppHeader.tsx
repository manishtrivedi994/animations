import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppHeader = ({
  title,
  showBackButton = false,
}: {
  title: string;
  showBackButton: boolean;
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <View style={styles.arrowLeft} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  backButton: {
    marginRight: 40,
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowLeft: {
    width: 12,
    height: 12,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    transform: [{ rotate: '45deg' }],
  },
});

export default AppHeader;
