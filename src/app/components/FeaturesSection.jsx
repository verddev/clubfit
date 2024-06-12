import React from 'react';
import styles from './css/FeaturesSection.module.css';

const FeaturesSection = () => (
  <section className={styles.features}>
    <h2 className={styles.h2}>O Que Você Vai Aprender</h2>
    <div className={styles.featureCards}>
      <div className={styles.featureCard}>
        <h3>Ciência do Ganho Muscular</h3>
        <p>Compreenda a hipertrofia muscular e a importância da nutrição.</p>
      </div>
      <div className={styles.featureCard}>
        <h3>Fontes Caseiras de Proteínas</h3>
        <p>Descubra alimentos essenciais para a construção muscular.</p>
      </div>
      <div className={styles.featureCard}>
        <h3>Carboidratos para Energia</h3>
        <p>Conheça fontes de energia sustentada para treinos intensos.</p>
      </div>
      <div className={styles.featureCard}>
        <h3>Gorduras Saudáveis</h3>
        <p>Aprenda a incorporar gorduras saudáveis na sua dieta.</p>
      </div>
      <div className={styles.featureCard}>
        <h3>Planejamento de Refeições</h3>
        <p>Crie planos de refeições personalizados para otimizar o ganho muscular.</p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
