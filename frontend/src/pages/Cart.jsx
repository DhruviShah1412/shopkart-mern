import React from 'react'
import Button from '../components/Button'

const Cart = () => {
    return (
        <>
            <section className='cart-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-items">
                                <div className="cart-header">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5>Product</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Price</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Quantity</h5>
                                        </div>
                                        <div className="col-lg-2">
                                            <h5>Total</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="product-info d-flex align-items-center ">
                                                <div className="product-image">
                                                    <img src="https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-2.webp" className='img-fluid' alt="" />
                                                </div>
                                                <div className="product-details ms-3">
                                                    <h6 className="product-title">Lorem ipsum dolor sit amet</h6>
                                                    <div className="product-meta">
                                                        <span className="product-color">Color: Black</span>
                                                        <span className="product-size">Size: M</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="price-tag">
                                                <span className="current-price">$89.99</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="quantity-selector">
                                                <button className="quantity-btn decrease">
                                                    <i className="bi bi-dash"></i>
                                                </button>
                                                <input type="number" className="quantity-input" value="1" min="1" max="10" />
                                                <button className="quantity-btn increase">
                                                    <i className="bi bi-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="item-total">
                                                <span>$89.99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-summary">
                                <h4 className="summary-title">Order Summary</h4>
                                <div className="summary-item">
                                    <span className="summary-label">Subtotal</span>
                                    <span className="summary-value">$269.96</span>
                                </div>

                                <div class="summary-item shipping-item">
                                    <span class="summary-label">Shipping</span>
                                    <div class="shipping-options">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="shipping" id="standard" checked />
                                            <label class="form-check-label" for="standard">
                                                Standard Delivery - $4.99
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="shipping" id="express" />
                                            <label class="form-check-label" for="express">
                                                Express Delivery - $12.99
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="shipping" id="free" />
                                            <label class="form-check-label" for="free">
                                                Free Shipping (Orders over $300)
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="summary-item">
                                    <span class="summary-label">Tax</span>
                                    <span class="summary-value">$27.00</span>
                                </div>

                                <div class="summary-item discount">
                                    <span class="summary-label">Discount</span>
                                    <span class="summary-value">-$0.00</span>
                                </div>

                                <div class="summary-total">
                                    <span class="summary-label">Total</span>
                                    <span class="summary-value">$301.95</span>
                                </div>

                                <Button className={'btn-primary mt-4 w-100'} title={'Proceed to Checkout'} />

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart