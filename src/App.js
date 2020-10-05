import React from 'react';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './components/CreatePost';
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store} >
            <div className='App'>
                <CreatePost/>
            </div>
        </Provider>
    );
}

export default App;
