import styles from './card.module.css';

export const Card = ({ title, text, images, display, flexDirection, button, alignItems }) => {

  return (
    <div className={styles.card_container} style={{display, flexDirection, alignItems}}>
      <div className={styles.section_container}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.images_container}>
        <img src={images}></img>
        <div>{button}</div>
      </div>
      <div>
      </div>
    </div>
  )
}