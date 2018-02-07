import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input 
                className='search-box pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={props.searchChange} />
        </div>
    )
}

export default SearchBox;