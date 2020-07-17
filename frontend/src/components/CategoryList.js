import React from 'react';

class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        const apiUrl = 'http://localhost:5000/api/categories';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((response) => {
               // console.log('%c%s', 'color: #d3561d', JSON.stringify(response))
                return response;
            })
            .then((data) => this.setState(
                { data: data }))
    }

    render() {
        return (
            <div>
            <h2>Category List</h2>
            <table id="cat-table" className="pi-table" align="center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col"> Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((record, i) => 
                         <tr key= {i}>
                         <th scope="row">{i}</th>
                         <td>{record.name}</td>
                         <td>{record.description} </td>                         
                       </tr>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}
export default CategoryList;