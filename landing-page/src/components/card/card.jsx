import styles from './card.module.css';

export const Card = ({title, text, images, display, flexDirection}) => {
  return (
    <div className={styles.card_container} style={{display, flexDirection}}>
      <div className={styles.section_container}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.images_container}>
      <img src={images}></img>
      </div>
    </div>
  )
}