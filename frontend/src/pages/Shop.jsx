import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Shop = () => {

  const [products, setProducts] = useState([])



  const fetchProduct = async () => {
    try {
      const res = await axios.get("https://shopkart-mern-backend.onrender.com/api/product");

      setProducts(res.data)
    }
    catch (err) {
      alert(err)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])


  return (
    <>
      <div className="container">
        <div className="row gy-3">

          {
            products &&
            products?.map((product) => {
              return (
                <>
                  <Card  id={product._id} imgSrc={product.image} title={product.name} price={product.price}  />
                </>
              )
            })
          }



          {/* <Card imgSrc={'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-1-variant.webp'} title={'Woman Bag'} desc={'This is women bag'} />
          <Card imgSrc={'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-4-variant.webp'} title={'Men Hoodie'} desc={'This is Men Hoodie'} />

          <Card imgSrc={'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-4-variant.webp'} title={'Men Hoodie'} desc={'This is Men Hoodie'} />

          <Card imgSrc={'https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-4-variant.webp'} title={'Men Hoodie'} desc={'This is Men Hoodie'} /> */}
        </div>
      </div>
    </>
  )
}

export default Shop