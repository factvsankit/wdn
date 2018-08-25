
import 'semantic-ui-css/semantic.min.css';
import './assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
