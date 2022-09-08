import React, {useState} from 'react';

const AddTodo = ({text, handleInputText, handleAddTodo}) => {

    const InputValidate = () => {
        console.log(text);
        if(text === ''){
            return ;
          }
        handleAddTodo();
    }
    return(
        <div>
            <input type="text" onChange={(e) => handleInputText(e.target.value)} />
            <button onClick={InputValidate}>登録</button>
        </div>
    );
}

export default AddTodo;