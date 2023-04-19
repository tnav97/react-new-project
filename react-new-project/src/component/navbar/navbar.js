import React from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useAuth } from '../Auth/Auth'

function Navbar() {
const auth =useAuth();
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'uderline',
        }
    }
    return (
        <nav className='primary-nav'>
    <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/products">Products</NavLink>
        <NavLink style={navLinkStyles} to="/user">Users</NavLink>
        <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
       {!auth.user && <NavLink style={navLinkStyles} to="/login">Login</NavLink>
          
    }
      </nav>
    )
}

export default Navbar
