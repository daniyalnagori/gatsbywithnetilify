import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/product"> Product Page</Link>
                </li>
                <li>
                    <Link to="/blog">Blog Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
