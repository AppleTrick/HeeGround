import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ParkDev</div>
      <div className={styles.text}>Park Creative thoughts agency ⓒ All rights reserved</div>
    </div>
  );
};

export default Footer;
