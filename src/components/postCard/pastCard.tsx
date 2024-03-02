import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna elit, tristique a tellus non, faucibus tempor erat. Duis congue ut justo eu placerat. Vivamus tempor, risus quis mollis
          pellentesque, eros nulla cursus arcu, eget elementum arcu lorem et lorem. Quisque pretium volutpat cursus. Cras pellentesque sem et purus pretium, a venenatis mi condimentum. Mauris nibh
          tort
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
