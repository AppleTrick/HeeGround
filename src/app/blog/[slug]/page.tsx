import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src="https://images.pexels.com/photos/18965342/pexels-photo-18965342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Whoss</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates ea quod placeat dolores. Corporis in aliquid exercitationem nisi delectus, laboriosam porro distinctio molestiae
          iure! Earum rem corporis ut fugit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
