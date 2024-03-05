import styles from './button.module.css'

export const Button = ({text, backgroundColor, color, fontSize, padding}) => {

  return (
    <button className={styles.button} style={{backgroundColor, color, fontSize, padding}}>{text}</button>
  )
  
}