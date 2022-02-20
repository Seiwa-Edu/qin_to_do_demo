import { useAuthContext } from "framework/context/AuthContext";
import React from "react";

function UserInfo() {
  const { currentUser } = useAuthContext();
  return (
    <>
      <div>
        <p>名前:{currentUser.displayName}</p>
        <p>メール:{currentUser.email}</p>
      </div>
    </>
  );
}

export default UserInfo;
