import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Card = ({ id, imgSrc, title, price }) => {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <div className="product-image">
                        <div className="product-category">
                            <p>Trending</p>
                        </div>
                        <div className="view-icon">
                            <Link to={`/shop/${id}`}>
                            <i className="fa-solid fa-eye"></i>
                            </Link>
                        </div>
                        <img src={`http://localhost:8000/uploads/${imgSrc}`} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="product-card">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text mb-0 price">Rs.{price}</p>

                            <div className="ratings mb-2">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <Button className={'btn-blue w-100'} title={'Add to Cart'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card