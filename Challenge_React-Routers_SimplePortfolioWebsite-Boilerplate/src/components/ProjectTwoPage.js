import React from 'react';

const ProjectTwo = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Two</h1>
            <h3>This is my project two</h3>
            <h3>The id of the project got from the props is: {props.match.params.id}</h3>
        </div>
    )
};

export default ProjectTwo;