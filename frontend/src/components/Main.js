import React from 'react'
import Header from './Header'
import Search from './Search'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import ParallelList from './ParallelList'
import ProductForm from './ProductForm'
import CategoryForm from './CategoryForm'
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
                <Search />
                <ProductForm />
                < CategoryForm />
                <ParallelList />
            </div>
        )
    }
}
export default Main;