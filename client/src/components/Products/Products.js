import React, { useState } from 'react'
import "../../css/Products/Products.css"
import Modal from 'react-modal'
import ProductModal from './ProductModal';

function Products(props) {

  const[product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }

  const closeModal = () => {
    setProduct(false)
  }

  return (
    <div className="products-wrapper"> {props.products.map(product => (
        <div className="product-item" key={product.id}>
          <a href='#' onClick={() => openModal (product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
            <div className="product-desc">
                <p> {product.title}</p>
                <span>${product.price}</span>

            </div>
            <button onClick={() => props.addToCart(product)}> Add to Cart </button>

          </div>
          ))}

        <ProductModal product={product} closeModal={closeModal} />

     </div>
  )
}
export default Products
