import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ProductCardProps {
    image: string;
    price: string;
  }

const ProductCard = ({ image, price }: ProductCardProps) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.price}>${price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, borderRadius: 8, backgroundColor: '#fff' },
  image: { width: 100, height: 100, borderRadius: 8 },
  price: { marginTop: 5, fontWeight: 'bold' },
});

export default ProductCard;
