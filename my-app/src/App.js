import logo from './logo.svg';
import React from 'react';
import './App.css';
import PricingPage from './components/PricingPage';
import ItemList from './components/ItemList';
import ProductList from './components/ProductList';
import './css/styles.css';
import Student from '../../hai-dang/src/Le Hoang Hai Dang/student';

export default function MyApp() {
  return (
    <div className='App'>
      {/* <ItemList /> */}
      {/* <ProductList/> */}
      {/* <PricingPage/> */}
      <Student />
    </div>
  )
}
