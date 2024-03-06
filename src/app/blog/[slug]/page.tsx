import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense, useEffect, useState } from "react";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

interface Props {
  params: {
    [key: string]: string;
  };
}

const SinglePostPage = async ({ params }: Props) => {
  const { slug } = params;

  const post = await getPost(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50} />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
