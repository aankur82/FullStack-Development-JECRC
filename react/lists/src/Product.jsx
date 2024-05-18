import React from 'react'
import {products} from './Data'

function Product(props) {
    let {name,price}=props
    // console.log(products)
    // console.log(props)
  return (
    <div>
        {/* <p>{products[0].title}</p> */}
        {/* <p>{props.name}</p> */}
        <p>{name}-{price}</p>
    </div>
  )
}

export default Product