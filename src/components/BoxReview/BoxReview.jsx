import './BoxReview.css'
import React from 'react'
const moment = require("moment")

function BoxReview(props) {
let dateReview = moment(props.createdAt).format("MMM/YY")
const grade = stars => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
const starsFunction= grade(props.rating)
  return (
    <div className='BoxReview'>
    <div className='container'>
          <p><strong>Review Date:</strong> {dateReview}</p>
      <div className='row1'>
        <div className="container1">
          <h3><strong>{props.title}</strong></h3>
          <img src={props.image} alt={props.title}/>
        </div>
        <table className='table-style'>
          <tr>
            <td><strong>Varietal:</strong> {props.varietal}</td>
            <td><strong>Producer:</strong> {props.producer}</td>
            <td><strong>Rating:</strong> {starsFunction}</td>
          </tr>
          <tr>
            <td><strong>Quality:</strong> {props.quality}</td>
            <td><strong>Origin:</strong> {props.origin}</td>
            <td><strong>Process:</strong> {props.process}</td>
          </tr>
        </table>

      </div>
    </div>
    <div className='row3'>
      <p>See the complete review</p>
    </div>
  </div>
  
  )
}

export default BoxReview