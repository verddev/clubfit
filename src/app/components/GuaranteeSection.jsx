import React from 'react';
import styles from './css/GuaranteeSection.module.css';

const GuaranteeSection = () => (
  <section className={styles.guarantee}>
    <h2>Satisfação Garantida</h2>
    <p>Se você não estiver satisfeito com os resultados, 7 dias para devolvemos seu dinheiro. Sem perguntas, sem complicações.</p>
    <a target='_blank' rel="noreferrer" href="https://pay.kiwify.com.br/suNMS15" className={`${styles.btn} ${styles['primary-btn']}`}>Compre Agora com Confiança</a>
  </section>
);

export default GuaranteeSection;
