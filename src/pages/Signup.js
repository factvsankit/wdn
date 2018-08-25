import React, { Component } from 'react'

// Include Custom Components
import BreadcrumbBar from '../partials/BreadcrumbBar'

// Include Semantic Components
import { Container, Grid, Form, Checkbox, Button, Icon } from 'semantic-ui-react'


const industries = [
    { key: 't', text: 'Telecom', value: 'telecom' },
    { key: 'i', text: 'IT', value: 'it' },
  ]


class Signup extends Component{

    state = {
        userType: 1,
        cname:'',
        name:'',
        email:'',
        mobile:'',
        industry:'',
        password:'',
        repassword:''
    }      


    handleUserTypeForm = () =>{
        const typeCandidate = this.candidate.checked;
        if(typeCandidate){
            this.setState({
                userType: 1
            })
        }else{
            this.setState({
                userType: 0
            })
        }
    }   
    
    handleChange = (e, { name, value }) => {
        this.setState({ 
            [name]: value 
        })
    }

    handleSubmit =() =>{
        const { userType, cname, name, email, mobile, industry, password, repassword } = this.state;
    }

    render(){

        const { userType, cname, name, email, mobile, password, repassword} = this.state;
        
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
                                <Grid>
                                    <Grid.Column width={8}>
                                        <div className={`button-radio ${userType && 'active'}`}>
                                            <Form.Field> 
                                            <input type="radio" defaultChecked ref={(userTypeCandidate)=>this.candidate=userTypeCandidate} name='user_type' onChange={this.handleUserTypeForm} />
                                            </Form.Field>
                                            <div className="bc-name">
                                                <span>Candidate</span>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                    <div className={`button-radio ${!userType && 'active'}`}>
                                            <Form.Field> 
                                            <input type="radio"  name='user_type' onChange={this.handleUserTypeForm} />
                                            </Form.Field>
                                            <div className="bc-name">
                                                <span>Company</span>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                                {
                                    !userType && 
                                    <Form.Input label="Copmany Name" placeholder='Company Name' name='cname' value={cname} onChange={this.handleChange} />
                                }
                                <Form.Input label="Full Name" placeholder='Full Name' name='name' value={name} onChange={this.handleChange} />
                                <Form.Input label="Email" placeholder='Email' name='email' value={email} onChange={this.handleChange} />
                                <Form.Input label="Mobile No." placeholder='Mobile No.' name='mobile' value={mobile} onChange={this.handleChange} />
                                <Form.Select label="Industry" options={industries} placeholder='Select Industry' name="industry" onChange={this.handleChange} />
                                <Form.Input label="Password" placeholder='Password' name='password' value={password} onChange={this.handleChange} />
                                <Form.Input label="Re-Password" placeholder='Re-Password' name='re-password' value={repassword} onChange={this.handleChange} />
                                <Form.Field type="checkbox" control={Checkbox} label="I agree to the Terms and Conditions" />
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