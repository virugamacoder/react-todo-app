import {ADD_TODO,REMOVE_TODO,INIT} from "./action.types"

// Initialize the state with data from local storage or an empty array if no data is available.
// const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const reducer = (state,action) => {

    
    switch(action.type){
        case ADD_TODO:
            const newState = [...state,action.payload];
            localStorage.setItem("todos", JSON.stringify(newState));
            return newState;

        case REMOVE_TODO:
            const RemoveAfterState = state.filter(todo=> todo.id!==action.payload);
            localStorage.setItem("todos", JSON.stringify(RemoveAfterState));
            return RemoveAfterState;
        
        case INIT:
            // there is not use for things that time state value change if state value change run for useEffct() 2 call but there not reuried for useEffect no2 beacuse add_todo and remove_todo time run the setItem and our application 3 time useeffect condition run first time intilization,add_item and remove_item
            return action.payload;
    
        default:
            return state;
    }    
};


export default reducer;