import React from 'react';

class CategoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
           
            description: '',
           
            status: 'Create a category in the inventory'
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.createCategory = this.createCategory.bind(this)
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    createCategory() {
        let currentComponent = this;
        let req = {           
            name: this.state.name,           
            description: this.state.description          
        }
        console.log('%c%s', 'color: #ff0000', "req for " +  JSON.stringify(req));
        fetch('http://localhost:5000/api/categories', {
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
           currentComponent.setState({status:'Category created successfully'})
        });
    }
    render() {
        return (
            <div align="center">
                <h2>Create Category</h2>
                <p>{this.state.status}</p>
                <input type='text' placeholder="name" name='name' onChange={this.onChangeHandler} />                
                <input type='text' placeholder="description" name='description' onChange={this.onChangeHandler} />               
                <button onClick={this.createCategory}>Create</button>
            </div>
        )
    }
}
export default CategoryForm;