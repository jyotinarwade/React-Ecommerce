import React from "react";
import './navbar.css';




export default function Navbar(){
    return(
        <>
        {/* <!-- slider section --> */}
      
     <section className="slider_section  ">
      
      <div className="container "  style={{color:"white"}}>
        <div className="row">
          <div className="col-lg-10 col-md-6 mx-auto">
            <div className="detail-box">
              <h1>
                Discover Restuarant And Food
              </h1>
              <p>
                when looking at its layout. The point of using Lorem Ipsum
              </p>
            </div>
            <div className="find_container ">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <form>
                      <div className="form-row d-flex ">
                        <div className="form-group col-lg-5"  style={{marginLeft:"-10rem"}}>
                          <input type="text" className="form-control" id="inputHotel" placeholder="Restaurant Name" />
                        </div>
                        <div className="form-group col-lg-3 "  style={{marginLeft:"1rem"}}  >
                          <input type="text" className="form-control" id="inputLocation" placeholder="All Locations" />
                         
                        </div>
                        <div className="form-group col-lg-3 col-md-3">
                          <div className="btn-box">
                            <button type="submit" className="btn ">Search</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    </div>
                    <div className="col-6">
                        <img src="images/sandwich.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
         
      
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fill-opacity="1" d="M0,64L120,96C240,128,480,192,720,186.7C960,181,1200,107,1320,69.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg> */}
      {/* <div className="slider_container">
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img1.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img2.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img3.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img4.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img1.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img2.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img3.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="images/slider-img4.png" alt="" />
          </div>
        </div> */}
        
    // </section>
     
    {/* <!-- end slider section --> */}
  {/* </div> */}

        </>
    )
}