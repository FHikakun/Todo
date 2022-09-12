import React from 'react';

const AddTodo = ({text, handleInputText, handleAddTodo}) => {

    // 入力チェック
    /**
     * 
     * @returns 
     */
    const InputValidate = () => {
        if(text === ''){
            return ;
          }
        handleAddTodo(text);
        handleInputText('');
    }
    
    return(
        <div>
            <input type="text" value={text} onChange={(e) => handleInputText(e.target.value)} />
            <button onClick={InputValidate}>登録</button>
        </div>
    );
}

export default AddTodo;