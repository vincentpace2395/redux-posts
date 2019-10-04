import React from 'react';
import './Display.css';
import Search from '../Search/Search';
import UserContent from '../UserContent/UserContent';

class Display extends React.Component {
    render() {
        return (
            <div className='container'>
                <Search />
                <UserContent />
            </div>
        );
    }
};

export default Display;