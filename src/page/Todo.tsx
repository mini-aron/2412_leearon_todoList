import React, { useState } from "react";
import Input from "../components/Input";
import Item from "../components/item";
import "../style/global.css";
import { v4 as uuidv4 } from "uuid";

interface listProps {
  id: string;
  content: string;
 
}

export default function Todo() {
  const [list, setList] = useState<listProps[]>([]);
  const addList = (text: string): void => {
    setList([
      
      {
        id: `${uuidv4()}`,
        content: `${text}`,
       
      },...list
    ]);
  };
  const deleteList = (id: string): void => {
    const newList = list.filter((prop) => prop.id !== id);
    setList(newList);
  };

 
  return (
    <>
      <Input Submit={addList} />

      <div>
        {list.map((a) => (
          <Item id={a.id} content={a.content}  
            delete1={deleteList}
          
          />
        ))}
      </div>
    </>
  );
}
