import { Stack, Label } from "@fluentui/react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <Stack gap={10}>
            {
                props.todos.length > 0 ? props.todos.map(todo => (
                    <TodoItem todo={todo} key={todo._id} deleteTodo={props.deleteTodo} language={props.language} />
                )) : <Label>{props.language === "en" ? "Todo list is empty..." : "このリストは空っぽです。"}</Label>
            }
        </Stack>
    );
}
 
export default TodoList;