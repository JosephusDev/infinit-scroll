import 'react-native-reanimated';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import { ProductSkeleton } from '../components/ProductSkeleton';
import { Product, ProductsResponse } from '../types/product';


export default function Index() {

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
    <View style={styles.container}>
          <ProductSkeleton />
      </View>
    );
  };

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

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
        showsVerticalScrollIndicator={false}
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
