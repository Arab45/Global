import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useProductContext } from '../context/productContext';
import ProductCard from '../component/productCards';

const ProductScreen = () => {
  const { data, isLoading, error } = useProductContext();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading products.</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ProductCard image={item.image} price={item.price} />}
    />
  );
};

export default ProductScreen;
