import React, { Component } from 'react'
import { Link} from 'react-router-dom'

// Semantic Components
import { Icon } from 'semantic-ui-react'

class Navigation extends Component{
    render(){
        return(
            <div className="myNav clearfix">
                <ul className="floated-list clearfix">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="search-btn"><Link to="/search"><Icon name='search' /> Search Candidates</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;