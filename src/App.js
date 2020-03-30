import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {

    return (
        <div className="App">
            <BrowserRouter basename={'/readiness'} >
                <Header/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;
