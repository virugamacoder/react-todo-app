import React , {useContext,useEffect} from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import { TodoContext } from "../context/TodoContext"
import { REMOVE_TODO } from "../context/action.types"
import "bootstrap/dist/css/bootstrap.min.css";

const Todos = ()=>{
    const {todos,dispatch} = useContext(TodoContext);
    
    useEffect(() => {
        console.log("RUN");

        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        console.log("run time : ",storedTodos);
        console.log("todos run : " ,todos);

        if (storedTodos) {
            console.log("init run");
          dispatch({ type: "INIT", payload: storedTodos });

        }

        console.log("todos init : " ,todos);

    }, [dispatch]);

// No use Beacuse the todos dependecy run 
    //   useEffect(() => {
    //     console.log("run2");
    //     console.log("todos run2 : " ,todos);
    //     localStorage.setItem("todos", JSON.stringify(todos));
    //     console.log("local storage run2 time : " , JSON.parse(localStorage.getItem("todos")));
    //   }, [todos]);
      

    return(
        <div className="todos-container">
       <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo=>(
                <ListGroupItem key={todo.id}>
                        {todo.todoString}
                <span className="float-end"
                onClick={()=>{
                    dispatch({
                        type:REMOVE_TODO,
                        payload:todo.id
                    })  
                }}
                >     
                
                <FaCheckDouble />              
                </span>        
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
    );
    

}

export default Todos;