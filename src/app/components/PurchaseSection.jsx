import React from 'react';
import styles from './css/PurchaseSection.module.css';
import Link from 'next/link';

const PurchaseSection = () => (
  <section className={styles.purchase}>
    <h2>Pronto para Transformar Sua Alimentação?</h2>
    <Link href="https://pay.kiwify.com.br/suNMS15" legacyBehavior><a rel="noreferrer" target="_blank" className={`${styles.btn} ${styles['primary-btn']}`}>Compre Agora e Comece Hoje!</a></Link>
  </section>
);

export default PurchaseSection;
