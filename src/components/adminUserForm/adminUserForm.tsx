"use client";

import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="유저이름" />
      <input type="text" name="email" placeholder="이메일" />
      <input type="text" name="password" placeholder="비밀번호" />
      <input type="text" name="img" placeholder="이미지" />
      <select name="isAdmin">
        <option value="false">관리자 계정 설정</option>
        <option value="false">유저</option>
        <option value="true">관리자</option>
      </select>
      <button>추가하기</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
