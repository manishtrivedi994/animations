import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';

import AppHeader from '../AppHeader/AppHeader';

const ScrollAnimations = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const opacity = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const translateY = scrollY.interpolate({
    inputRange: [0, 250, 251],
    outputRange: [0, 0, 1],
    extrapolate: 'extend',
  });
  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true },
      )}
    >
      <AppHeader title="Scroll Animations" showBackButton={true} />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={[styles.image, { opacity: opacity }]}
        resizeMode="cover"
      />
      <Animated.View
        style={[styles.ph20, { transform: [{ translateY: translateY }] }]}
      >
        <TextInput style={styles.input} />
      </Animated.View>
      {Array.from({ length: 4 })
        .fill({})
        ?.map((_: any, index: number) => (
          <View style={styles.ph20} key={`${index}`}>
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
            <Text>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </Text>
          </View>
        ))}
    </Animated.ScrollView>
  );
};

export default ScrollAnimations;

const styles = StyleSheet.create({
  ph20: { paddingHorizontal: 20 },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  input: { width: '100%', height: 45, borderWidth: 1, marginBottom: 20 },
});
