/* eslint-disable import/no-extraneous-dependencies */
'use client';

import React, { useEffect, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import styles from '../../styles/ResetPasswordBox.module.scss';

import { Button } from '../../components/Button';

const ResetPasswordBox = async () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const fetchUser = async () => {
      try {
        const response = await fetch(`https://preprod-api.dropy-app.com/api/auth/resetPassword?token=${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: '<token>',
          },
        });
        const userData = await response.json();
        setUser(userData);
        console.log(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const correspondentPassword: boolean = password !== passwordConfirmation;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
  };

  const getTokenFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    return token || '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://preprod-api.dropy-app.com/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resetPasswordToken: getTokenFromUrl(),
          password,
        }),
      });
      if (response.ok) {
        // Handle successful password reset here
      } else
        setErrorMessage(true);
    } catch (error) {
      console.error(error);
      setErrorMessage(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.inner_box}>
          <div className={styles.header}>
            <p className={styles.title}>Modification du mot-de-passe</p>
            <div className={styles.profile_container}>
              <div className={styles.profile_picture}>
              </div>
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
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className={styles.password_icon} onClick={toggleShowPassword}>
                  {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <div className={correspondentPassword ? styles.password_input : styles.password_input_error}>
                <input
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Confirmation mot de passe'
                  className={styles.password_field}
                  value={passwordConfirmation}
                  onChange={handlePasswordConfirmationChange}
                />
                <div className={styles.password_icon} onClick={toggleShowPasswordConfirmation}>
                  {showPasswordConfirmation ? <BsEyeSlashFill /> : <BsEyeFill />}
                </div>
              </div>
            </div>
            {errorMessage && <p>Le mot de passe et la confirmation du mot de passe ne correspondent pas.</p>}
          </div>
          <div style={{ width: '100%' }}>
            <Button text='Confirmer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordBox;
