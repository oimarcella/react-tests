import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./bytebank.svg";
import avatarUsuario from "./avatar.svg";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.usuario}>
          <p>Joana Fonseca Gomes</p>
          <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
