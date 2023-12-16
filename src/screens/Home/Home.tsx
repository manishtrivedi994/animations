import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useTheme } from '../../hooks';
import { PrimaryButton } from '@/components';
import { ApplicationScreenProps } from 'types/navigation';

const Home = ({ navigation }: ApplicationScreenProps) => {
  const { Layout } = useTheme();

  const _onPress = () => {
    navigation.navigate({ name: 'ScrollAnimations', params: undefined });
  };

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[Layout.fill, styles.container]}
    >
      <PrimaryButton title={'Scroll Animations'} onPress={_onPress} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
