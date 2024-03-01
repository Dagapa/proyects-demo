import styles from './App.module.css'
import { LandingPage } from './components/landing-page/landingPage'

function App() {

  return (
    <div className={styles.app}>
      <LandingPage />
    </div>
  )
}

export default App
