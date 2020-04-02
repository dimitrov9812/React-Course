import {createStore} from 'redux';

//Creating action generators

//For incrementing
const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

//For decrementing
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// ===========Challenge==========
// 1. Set up action generator for setCount
// 2. Set up action generator for resetCount

//For setCount
const setCount = ({setNum}) => ({
    type: 'SET',
    setNum
});

//For resetCount
const resetCount = () =>(
 {
     type: 'RESET'
 }
);
const store = createStore((state = { count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
            count : state.count + action.incrementBy
            }; 
        case "DECREMENT":
            return {
                count : state.count - action.decrementBy
            };
        case "RESET":
            return {
                count : 0
            };
        case "SET":
                return {
                    count : action.setNum
                };
        default: 
            return state;
    }
});

// Does something each time the data in the store has been changed
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//we can unsubscribe by calling the funcion unsibscripe wherever we like

// Action - object that gets sent to the store

// it could be -> walk, stop_walking , incrementwork, stop_working
// it could be also -> increment the count, decrement the count


store.dispatch(incrementCount({incrementBy:3}));


store.dispatch(decrementCount({decrementBy:9}));

store.dispatch(setCount({setNum:22}));

store.dispatch(resetCount());




/*
store.dispatch({
    type: 'INCREMENT'
});


store.dispatch({
    type: 'INCREMENT'
});
 


// =======Challenge=======
// 1. Create action called RESET which will reset the count to zero
// 2. Call it once and after it DECREMENT once andthen your result should be -1

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});


store.dispatch({
    type : 'SET',
    count: 101
});
;
 
*/


