import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Include Assets
import LogoImage from '../../assets/images/wdn-logo.png'

class Logo extends Component{
    render(){
        return(
            <div className="logo">
                {/* <Link to="/">
                    <img src={ LogoImage } alt="Worker's Directory Nepal" />
                </Link> */}
                <h1 className="ff-serif theme-ffffff" style={{
                    marginTop: '6px',
                    marginBottom: '0',
                    fontWeight: 'bold'
                }}>WDN</h1> 
                <span className="theme-eceff6">Worker's Directory Nepal</span>
            </div>
        )
    }
}

export default Logo;