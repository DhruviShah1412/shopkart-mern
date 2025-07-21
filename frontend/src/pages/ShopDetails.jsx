import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Button from '../components/Button'

const ShopDetails = () => {

    const { id } = useParams()
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch(`http://localhost:8000/api/product/${id}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.product);
            })
            .catch(error => console.log(error))
    }, [id])

    console.log(products)

    if (!products) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="productdetail-img">
                            <img src={`http://localhost:8000/uploads/${products.image}`} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="products-details py-5">
                            <h6 className='badge py-2 px-3 bg-primary rounded-pill' style={{textTransform: "uppercase"}}>{products.category}</h6>
                            <h1>{products.name}</h1>
                            <h2><i className="fa-solid fa-indian-rupee-sign"></i> {products.price}</h2>
                            <p>{products.des}</p>
                            <Button title={'Add to Cart'} className={'btn-primary me-2'} />
                            <Button title={'Buy Now'} className={'btn-primary'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopDetails