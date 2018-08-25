import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Include Partials
import Header from './partials/Header';
import HomeBanner from './partials/HomeBanner';

// Include Page Components
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'

// Include Assets
import LogoImage from './assets/images/wdn-logo.png'

class Home extends Component {

  state = {
    loading: true
  }

  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render() {
    const { loading } = this.state;
    return (
      <Router>
        <div className="App">
        {
          loading &&
          <div class="page-loader">
            <div class="pl-content">
              <img src={LogoImage} alt="Worker's Directory Nepal" />
              <p>Worker's Directory Nepal</p>
            </div>
          </div>
        }
          <Header />
          <Switch>
          <Route exact path="/" component={HomeBanner}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
