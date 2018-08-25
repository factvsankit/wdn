import React, { Component } from 'react'

// Import Custom Components
import Logo from '../Components/Header/Logo.js'
import Navigation from '../Components/Header/Navigation'

// Semantic Components
import { Container, Grid } from 'semantic-ui-react'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <Container>
                    <Grid>
                        <Grid.Column width={4} verticalAlign="middle">
                            <Logo />
                        </Grid.Column>
                        <Grid.Column width={12} verticalAlign="middle">
                            <Navigation />
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Header;