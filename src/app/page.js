import React from 'react';
import styles from './page.module.css'; // Importe o arquivo CSS Module

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DropdownSection from './components/DropdownSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import GuaranteeSection from './components/GuaranteeSection';
import PurchaseSection from './components/PurchaseSection';

const App = () => {
  return (
    <div className={styles.App}> {/* Use styles.App para aplicar estilos */}
      <HeroSection />
      <FeaturesSection />
      <DropdownSection />
      <TestimonialsSection />
      <FAQSection />
      <GuaranteeSection />
      <PurchaseSection />
    </div>
  );
};

export default App;
