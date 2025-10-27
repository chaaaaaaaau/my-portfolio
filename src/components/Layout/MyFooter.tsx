import styles from "./footer.module.scss";

const MyFooter = () => {
  return <div className={styles.footer}>
    <div className={styles.left}>
        {new Date().getFullYear()} © Sam CHAU. All rights reserved.
    </div>
    <div className={styles.right}>
      
    </div>
  </div>;
};

export default MyFooter;