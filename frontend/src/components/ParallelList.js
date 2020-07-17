import React from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

class ParallelList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='pi-div-full-width'>
                <div className="sectionDivider">
                    < CategoryList />
                </div>
                <div className="sectionDivider">
                    < ProductList />
                </div>
            </div>
        )
    }
}
export default ParallelList;