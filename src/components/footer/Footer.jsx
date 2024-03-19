import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bolvoh</div>
      <div className={styles.text}>
      Bolvoh creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;