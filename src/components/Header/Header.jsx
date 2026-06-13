import React from "react";
import styles from "./Header.module.css";

export default function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.center}>
        <h1 className={styles.title}>World Dashboard</h1>
      </div>
    </header>
  );
}