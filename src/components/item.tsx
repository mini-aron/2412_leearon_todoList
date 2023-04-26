import React from "react";
import "../style/global.css";

type listProps = {
  delete1: (id: string) => void;
  id: string;
  content: string;
};
export default function ({ delete1, id, content}: listProps) {
  return (
    <div key={id} className="item">
      <p>
    {content}
      </p>
      <button
        onClick={() => {
          delete1(id);
        }}
      >
        삭제
      </button>
    </div>
  );
}
