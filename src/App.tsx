import React from 'react';
import styles from './styles.module.scss';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import './global.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
