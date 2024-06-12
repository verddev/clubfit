import React from 'react';
import styles from './css/HeroSection.module.css';

const HeroSection = () => (
  <section className={styles.hero}>
    <h1>Ganhe Massa Muscular com Alimentos Caseiros</h1>
    <p>Transforme sua rotina alimentar e alcance seus objetivos musculares sem suplementos caros!</p>
    <a href="https://pay.kiwify.com.br/v17fyAA" rel="noreferrer" target="_blank" className={`${styles.btn} ${styles['primary-btn']}`}>Compre Agora</a>
  </section>
);

export default HeroSection;
