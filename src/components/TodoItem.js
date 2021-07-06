import {useState} from "react";
import {Stack, Label, Dialog, DialogFooter, DefaultButton, PrimaryButton, DialogType } from "@fluentui/react";
import {IconButton} from "@fluentui/react/lib/Button";

const TodoItem = (props) => {
    const [openDeleteModal, setOpenModal] = useState( () => {return true});

    // Delete todo.
    const deleteTodo = (_id) => {
        props.deleteTodo(_id);
        setOpenModal(prevState => prevState = true);
    }

    return (
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
                <Label>{props.todo.name}</Label>
                <IconButton iconProps={{iconName: "trash"}} className="clearButton" onClick={() => {setOpenModal(!openDeleteModal)}} />
            </Stack>
            <Dialog hidden={openDeleteModal}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: `${props.language === "en" ? "Delete" : "削除"}`,
                    subText: `${props.language === "en" ? "Are you sure you want to delete this todo?" : "このTODOを削除してもいいですか。"}`
                }}
                modalProps={{isBlocking: false}}>
                <DialogFooter>
                    <PrimaryButton text={props.language === "en" ? "Yes" : "はい"} onClick={() => {deleteTodo(props.todo._id)}} />
                    <DefaultButton text={props.language === "en" ? "No" : "いいえ"} onClick={() => {setOpenModal(true)}} />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
}
 
export default TodoItem;