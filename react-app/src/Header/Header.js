import React from 'react'

const Header = () => {
    return (
        <>
        <header>
            <h1 className='logo'>
                {/* Change this to image when available */}
                RSPSNetwork
            </h1>
            <nav>
                <ul className='nav_links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>RSPS LIST</a></li>
                    <li><a href='/'>Login</a></li>
                    <li><a href='/'>Register</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
