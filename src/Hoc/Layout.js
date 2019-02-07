import React from 'react'
import Header from '../components/Header_footer/Header'

const Layout = (props) => {
    return (
        <div>
            <Header> </Header>
            {props.children}
            Footer
         </div>
    )
}

export default Layout;