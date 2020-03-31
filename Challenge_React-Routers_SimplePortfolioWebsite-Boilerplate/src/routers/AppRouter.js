import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import HomePage from './../components/Home';
import PortfolioPage from './../components/PortfolioPage';
import ContactPage from './../components/ContactPage';
import ProjectOnePage from './../components/ProjectOnePage';
import ProjectTwoPage from './../components/ProjectTwoPage';

  const AppRouter = () => (
    <div>
      <BrowserRouter>
          <Header />
          <Switch>
            <Route 
              path = '/'
              component = {HomePage}
              exact = {true}
            />
            <Route 
              path = '/portfolio'
              component = {PortfolioPage}
              exact = {true}
            />
            <Route 
              path = '/contact'
              component = {ContactPage}
            />
            <Route 
              path = '/portfolio/1'
              component = {ProjectOnePage}
            />
            <Route 
              path = '/portfolio/2'
              component = {ProjectTwoPage}
            />
            <Route 
              component = {NotFoundPage}
            />
          </Switch>
      </BrowserRouter>
    </div>
    
  );
  
    export default AppRouter;
