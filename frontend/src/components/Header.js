import React from 'react';
import Routes from './../routes/route'
import { Link, BrowserRouter } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1 className="pi-header">Product Inventory App</h1>
                <BrowserRouter>
                    <Link to="/home" >home</Link>
                    <Link to="/product" >product</Link>
                    <Link to="/category" >category</Link>
                    <Routes></Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default Header;