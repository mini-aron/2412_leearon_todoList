import React, { useState } from "react";



type submitProp ={
    Submit: (text:string) => void,
};

export default function Input({Submit}:submitProp){
    const [text,setText] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        console.log(e.target.value);
    };

    return(
        <div>
            <h1>
                todolist..
            </h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                Submit(text);
                setText("");
                
                
            }}>
                <input type="text"value={text} onChange={onChange} ></input>
            </form>
        </div>
    );
}