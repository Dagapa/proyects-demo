import styles from './button.module.css'

export const Button = ({text, backgroundColor, color}) => {

  return (
    <button className={styles.button} style={{backgroundColor, color}}>{text}</button>
  )
  
}