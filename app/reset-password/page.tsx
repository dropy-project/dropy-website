import styles from '../../styles/ResetPasswordBox.module.scss';

const ResetPasswordBox = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.inner_box}>
        <div className={styles.header}>
          <p className={styles.title}>Modification du mot-de-passe</p>
          <div className={styles.profile_container}>
            <p>@Pseudo</p>
          </div>
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <input type='password' name='password' id='password' placeholder='Nouveau mot de passe' />
          </div>
          <div className={styles.field}>
            <input type='password' name='password' id='password' placeholder='Confirmation du mot de passe' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResetPasswordBox;
