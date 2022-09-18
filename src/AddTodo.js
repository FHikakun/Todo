import React, { useRef } from 'react';

export const AddTodo = ({handleAddTodo}) => {
    //いまいちrefの意味がわかってないです
    const inputRef = useRef(null);
    const onClickAddTodo = () => {
        const input = inputRef.current;
        console.log(input);
        if(input && input.value) {
            handleAddTodo(input.value);
            input.value = "";
        }
    }
    
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={onClickAddTodo}>登録</button>
        </div>
    );
}
