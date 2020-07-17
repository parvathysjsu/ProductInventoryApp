import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.searchfortext = this.searchfortext.bind(this)
    }
    onChangeHandler(e) {
        this.setState({text:e.target.value})
    }
    searchfortext() {
        console.log('%c%s', 'color: #ff0000', "searching for "+this.state.text);
    }
    render() {
        return (
            <div align="center">
                <h2>Search the Repo</h2>
                <input type='text' name='text' onChange={this.onChangeHandler} />
                <button onClick={this.searchfortext}>Search</button>                
            </div>
        )
    }
}
export default Search;