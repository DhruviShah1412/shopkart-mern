import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import axios from 'axios'

const AddProduct = () => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  const [des, setDes] = useState()
  const [product, setProduct] = useState()
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/product`);

      setProduct(res.data)
    }
    catch (err) {

    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(
      name,
      price,
      des,
      image
    )
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("des", des);
    formData.append("image", image); // this is the file

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/product/add`, formData)

      alert("Product is Added!!")
      fetchProduct()
    }
    catch (err) {

    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product Name : </label>
        <input type='text' onChange={(e) => setName(e.target.value)} /><br />
        <label>Product Image : </label>
        <input type='file' onChange={(e) => setImage(e.target.files[0])} /><br />
        <label>Product price : </label>
        <input type='number' onChange={(e) => setPrice(e.target.value)} /><br />
        <label>Product Description : </label>
        <input type='text' onChange={(e) => setDes(e.target.value)} /><br />
        <Button title="Submit" className="btn-primary" />
      </form>

      {
        product && product.map((item) => (
          <>
            <h1>
              Product Name : {item.name}
            </h1>
            <h1>
              Product Des : {item.des}
            </h1>
            <h1>
              Product Price : {item.price}
            </h1>
            <img src={`${process.env.REACT_APP_BASE_URL}/uploads/${item.image}`} />


            <Button title="Edit" className="btn-success" />
            <Button title="Delete" className="btn-danger" />
          </>
        ))
      }
    </div>
  )
}

export default AddProduct
