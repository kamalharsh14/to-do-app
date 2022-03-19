import React from "react";

function ToDoList(props){
    return (
        <div className="list">
            <li> {props.text} 
            <button className="button" 
            onClick={() => {
                props.onSelect(props.id);
            }}> 
            - 
            </button>
            </li>
        </div>
    );
}

export default ToDoList;