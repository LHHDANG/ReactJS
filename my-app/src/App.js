import logo from './logo.svg';
import React from 'react';
import './App.css';
import PricingPage from './components/PricingPage';
import ItemList from './components/ItemList';
import ProductList from './components/ProductList';
import './css/styles.css';

// export default function MyApp() {
//   return (
//     <div className='App'>
//       {/* <ItemList /> */}
//       {/* <ProductList/> */}
//       {/* <PricingPage/> */}
//     </div>
//   )
// }

export default function Counter() {
  let like = 10;
  return (
      <div>
          {/* camelcase */}
          <button
          onClick={ () => {
              like++;
              console.log(like);
          }}
      >
          Like
      </button>
      <h1>{like}</h1>
      <h1>{like}</h1>
      <h1>{like}</h1>
      </div>
  );
}
