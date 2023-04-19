import React from 'react'
import './index.css'

export default function Movies(props) {
  return (
    <>
    <div className="d-flex justify-content-center my-3 mx-3">
      <div className="card-body" style={{width: "80%"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body card text-center">
          <h5 className="card-title ">{props.name}</h5>
          <a href={props.address} target= "_blank" rel = "noreferrer" className="btn btn-primary">Visit Now</a>
        </div>
      </div>
      </div>
    </>
  )
}
