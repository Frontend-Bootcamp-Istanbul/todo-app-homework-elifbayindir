import React from 'react';
import {connect} from "react-redux";
import {toggleTodo, deleteTodo} from "../redux/actions";
import { Button } from 'reactstrap';

const TodoAppListItem = ({content, id, completed, toggleTodo, deleteTodo}) => {
    return (
     <div>   
        <div style={{
            textDecoration: completed ? "line-through" : "initial"
        }} onClick={() => toggleTodo(id)}>
            {content}
        </div>
        <Button
            onClick={() => deleteTodo(id)}>
            sil
        </Button>
    </div> 

    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);