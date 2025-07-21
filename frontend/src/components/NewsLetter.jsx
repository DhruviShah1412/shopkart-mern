import React from 'react'
import Button from './Button'

const NewsLetter = () => {
    return (
        <>
            <section className='newsletter-section'>
                <div className="container">
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-6">
                            <h2>Join Our Newsletter</h2>
                            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                            <form action="">
                                <div className="news d-flex">
                                    <input type="email" className='form-control' placeholder='Enter your email' />
                                    <Button className={'btn-primary subscribe'} title={'Subscribe'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter