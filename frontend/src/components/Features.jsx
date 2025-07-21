import React from 'react'

const Features = () => {
    return (
        <>
            <section className='features my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="feature-box">
                                <i className="fa-solid fa-truck"></i>
                                <h5>Free Shipping</h5>
                                <p>Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="feature-box">
                                <i className="fa-solid fa-piggy-bank"></i>
                                <h5>Money Back Guarantee</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aspernatur.</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="feature-box">
                                <i className="fa-regular fa-percent"></i>
                                <h5>Discount Offers</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aspernatur.</p>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="feature-box">
                                <i className="fa-solid fa-headset"></i>
                                <h5>24/7 Support</h5>
                                <p>Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features