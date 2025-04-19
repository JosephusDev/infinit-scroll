import 'react-native-reanimated';
import React from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useFonts as useGoogleFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { fetchProducts } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import { ProductSkeleton } from '../components/ProductSkeleton';
import { Product, ProductsResponse } from '../types/product';

export default function Index() {
  const [fontsLoaded] = useGoogleFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<ProductsResponse>({
    queryKey: ['products'],
    queryFn: ({ pageParam = 0 }) => fetchProducts(pageParam as number),
    getNextPageParam: (lastPage) => {
      if (lastPage.skip + lastPage.limit < lastPage.total) {
        return lastPage.skip + lastPage.limit;
      }
      return undefined;
    },
    initialPageParam: 0,
  });

  const products = data?.pages.flatMap((page) => page.products) || [];

  const renderItem = ({ item }: { item: Product }) => <ProductCard product={item} />;

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        {[...Array(3)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 10,
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
