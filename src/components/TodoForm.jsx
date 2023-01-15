import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addNewTodo } from "../redux/actions/index.js";


const TodoForm = () => {
    
    const dispatch=useDispatch();
    
    const [text, setText] = useState("");
    
    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) =>{
        setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input
           placeholder="Enter new Tudo..."
           className="input"
           onChange={onInputChange}
           value={text}
           />
        </form>
    )
}

export default TodoForm;

