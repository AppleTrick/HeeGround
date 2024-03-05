// "use client";

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
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("somthing wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();

  // console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map((post: PostType) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
      {/* <div className={styles.post}>
        <PostCard />
      </div> */}
      ;
    </div>
  );
};
export default BlogPage;
