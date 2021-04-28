import React from 'react';
import { useHistory } from 'react-router';
import styles from './styles.module.scss';

const Login = () => {
  const history = useHistory();

  function handleLogin(event) {
    event.preventDefault();
    console.log('handle login');
    history.push('home');
  }

  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={handleLogin} action="POST">
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
