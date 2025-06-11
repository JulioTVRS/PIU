import './ToDoDashboard.css'

export default function ToDoDashboard(props) {
    if (props.darkMode == false) {
        return (
            <div className="ToDoList">
                <h2 style={{fontSize:"25pt"}}>To-do List</h2>

                {props.children}
            </div>
        );
    } else {
        return (
            <div className="dark ToDoList">
                <h2 style={{fontSize:"25pt"}}>To-do List</h2>

                {props.children}
            </div>
        );
    }
    
}