import { ToDo } from "../List";
import ListItem from "./ListItem";

export default function ToDoList() {
    
    return (
        <div className="ToDoContainer">
                {ToDo.map((Item, index) => (
                    <ListItem Item={Item} index={index}/>
                ))}   
        </div>
    );
}