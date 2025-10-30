import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario e compartilhe suas historias</p>
      <form>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Nome do usuario"
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do usuario"
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <span>Confirmacao de senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
