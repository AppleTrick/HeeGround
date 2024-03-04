import PostCard from "@/components/postCard/pastCard";
import styles from "./blog.module.css";

// interface Props {
//   params: {
//     [key: string]: string;
//   };
//   searchParams?: {
//     [key: string]: string | string[] | undefined;
//   };
// }

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("somthing wrong");
  }

  return res.json();
};

const BlogPage = () => {
  // console.log(params);
  // console.log(searchParams);

  // const posts = await;
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};
export default BlogPage;
