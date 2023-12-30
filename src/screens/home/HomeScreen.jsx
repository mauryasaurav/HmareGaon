import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import HeaderScreen from './HeaderScreen';
import { useDispatch, useSelector } from 'react-redux';
import Category from './Category';
import ProductList from './ProductList';
import { listProducts } from '../../redux/actions/products';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const { product: { products } } = useSelector(state => state);

  useEffect(() => {
    dispatch(
      listProducts({ page: 1, limit: 100 }),
    );
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <HeaderScreen navigation={navigation} />
      <Category />
      <ProductList products={products?.products || []} />
    </SafeAreaView>
  );
};

export default HomeScreen;
