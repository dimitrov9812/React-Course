import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//we use the 'Switch' to make the 404 page available
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

// =========Challenge========
// 1.Create 2 more components - EditExpensePage and HelpPage
// 2.Add them to our app and make sure the navigation to them work fine

// We create the edit expense component
const EditExpensePage = () => (
  <div>
    Edit Expense
  </div>
);
// We create the help cpomponent
const HelpPage = () => (
  <div>
    Help 
  </div>
);

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
  </div>
);
const Header = () => (
  <header>
    <h1>Budget App</h1>
  </header>
);
// In this jsx we add them and they will be succesfully rendered when we visit the links
// I added links to test if the link will direct the user through the pages.
const routes = (
  <BrowserRouter>
  <div>
      <Header />

        <NavLink to="/" activeClassName="is-active" exact={true}>ExpenseDashboard</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br/>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>

      <switch>
        <Route 
            path='/'
            component={ExpenseDashboardPage}
            exact = {true}
        />
        <Route 
            path='/create'
            component={AddExpensePage}
        />
        <Route 
            path='/edit'
            component={EditExpensePage}
        />
        <Route 
            path='/help'
            component={HelpPage}
        />
        <Route 
            component={NotFoundPage}
        />
      </switch>
  </div>
     
  </BrowserRouter>
);
  const componentDiv = $("#app")[0];
  ReactDOM.render(routes,componentDiv);
