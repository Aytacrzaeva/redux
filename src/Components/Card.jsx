
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { add } from '../store/cartSlice'
// import "./Card.css"
// const Cart = () => {
//   const [searchValue, setSearchValue] = useState("")
//   const [data, setData] = useState([])
//   const [category, setCategory] = useState("");
//   const dispatch = useDispatch()

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       let newData = res.data.filter(value => value.title.toLowerCase().includes(searchValue.toLowerCase()))
//       if(category!==""){
//        newData=newData.filter(value=>value.category===category)}
//       setData(newData)
//     })
//   }, [searchValue,category])

  

//   const handleAdd = (item) => {
//     dispatch(add(item))
//   }
//   return (
//     <div className="products">
//       <div className="header">
//       <input className='inp' type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name" />
//       <select className='select'
//         value={category}
//         onChange={(e)=>setCategory(e.target.value)}

//       >
//         <option value="">All</option>
//         <option value="men's clothing">Men</option>
//         <option value="women's clothing">Woman</option>
//         <option value="jewelery">Jewelery</option>
//         <option value="electronics">Electronics</option>
//       </select></div>
//       <></>

//       <div className="cards">{
//         data.map((item) => {
//           return (
//             <div className="card">
//               <div className="card__img">
//                 <img src={item.image} alt="" />
//               </div>
//               <div className="card__text">
//                 <p>{item.title}</p>
//                 <p>{item.price} <b>$</b></p>
//                 <button onClick={() => handleAdd(item)}>Add to cart</button>
//               </div>
//             </div>

//           )
//         })}</div></div>)
// }

// export default Cart



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import "./Card.css"

const Cart = () => {
  const [searchValue, setSearchValue] = useState("")
  const [data, setData] = useState([])
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      let newData = res.data.filter(value => value.title.toLowerCase().includes(searchValue.toLowerCase()))
      if(category !== ""){
        newData = newData.filter(value => value.category === category);
      }
      if(sortOption === "asc"){
        newData = newData.sort((a, b) => a.price - b.price);
      } else if(sortOption === "desc"){
        newData = newData.sort((a, b) => b.price - a.price);
      }
      setData(newData)
    })
  }, [searchValue, category, sortOption])

  const handleAdd = (item) => {
    dispatch(add(item))
  }

  return (
    <div className="products">
      <div className="header">
        <input className='inp' type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search by name" />
        <div className="div">
        <select className='select' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Woman</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <select className='select__price' value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">All</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select></div>
      </div>
      <div className="cards">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card__img">
                <img src={item.image} alt="" />
              </div>
              <div className="card__text">
                <p>{item.title}</p>
                <p>{item.price} <b>$</b></p>
                <button onClick={() => handleAdd(item)}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
