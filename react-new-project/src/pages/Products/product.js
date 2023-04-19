import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
    return (     <>
        <div><input type='search' placeholder='Search Products' /></div>
        <nav >
        <Link to="new">New Products</Link>
        <Link  to="feature">Feature Products</Link>
    </nav>
    <Outlet></Outlet>
        </>
        
    )
}

export default Product
