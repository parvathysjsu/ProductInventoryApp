import React from 'react'
import Header from './Header'
import Search from './Search'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import ParallelList from './ParallelList'
import ProductForm from './ProductForm'
import CategoryForm from './CategoryForm'
import Routes from './../routes/route'
import Home from './Home'
import Product from './Product'
import Category from './Category'
import { Route, Link, BrowserRouter } from 'react-router-dom'
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            < BrowserRouter >
                <div>
                    <button>
                        <Link to="/">Home</Link></button>
                    <button>
                        <Link to="/product">Product</Link></button>
                    <button>
                        <Link to="/category">Category</Link> </button>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Product} />
                    <Route path="/category" component={Category} />
                </div>
            </ BrowserRouter >
        )
    }
}
export default Main;