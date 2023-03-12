'use client';

import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import styles from '../../styles/ResetPasswordBox.module.scss';

const ResetPasswordBox = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [error, setError] = useState<string>('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordConfirmation !== '' && e.target.value !== passwordConfirmation)
      setError('Le mot de passe et la confirmation du mot de passe ne correspondent pas.');
    else
      setError('');
  };

  const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
    if (password !== '' && e.target.value !== password)
      setError('Le mot de passe et la confirmation du mot de passe ne correspondent pas.');
    else
      setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirmation)
      setError('Le mot de passe et la confirmation du mot de passe ne correspondent pas.');

    // TODO: Send data to the server
  };

  return (
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
              <div className={styles.password_input}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Nouveau mot de passe'
                  className={styles.password_field}
                />
                <div className={styles.password_icon} onClick={toggleShowPassword}>
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.password_input}>
                <input
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Confirmation mot de passe'
                  className={styles.password_field}
                />
                <div className={styles.password_icon} onClick={toggleShowPasswordConfirmation}>
                  {showPasswordConfirmation ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordBox;
