"use client"
import React, { useState } from 'react';
import styles from './css/DropdownSection.module.css';

const DropdownSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: 'Proteínas - Os Blocos de Construção dos Músculos', content: 'As proteínas são essenciais para a reparação e crescimento muscular. Descubra fontes caseiras como ovos, frango, feijão e iogurte grego.' },
    { title: 'Carboidratos - A Energia que Você Precisa', content: 'Carboidratos fornecem energia para treinos intensos. Saiba mais sobre batata doce, aveia, arroz integral e frutas.' },
    { title: 'Gorduras Saudáveis - O Combustível para Seus Músculos', content: 'As gorduras são cruciais para a produção hormonal e absorção de vitaminas. Conheça fontes como abacate, nozes e azeite de oliva.' },
    { title: 'Planejamento de Refeições e Dicas Práticas', content: 'Aprenda a montar um plano de refeições balanceado para maximizar o ganho muscular, com dicas práticas e exemplos de planos semanais.' },
  ];

  return (
    <section className={styles.dropdownSection}>
      <h2>Mais Detalhes</h2>
      <div className={styles.dropdownContainer}>
        {sections.map((section, index) => (
          <div key={index} className={styles.dropdown}>
            <button onClick={() => toggleDropdown(index)} className={styles.dropdownButton}>
              {section.title}
            </button>
            {activeIndex === index && <p className={styles.dropdownContent}>{section.content}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DropdownSection;
