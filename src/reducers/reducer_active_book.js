// Reducers gets two arguments. The current state and action.
// Reducers are only ever called when an action occurs.
// State argument is not application state. Only the state 
// this reducer is responsible for.
export default function(state = null, action) { 
            // ES6 syntax. If state comes in as undefined, set it to null. Since redux does not allow undefined state.
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state; // when don't care about the action
}