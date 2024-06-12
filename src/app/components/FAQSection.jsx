"use client"
import React, { useState } from 'react';
import styles from './css/FAQSection.module.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'Como funciona o guia?', answer: 'O guia oferece uma abordagem detalhada para ganhar massa muscular com alimentos caseiros, incluindo planos de refeições e dicas práticas.' },
    { question: 'Preciso de suplementos?', answer: 'Não, o guia se concentra em fontes de alimentos naturais e acessíveis para maximizar seus resultados sem a necessidade de suplementos.' },
    { question: 'Para quem é este guia?', answer: 'O guia é ideal para qualquer pessoa que deseja ganhar massa muscular de maneira saudável e econômica, sem recorrer a suplementos caros.' },
    { question: 'Quanto tempo leva para ver resultados?', answer: 'Os resultados podem variar, mas muitos usuários relatam melhorias significativas na força e na massa muscular em poucas semanas.' },
  ];

  return (
    <section className={styles.faqSection}>
      <h2>Perguntas Frequentes</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faq}>
            <button onClick={() => toggleFAQ(index)} className={styles.faqQuestion}>
              {faq.question}
            </button>
            {activeIndex === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
