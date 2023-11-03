import React, {useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";  
import './App.css';

import { TodoContext } from "./context/TodoContext";
import reducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () =>{

    const [todos,dispatch] = useReducer(reducer,[]);
    // useReducer(reducer name, initalization state of)
    // todos = manage the state varibale hold the current state this value is intilization value (here is [] empty array)
     // dispatch = This is the dispatch function returned by useReducer, which is used to send actions to the reducer function (reducer) to update the state (todos in this case).

    return(
      <TodoContext.Provider value={{todos,dispatch}}>
        <Container fluid>
          <h1>TODO App With Context</h1>
          <Todos/>
          <TodoForm/>
        </Container>
      </TodoContext.Provider>
    )
}

export default App;
