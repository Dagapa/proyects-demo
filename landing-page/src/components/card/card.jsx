import { Button } from '../button/button';
import styles from './card.module.css';

export const Card = ({ title, text, images, display, flexDirection, button, alignItems }) => {

  return (
    <div className={styles.card_container} style={{ display, flexDirection, alignItems }}>
      <div className={styles.section_container}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.images_container}>
        <img src={images}></img>
        {
          button ? <Button text="Get Started For Free" fontSize="15px" padding="17px 75px" /> : null
        }
      </div>
      <div>
      </div>
    </div>
  )
}