import React from 'react'

export default function Home() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src="/landingpageImg/img1.jpg" className="d-block d-md-none w-100 home-img" alt="plant-img" />
      <img src="/landingpageImg/img4.jpg" className="d-none d-md-block w-100 home-img" alt="plant-img" />
      <div className="carousel-caption">
        <h5 className='fw-bold fs-5 text-success backdrop-filter-blur(5px)'>Welcome to Verdantia</h5>
        <p  className='fw-bold fs-6'>Grow Smarter. Live Greener.</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="/login" className="btn btn-outline-success fw-bold home-btn" style={{backdropFilter:'blur(20px)'}}>LOGIN</a>
                <a href="/signup" className="btn btn-outline-success fw-bold home-btn" style={{backdropFilter:'blur(20px)'}}>SIGN UP</a>
              </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src="/landingpageImg/img2.jpg" className="d-block d-md-none w-100 home-img" alt="plant-img" />
      <img src="/landingpageImg/img5.jpg" className="d-none d-md-block w-100 home-img" alt="plant-img" />
      <div className="carousel-caption">
        <h5 className='fw-bold fs-5 text-success'>Nature at Your Fingertips</h5>
        <p  className='fw-bold fs-6'>Your green space starts with one seed.</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="/login" className="btn btn-outline-success fw-bold home-btn" style={{backdropFilter:'blur(20px)'}}>LOGIN</a>
                <a href="/signup" className="btn btn-outline-success fw-bold home-btn" style={{backdropFilter:'blur(20px)'}}>SIGN UP</a>
              </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src="/landingpageImg/img3.jpg" className="d-block d-md-none w-100 home-img" alt="plant-img" />
      <img src="/landingpageImg/img6.jpg" className="d-none d-md-block w-100 home-img" alt="plant-img" />
      <div className="carousel-caption">
        <h5 className='fw-bold fs-5 text-success'>Join the Community</h5>
        <p  className='fw-bold fs-6'>Share, learn, and thrive together...</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="/login" className="btn btn-outline-success fw-bold home-btn" style={{backdropFilter:'blur(20px)'}}>LOGIN</a>
                <a href="/signup" className="btn btn-outline-success fw-bold home-btn" style={{backdropFilter:'blur(20px)'}}>SIGN UP</a>
              </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
