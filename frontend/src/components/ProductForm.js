import React from 'react';

class ProductForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sku: '',
            description: '',
            price: '',
            status: 'Create a product in the inventory'
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    createProduct() {
        let currentComponent = this;
        let req = {
            sku: this.state.sku,
            name: this.state.name,           
            description: this.state.description,
            price: this.state.price
        }
        console.log('%c%s', 'color: #ff0000', "req for " +  JSON.stringify(req));
        fetch('http://localhost:5000/api/products', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(req)
        }).then(function (response) {
            //console.log('%c%s', 'color: #00a3cc', JSON.stringify(response));
            return response;
        }).then(function (data) {
           console.log('%c%s', 'color: #00e600', JSON.stringify(data));
           currentComponent.setState({status:'Product created successfully'})
        });
    }
    render() {
        return (
            <div align="center">
                <h2>Create Product</h2>
                <p>{this.state.status}</p>
                <input type='text' placeholder="name" name='name' onChange={this.onChangeHandler} />
                <input type='text' placeholder="sku" name='sku' onChange={this.onChangeHandler} />
                <input type='text' placeholder="description" name='description' onChange={this.onChangeHandler} />
                <input type='text' placeholder="price" name='price' onChange={this.onChangeHandler} />
                <button onClick={this.createProduct}>Create</button>
            </div>
        )
    }
}
export default ProductForm;