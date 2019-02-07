import React from 'react'
import {CityLogo} from '../ui/icons' 

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                ></CityLogo>
            </div>
            <div className="footer_discl">
                manchester city 2019. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;