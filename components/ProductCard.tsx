import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Product } from '../types/product';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.price}>
          ${product.price.toFixed(2)}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {product.rating.toFixed(1)}</Text>
          <Text style={styles.stock}>Stock: {product.stock}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#f39c12',
  },
  stock: {
    fontSize: 14,
    color: '#666',
  },
}); 