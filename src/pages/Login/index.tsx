import React from 'react';
import styles from './styles.module.scss';

const Login = () => {
  function handleLogin(event) {
    event.preventDefault();
    console.log('handle login');
  }

  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={handleLogin}>
        <span>Login</span>
        <input type="text" name="login" />
        <span>Senha</span>
        <input type="text" name="password" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
