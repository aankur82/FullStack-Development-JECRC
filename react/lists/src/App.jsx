import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import { products } from './Data'

function App() {
  //curly breckets in jsx- by using curly brackets we can use 
  //js inside jsx
  //do not use if-else/ loop inside brackets
  let name='pawan kumar'

  return (
  <>
    {/* <p>my name is {name}</p> */}
    <Product name="abcd"/>
    <Product name={products[0].title} price={products[0].price} />
    <Product name={products[1].title} price={products[1].price} />
    {products.map((val,index,arr)=>{
      // return <p>{val.title}- {val.price}</p>
      return <Product name={val.title} price={val.price} />

    })}

  </>)
  // return ( <React.Fragment>


  // </React.Fragment>
  //   )
}

export default App
