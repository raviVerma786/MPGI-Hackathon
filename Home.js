import React from 'react'
import './index.css'

export default function Home() {
  return (
    <>
    <div className='Ravi'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://kishor-23.github.io/food-donate/img/p1.jpeg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3>You have two hands. One to help youself, the second to help others</h3>
      <a>Donate Now</a>
  </div>
    </div>
    <div className="carousel-item">
      <img src="https://uploads-ssl.webflow.com/6298260103b3e50e06d89056/62b3d2ed7a5f9eb624ce0692_Food%20Waste.jpg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3>You have two hands. One to help youself, the second to help others</h3>
      <a>Donate Now</a>
  </div>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/food-donation-to-help-people-hunger-relief-hands-poor-receive-food-donor-s-share-food-donation-to-help-people-197029357.jpg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3>You have two hands. One to help youself, the second to help others</h3>
      <a>Donate Now</a>
  </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}
