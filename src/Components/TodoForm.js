import React,{useState,useContext} from "react";
import {
  Button,
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupText
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {

  const [todoString,setTodoString] = useState("");
  const {dispatch} = useContext(TodoContext)

  const handelSubmit = e =>{

    e.preventDefault();

    if(todoString===""){
        return alert("Plase Enter A Todo");
    }

    const todo = {
      todoString,
      id : v4()  
    }
    
    dispatch({
      type:ADD_TODO,
      payload:todo
    })
    
    setTodoString("");
  }


  return (
    <Form onSubmit={handelSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
          type="text"
          name="todo"
          id="todo"
          placeholder="Your Next Todo"
          value={todoString}
          onChange={e=> setTodoString(e.target.value)}
          // todo: value onchange
          >
          </Input>            

          <InputGroupText >
            <Button
            color="warning"
            // todo onclick
            >Add</Button>
          </InputGroupText>
          
          </InputGroup>
      </FormGroup>
    </Form>
    
  );
};

export default TodoForm;


// there is this todo funcanality complate a add and remove todo
// but not store a todo there is reson todo not working all time 
// slove next phase to store a todo from 
