import React from 'react';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './components/CreatePost';
function App() {
    return (
        <div className='App'>
            <CreatePost/>
        </div>
    );
}

export default App;
