import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container">

        <div className="row">
          <div className="col-6">
            <div className="contact-box">
              <div className="icon-box">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h5>Address</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-3">
            <div className="contact-box">
              <div className="icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h5>Call Us</h5>
              <p>9999999999</p>
            </div>
          </div>
          <div className="col-3">
            <div className="contact-box">
              <div className="icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h5>Email Us</h5>
              <p>test@gmail.com</p>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-6">
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.9003128625436!2d72.43715247482542!3d23.0641160147775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9c1732514939%3A0xefe384ba0a79209c!2sIndus%20University!5e0!3m2!1sen!2sin!4v1751530134941!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-6">
            <div className="content">
              <h1>Contact Us</h1>



              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact