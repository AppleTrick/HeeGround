import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>팀 목표를 위해 적극 협력하는 인재 </h1>
        <p className={styles.desc}>
          현대 사회에서의 팀워크는 단순한 협업을 넘어서, 조직의 성공을 좌우하는 핵심 요소로 자리 잡고 있습니다. 특히, 팀 목표를 향해 적극적으로 협력하는 인재는 조직에 있어 무엇보다 중요한 자산입니다.
        </p>
        <p className={styles.desc}>
          저는 조직에 가치를 더하고 보다 나은 미래를 함께 만들어 나가고자 합니다. 저를 뽑아주신다면, 저는 팀의 목표를 달성하기 위해 최선을 다할 것임을 약속드립니다.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>더보기</button>
          <button className={styles.button}>연락하기</button>
        </div>
        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/aa.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
