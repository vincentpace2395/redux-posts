import React from 'react';
import './Search.css'

class Search extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input placeholder='type username...'/>
                </div>
                <div className='btn-container'>
                    <button>Search GitHub User</button>
                </div>
            </div>
        );
    }
}

export default Search;