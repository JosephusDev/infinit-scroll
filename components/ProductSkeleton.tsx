import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = 180;

export const ProductSkeleton = () => {
  return (
    <View style={styles.container}>
      <ContentLoader
        speed={2}
        width={CARD_WIDTH}
        height={CARD_HEIGHT}
        viewBox={`0 0 ${CARD_WIDTH} ${CARD_HEIGHT}`}
        backgroundColor="#dddddd"
        foregroundColor="#c2c2c2"
      >
        <Rect x="0" y="0" rx="8" ry="8" width={CARD_WIDTH} height={120} />
        <Rect x="0" y="130" rx="8" ry="8" width={CARD_WIDTH * 0.6} height="15" />
        <Rect x="0" y="160" rx="8" ry="8" width={CARD_WIDTH * 0.4} height="15" />
      </ContentLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
}); 