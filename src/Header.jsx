import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    
    <div className="navbar">
        <div className="navbar__left">
            <h2>REDUX STORE</h2>
        </div>
        <div className="navbar__right">
            <ul>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Card</Link></li>
                </ul>
                
            </ul>
        </div>
    </div>
  )
}

export default Header