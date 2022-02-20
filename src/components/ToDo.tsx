import React, { useState, useEffect } from "react";
import { db } from "framework/firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const ToDo = () => {
  const initialDate = new Date();
  const [todos, setToDos] = useState([]);
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [due, setDue] = useState<Date>(initialDate);

  const todosCollectionRef = collection(db, "todos");

  //投稿機能の実装
  const createToDo = async () => {
    await addDoc(todosCollectionRef, {
      content: content,
      userId: userId,
      due: due,
    });
  };
  // const updateToDo = () => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };
  // const deleteToDo = () => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  // };
  //投稿一覧取得
  useEffect(() => {
    const getToDos = async () => {
      const data = await getDocs(todosCollectionRef);
      setToDos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getToDos();
  }, []);

  return (
    <>
      <h3>ToDo</h3>
      <input
        placeholder="何する。。？"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <div>
        <label>今日する</label>
        <input type="radio" name="due" value="今日する" />
        <label>明日する</label>
        <input type="radio" name="due" value="明日する" />
        <label>いつかする</label>
        <input type="radio" name="due" value="いつかする" />
      </div>
      <button onSubmit={createToDo}></button>
      <h3>リスト</h3>
      {todos.map((todo) => {
        return (
          <div>
            // 先ずはテキストだけ出す
            <p>{todo.content}</p>
          </div>
        );
      })}
    </>
  );
};
export default ToDo;
