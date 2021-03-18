import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
