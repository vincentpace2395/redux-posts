import React from 'react';
import './UserContent.css';

class UserContent extends React.Component {

    getUserName = () => {

    };

    getUserLocation = () => {

    };

    getUserNumberPublicRepos = () => {

    };

    getUserNumberFollowers = () => {

    };

    render() {
        return (
            <div>
                <h3>Real name</h3>
                <h5>{this.getUserName}</h5>
                <h3>Location</h3>
                <h5>{this.getUserLocation}</h5>
                <h3>Number of public repos</h3>
                <h5>{this.getUserNumberPublicRepos}</h5>
                <h3>Number of followers</h3>
                <h5>{this.getUserNumberFollowers}</h5>
            </div>
        );
    };
};

export default UserContent;