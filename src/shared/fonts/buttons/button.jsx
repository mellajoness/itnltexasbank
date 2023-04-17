import styles from './css/button.module.scss';
export  function LoginOutlineButton({
    buttonText,}) {
      return (
          <button className={styles.blackoutlinebtn}>
             {buttonText}
          </button>
      )
};
export  function PrimaryButton({
    buttonText,}) {
      return (
          <button className={styles.primaryBtn}>
             {buttonText}
          </button>
      )
}