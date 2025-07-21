import React from 'react'

const About = () => {
  return (
    <>

        <div className="container">
        <h1>About</h1>
          <div className="row my-5">
            <div className="col-6">
                <h2 class="about-title">Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
                <p class="about-description">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div> 
            <div className="col-6">
              <img src="https://bootstrapmade.com/content/demo/eStore/assets/img/about/about-wide-1.webp" className='img-fluid' alt="" />
            </div> 
          </div>
        </div>
    </>
  )
}

export default About