import React, { Component } from 'react'

// Include Semantic Components
import { Container, Grid } from 'semantic-ui-react'

class BreadcrumbBar extends Component{
    render(){
        return(
            <div className="section breadcrumbBar relative">
                <div className="absolute cover">
                    <div className="mytable">
                        <div className="table-cell va-bottom">
                            <Container>
                                <Grid>
                                    <Grid.Column width={8} verticalAlign="bottom">
                                        <div className="bb-left">
                                            <div className="title">
                                                <h2>Sign Up</h2>
                                                <small>Fill Up the Form to Enrolled Today.</small>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={8} verticalAlign="bottom">
                                        <div className="bb-right">
                                            <ul className="floated-list clearfix">
                                                <li><a href="/">Home</a></li>
                                                <li>Sign Up</li>
                                            </ul>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreadcrumbBar;