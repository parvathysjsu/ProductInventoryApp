import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            prodData: [],
            catData: [],
            count: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.searchfortext = this.searchfortext.bind(this)
    }
    onChangeHandler(e) {
        this.setState({ text: e.target.value })
    }
    searchfortext() {
        console.log('%c%s', 'color: #ff0000', "searching for " + this.state.text);
        const apiUrl = 'http://localhost:5000/api/search/' + this.state.text
        fetch(apiUrl)
            .then((response) => response.json())
            .then((response) => {
                // console.log('%c%s', 'color: #d3561d', JSON.stringify(response))
                return response;
            })
            .then((result) => {
                let p = [];
                let c = [];
                result.hits.map(record => {
                    if (record.type == "products")
                        p.push(record)
                    else c.push(record)
                })
                this.setState(
                    { prodData: p, catData: c, count: result.count })
                console.log('%c%s', 'color: #ad1a77', JSON.stringify(result));
            })
    }
    render() {
        return (
            <div align="center">
                <h2>Search the Repo</h2>
                <input type='text' name='text' onChange={this.onChangeHandler} />
                <button onClick={this.searchfortext}>Search</button>
                <br />
                {this.state.count ?
                    <div>
                        <h3>Search Results:</h3>
                        <p>Found {this.state.count} records</p>
                        {this.state.prodData.length > 0 ? <h3>Products</h3> : <p></p>}
                        {this.state.prodData.map((r,i) => <p key={i}>{r.id} {r.data.name} {r.data.description} {r.data.sku} {r.data.price}</p>)}
                        {this.state.catData.length > 0 ? <h3>Category</h3> : <p></p>}
                        {this.state.catData.map((r,i) => <p key={i}>{r.id} {r.data.name} {r.data.description}</p>)}
                    </div>
                    : <p />}
            </div>
        )
    }
}
export default Search;