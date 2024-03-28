"use client";

import { useFormState } from "react-dom";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }: { userId?: string }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="제목" />
      <input type="text" name="slug" placeholder="간단검색어" />
      <input type="text" name="img" placeholder="이미지" />
      <textarea name="body" placeholder="내용" rows={20} />
      <button>추가하기</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
