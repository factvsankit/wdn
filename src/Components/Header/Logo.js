import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Include Assets
import LogoImage from '../../assets/images/wdn-logo.png'

class Logo extends Component{
    render(){
        return(
            <div className="logo">
                <Link to="/">
                    <img src={ LogoImage } alt="Worker's Directory Nepal" />
                </Link>
            </div>
        )
    }
}

export default Logo;