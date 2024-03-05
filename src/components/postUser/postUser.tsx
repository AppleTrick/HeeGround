import styles from "./postUser.module.css";

interface PostUserProps {
  userId: string;
}

const getData = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("somthing wrong");
  }

  return res.json();
};

const PostUser = async ({ userId }: PostUserProps) => {
  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
