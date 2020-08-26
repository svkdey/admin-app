import React from 'react'
import { searchApplicationId } from '../actions/applications'
import { connect } from 'react-redux';
const SearchBox = (props) => {
    const seachText = (text) => {
        console.log(text)
        props.dispatch(searchApplicationId(text));
    }
    return (
        <nav style={{ marginBottom: '30px' }} className="teal">
            <div className="nav-wrapper container">
                <span className="header">Admin Portal</span>

            </div>
        </nav>
    )
}

export default connect(null, null)(SearchBox)
