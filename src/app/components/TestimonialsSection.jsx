import React from 'react';
import styles from './css/TestimonialsSection.module.css';
import Image from 'next/image'

const TestimonialsSection = () => (
  <section className={styles.testimonials}>
    <h2>Depoimentos</h2>
    <div className={styles.testimonialCards}>
      <div className={styles.testimonialCard}>
        <p>"Simplesmente incrível! As dicas são práticas e os alimentos são fáceis de encontrar. Estou vendo resultados em poucas semanas." - Hellena Silva</p>
      </div>
      <div className={styles.testimonialCard}>
        <Image
              src='/Sem.png'
              alt='Imagem do resultado'
              width={300}
              height={200}
              style={styles.imgResult}/>
        
        <p>"Este guia transformou minha alimentação e meus resultados na academia! Recomendo a todos que querem ganhar massa muscular sem gastar muito". - Felipe Gabriel</p>
      </div>
      <div className={styles.testimonialCard}>
        <p>"Nunca pensei que seria possível ganhar músculos com uma dieta tão acessível. Este guia é um divisor de águas!" - Alison Galdino</p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
