import React, { useState, useEffect } from "react";
import { db } from "framework/firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuthContext } from "framework/context/AuthContext";
import { Button } from "@chakra-ui/react";

export const ToDo = () => {
  const { currentUser } = useAuthContext();
  const [users, setUsers] = useState<string>("");
  const [todos, setToDos] = useState([]);
  const [text, setText] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [due, setDue] = useState<number>();

  const todosCollectionRef = collection(db, "todos");

  const handleDue = (e) => setDue(e.target.value);

  //投稿機能の実装
  const createToDo = async () => {
    await addDoc(todosCollectionRef, {
      text: text,
      userId: "users/" + currentUser.id,
    });
  };
  //投稿一覧取得
  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      console.log(data);
      setToDos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTodos();
  }, []);
  return (
    <>
      <h3>ToDo</h3>
      <input
        placeholder="何する。。？"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button onClick={createToDo}>投稿</Button>
      <h3>リスト</h3>
      {todos.map((todo) => {
        console.log(todo);
        return (
          <>
            {""}
            <div>
              <p>{todo.text}</p>
            </div>
            {""}
          </>
        );
      })}
    </>
  );
};
export default ToDo;
