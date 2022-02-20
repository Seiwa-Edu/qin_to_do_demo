import React from "react";
import { doc, getDoc } from "firebase/firestore";

export const ToDo = () => {
  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);
  //投稿機能の実装
  const handleToDo = () => {};

  return (
    <>
      <div>ToDo</div>
      <form onSubmit={handleToDo}></form>
    </>
  );
};
export default ToDo;
