import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import styles from 'styles/ResetPasswordBox.module.scss';

const ResetPasswordBox: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/');
    }
  }, [token, router]);

  return (
    <div className={styles.reset_password}>
    <div className={styles.box}>
    <div className={styles.inner_box}>
        <div>
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
  )
};

ResetPasswordBox.getInitialProps = async (context) => {
  const { query } = context;
  const token = query.token as string;

  return { token };
};

export default ResetPasswordBox;
