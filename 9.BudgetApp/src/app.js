import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route} from 'react-router-dom';


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


// In this jsx we add them and they will be succesfully rendered when we visit the links
// I added links to test if the link will direct the user through the pages.
const routes = (
  <BrowserRouter>
    <div>
      <a href="http://localhost:8080/">Home</a><br/>
      <a href="http://localhost:8080/create">Create Expense Page</a><br/>
      <a href="http://localhost:8080/edit">Edit Expense</a><br/>
      <a href="http://localhost:8080/help">Help</a><br/>
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
    </div>
  </BrowserRouter>
);
  const componentDiv = $("#app")[0];
  ReactDOM.render(routes,componentDiv);
