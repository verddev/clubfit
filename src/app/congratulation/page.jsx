import React from 'react';
import styles from './Thanks.module.css'
import Footer from '../components/Footer';
import Link from 'next/link';


const congratulation = () => {
  return (
    <div>
      <main className={styles.main}>
        <h1 className='h1'>Obrigado por sua compra!</h1>
        <p className='p'>
          Agradecemos por adquirir nosso eBook: Ganho de Massa Muscular com Alimentos Caseiros.
          Esperamos que ele seja muito útil na sua jornada de transformação.
        </p>
        <p className='p'>
          Gostaríamos muito de ouvir sobre os seus resultados após 3 meses de uso.
          Por favor, envie-nos um e-mail com seus resultados para que possamos compartilhar
          seu sucesso com outros.
        </p>
        <Link href="mailto:ganhodemassa2024@gmail.com" legacyBehavior><a  className={styles.emailLink}>enviar</a></Link>
        <h2>ou copie o email: ganhodemassa2024@gmail.com </h2>
      </main>
      <Footer />
    </div>
  );
};

export default congratulation;
