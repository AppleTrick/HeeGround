// "use client";

import PostCard from "@/components/postCard/pastCard";
import styles from "./blog.module.css";
import { getposts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("포스트 데이터를 가지고 오지 못함");
  }
  return res.json();
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getposts();

  return (
    <div className={styles.container}>
      {posts.map((post: PostType) => (
        <div className={styles.post} key={post.slug}>
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
