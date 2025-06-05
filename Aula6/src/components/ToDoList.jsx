import { ToDo } from "../List";
import './ToDoList.css';

export default function ToDoList() {

    return (
        <div class="ToDoList">
            <h2 style={{fontSize:"25pt"}}>To-do List</h2>

            <div class="ToDoContainer">
                    {ToDo.map((Item, index) => (
                        <div class="ListItem">
                            <input type="checkbox" name="opcao1" value="valor1" />
                            <p key={index}>{Item}</p> 
                        </div>
                    ))}   
            </div>
        </div>
    );
}