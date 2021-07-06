import { useState } from "react";
import { Stack } from "@fluentui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

// Hom Page
const Home = (props) => {
    // This is the variable needed for the todos.
    let fluentUItodos;
    // Check to see if todos are in local storage.
    // console.log(localStorage.getItem("fluentUITodos"));
    if (localStorage.getItem("fluentUITodos") && JSON.parse(localStorage.getItem("fluentUITodos")).length > 0) {
        fluentUItodos = JSON.parse(localStorage.getItem("fluentUITodos"));
    } else {
        fluentUItodos = [
            {_id: Date.now(), name: "Make a Todo List"},
        ];
        localStorage.setItem("fluentUITodos", JSON.stringify(fluentUItodos));
    }
    // Set the todos.
    const [todos, setTodos] = useState(() => {
        return fluentUItodos;
    })
    // Add todo.
    const addTodo = (todoName) => {
        if (todoName !== "") {
          const newId = Date.now();
          const newTodos = [...todos, {_id: newId, name: todoName}];
          setTodos(newTodos);
          localStorage.setItem("fluentUITodos", JSON.stringify(newTodos));
        }
    };
    // Delete todo.
    const deleteTodo = (_id) => {
        const newTasks = todos.filter(todo => {return todo._id !== _id});
        setTodos(newTasks);
        localStorage.setItem("fluentUITodos", JSON.stringify(newTasks));
    }; 
    // Todo UI
    return (
        <div className="wrapper">
            <Stack horizontalAlign="center">
                <h1>{props.language === "en" ? "Todo List" : "TODOリスト"}</h1>
                <Stack style={{width: 300}} gap={25}>
                    <AddTodo addTodo={addTodo} language={props.language} />
                    <TodoList todos={todos} deleteTodo={deleteTodo} language={props.language} />
                </Stack>
            </Stack>
        </div>
    );
}
 
export default Home;