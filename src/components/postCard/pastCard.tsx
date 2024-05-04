import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { changeDate } from "@/lib/func/changeDate";

interface PostProps {
  post?: PostType;
}

const PostCard = ({ post }: PostProps) => {

  const date = changeDate(post?.updatedAt || post?.createdAt);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post?.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post?.title}</h1>
        <p className={styles.desc}>{post?.body}</p>
        <Link className={styles.link} href={`/blog/${post?.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

// "https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
