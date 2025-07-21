import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'

const Banner = () => {

   /* const [helo, setHello] = useState()
    const handleHello = async () => {

        try {
            const res = await axios.get('https://shopkart-mern-backend.onrender.com/hello');
            setHello(res.data)
        }
        catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        handleHello()
    }, []) */


    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <p className='badge bg-primary py-2 px-3 rounded-pill'>Trendy Collection</p>
                            {/* {helo} */}
                            <h1>Discover Stylish <span>Fashion</span> For Every Season</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vestibulum ante ipsum primis in faucibus.</p>

                            <Button className={'btn-buynow'} title={'Shop Now'} />
                            <Button className={'btn-blue ms-2'} title={'View Collection'} />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src="https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-f-9.webp" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner