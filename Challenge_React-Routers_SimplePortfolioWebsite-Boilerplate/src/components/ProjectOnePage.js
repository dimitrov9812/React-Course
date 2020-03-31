import React from 'react';

const ProjectOne = (props) => {
    console.log(props)
    return(
        <div>
            <h1>One</h1>
            <h3>This is my project one</h3>
            <h3>The id of the project got from the props is: {props.match.params.id}</h3>
        </div>
    )
    
};

export default ProjectOne;