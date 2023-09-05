import React from "react";
 import './section.css';

 export default function Section(){

    return(
        <>
      <div className="secti">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 " style={{marginTop:"40rem"}}>
                    <h1 className="get"><span style={{color:"yellow", }}>Get the</span><br/>Delfood App</h1>
                    <p>long established fact that a reader will be distracted by the
                         readable content of a page when looking at its layout. The poin</p>
                         <div className="btn-box">
                            <button type="submit" className="btn ">Search</button>
                          </div>
                </div>
                <div className="col-md-6 col-sm-12">
                <img className="mobile" src="images/mobile.png" alt="" style={{height:"30rem",width:"20rem"}} />
                </div>
            </div>
        </div>

        </div>
        </>
    )
}