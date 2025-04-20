import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ProductCardProps {
    title: string;
    userId: string;
  }

const ProductCard = ({ title, userId }: ProductCardProps) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.userId}>{userId}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, borderRadius: 8, backgroundColor: 'gray', },
  title: { width: 100, height: 100, borderRadius: 8 },
  userId: { marginTop: 5, fontWeight: 'bold' },
});

export default ProductCard;
