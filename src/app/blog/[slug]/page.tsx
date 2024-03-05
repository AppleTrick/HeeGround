import Image from "next/image";
import styles from "./singlePost.module.css";
import { ReactNode, Suspense } from "react";
import PostUser from "@/components/postUser/postUser";

interface Props {
  params: {
    [key: string]: string;
  };
}

const getData = async (slug: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("somthing wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }: Props) => {
  const { slug } = params;

  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50} />
          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Whoss</span>
          </div> */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
