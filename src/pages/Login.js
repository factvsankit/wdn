import React, { Component } from 'react'

// Include Custom Components
import BreadcrumbBar from '../partials/BreadcrumbBar'

// Include Semantic Components
import { Container, Grid, Form, Button } from 'semantic-ui-react'


class Signup extends Component{

    state = {
        username:'',
        password:''
    }      

    handleChange = (e, { name, value }) => {
        this.setState({ 
            [name]: value 
        })
    }

    render(){

        const { username, password } = this.state;

        return(
            <section className="page page-signup">
                <BreadcrumbBar />
                <Container>
                    <Grid centered>
                        <Grid.Column centered width={6} textAlign="center">
                            <div className="sec-para">
                                Give us a chance to allow you to explore yourself, and we 
                                promise we will get your dream job sooner than later, if 
                                you don't have it already.
                            </div>
                        </Grid.Column>
                    </Grid>
                    <Grid centered>
                        <Grid.Column centered width={6}>
                            <Form onSubmit={this.handleSubmit} className="myForm">                                
                                <Form.Input label="Mobile / Email" placeholder='Mobile Or Email' name='username' value={username} onChange={this.handleChange} />
                                <Form.Input label="Password" placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                                <Button type='submit' className="fullWidth theme-1fb8a6-bg theme-ffffff bdrs8px">Sign In</Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </section>
        )
    }
}

export default Signup