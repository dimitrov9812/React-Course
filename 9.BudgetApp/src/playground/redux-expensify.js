import {createStore, combineReducers} from 'redux';
//generate unique id import
import {v4 as uuidv4}  from 'uuid';


// ADD_EXPENSE

const addExpense = (
    { 
        decsription = '',
        note = '',
        amount = 0,
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE', 
    expenses: {
        id: uuidv4(),
        decsription,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) =>({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE

const editExpense = ( id , updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// SPRT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer
 
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ]
        case 'REMOVE_EXPENSE':
            return  state.filter(({ id }) =>{
                return id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else{
                    return expense;
                }
            })
        default:
            return state;
    }   
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }   
};

//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

/*
const expenseOne = store.dispatch(addExpense({ decsription:'rent', amount: 100}));
const expenseTwo =store.dispatch(addExpense({ decsription:'coffee', amount: 200}));

store.dispatch(removeExpense({id: expenseOne.expenses.id}));

store.dispatch(editExpense(expenseTwo.expenses.id,{ amount:999 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

// Sorting our store
store.dispatch(sortByAmount());
store.dispatch(sortByDate());

*/

// Setting start and end date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(333));
store.dispatch(setEndDate());

const demoState = {
    expenses:[{
        id: 'asdasdasdasd',
        decsription: 'January Rent',
        note: 'This was the final payment for that Adress',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    } 
};


/*
=== Spreading objects practice

const user = {
    name: 'JEn',
    age: 24
}

const alex = {...user,name:'Petko',age:12};
console.log(alex);

*/