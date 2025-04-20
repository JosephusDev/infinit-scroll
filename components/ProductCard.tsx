import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Product } from '../types/product';
import { Feather } from '@expo/vector-icons';

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
          <Feather name="dollar-sign" size={15} color="#9956F6" /> {product.price.toFixed(2)}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}><Feather name="star" size={15} color="#f39c12" /> {product.rating.toFixed(1)}</Text>
          <Text style={styles.stock}>Stock: {product.stock}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
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
    borderTopRightRadius: 8
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito_800ExtraBold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#9956F6',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    color: 'gray',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#f39c12',
  },
  stock: {
    fontSize: 14,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#666',
  },
}); 