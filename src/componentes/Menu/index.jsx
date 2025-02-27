import React from 'react';
import styles from './Menu.module.css';

const menuList = [
  'Início',
  'Transferências',
  'Investimentos',
  'Outros serviços',
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      {menuList.map((item, index) => {
        return (
          <div key={item} className={styles.item}>
            <a href="/" className={styles.link}>
              {item}
            </a>
            {index !== menuList.length - 1 && (
              <div className={styles.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
