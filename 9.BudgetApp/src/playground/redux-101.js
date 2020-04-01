import {createStore} from 'redux';

const store = createStore((state = { count: 0}, action) => {
    switch(action.type){
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
            count : state.count + incrementBy
            }; 
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count : state.count - decrementBy
            };
        case "RESET":
            return {
                count : 0
            };
        case "SET":
                return {
                    count : action.count
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

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});


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


