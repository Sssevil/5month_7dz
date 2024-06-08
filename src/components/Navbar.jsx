import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const activeLinkClass = ({ isActive }) => {
        return isActive ? 'red' : ''
    }

    const { items } = useSelector((state) => state.basket)

    return (
        <nav>
            <ul className="nav">
                <li className="nav_item">
                    <NavLink to="/" className={activeLinkClass}>
                        Products
                    </NavLink>
                </li>
                <li className="nav_item">
                    <NavLink to="/basket" className={activeLinkClass}>
                        basket <div className='basket'>{items.length}</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
