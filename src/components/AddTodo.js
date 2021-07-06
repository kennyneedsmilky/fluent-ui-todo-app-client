import React, {useState} from "react";
import {Stack,TextField, PrimaryButton} from "@fluentui/react";

const AddTodo = ( props ) => {
    const [todoName, setTodoName] = useState(() => {
        return "";
    })
    // Add Todo.
    const addTodo = () => {      
        props.addTodo(todoName);
        setTodoName("");
    }
    // Set Todo
    const setTodo = (e) =>{
        setTodoName(prevState => prevState = e.target.value);
    }
    return ( 
        <Stack>
            <Stack horizontal >
                <Stack.Item grow>
                    <TextField placeholder={props.language === "en" ? "Add new todo." : "新TODOを追加しましょう。"} onKeyDown={ e => {if (e.key === "Enter") addTodo()}} value={todoName} onChange={setTodo}/>
                </Stack.Item>
                <PrimaryButton onClick={addTodo}>{props.language === "en"? "Add" : "追加"}</PrimaryButton>
            </Stack>
        </Stack>
    );
}
 
export default AddTodo;