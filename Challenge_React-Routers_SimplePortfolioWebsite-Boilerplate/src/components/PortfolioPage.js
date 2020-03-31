import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProjectOnePage from './ProjectOnePage';

const PortfolioPage = () =>(
    <div>
        <h3>Portfolio</h3>
        <p>Here you can view some of my projects</p>

        <NavLink to='/portfolio/1'>Project 1</NavLink><br/>
        <NavLink to='/portfolio/2'>Project 2</NavLink>
    </div>
);

export default PortfolioPage;