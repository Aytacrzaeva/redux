import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Card.css"
const Cart = () => {
  const dispatch=useDispatch
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setData(res.data)
      console.log(data)
    })
  },[data])
  
  return (
    <div className="products">
     <div className="cards">{
      data.map((item)=>{
      return(
        <div className="card">
        <div className="card__img">
          <img src={item.image} alt="" />
        </div>
        <div className="card__text">
          <p>{item.title}</p>
          <p>{item.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
      
      )
    })}</div></div>)}
    
export default Cart