import styles from './App.module.css';
import { AgeCalculator } from './components/age-calculator/ageCalculator';

function App() {
  //las clases no se nombran con mayusculas styles.App ------> styles.app
  return (
    <div className={styles.App}>
      <AgeCalculator />
    </div>
  )
}

export default App
