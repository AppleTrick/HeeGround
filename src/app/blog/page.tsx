// "use client";

import PostCard from "@/components/postCard/pastCard";
import styles from "./blog.module.css";
import { getposts } from "@/lib/data";

// interface Props {
//   params: {
//     [key: string]: string;
//   };
//   searchParams?: {
//     [key: string]: string | string[] | undefined;
//   };
// }

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 3600 } });

//   if (!res.ok) {
//     throw new Error("somthing wrong");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // console.log(posts);

  // FETCH DATA WITHOUT AN API
  const posts = await getposts();
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
    </div>
  );
};
export default BlogPage;
