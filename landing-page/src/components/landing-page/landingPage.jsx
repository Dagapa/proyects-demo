import styles from './landingPage.module.css';
import illustration from '../../assets/illustration-mockups.svg';
import logo from '../../assets/logo.svg';
import { Button } from '../button/button';
import { Card } from '../card/card';
import imagenCard1 from '../../assets/illustration-grow-together.svg';
import imagenCard2 from '../../assets/illustration-flowing-conversation.svg';
import imagenCard3 from '../../assets/illustration-your-users.svg';
import logofooter from '../../assets/logo-footer.svg';


export const LandingPage = () => {

  //Que es un aspect ratio?

  return (
    <div className={styles.landingPage_container}>
      <div className={styles.home_container}>
        <div className={styles.header_container}>
          <img src={logo}></img>
          <button className={styles.header_button}>Try It Free</button>
        </div>
        <div className={styles.content_container}>
          <div className={styles.section_container}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae autem nesciunt aut totam, nobis mollitia pariatur, ut, asperiores aspernatur sit labore. Aperiam est porro distinctio laborum veniam, voluptas atque!</p>
            <Button text="Get Started For Free" />
          </div>
          <div className={styles.image}>
            <img src={illustration}></img>
          </div>
        </div>
      </div>
      <div className={styles.cards_container}>
        <Card
          title="Grow Together"
          text="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "
          images={imagenCard1} />
        <Card
          title="Flowing Conversations"
          text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          images={imagenCard2}
          display="flex"
          flexDirection="row-reverse" />
        <Card
          title=" Your Users"
          text="  It takes no time at all to integrate Huddle with your app's authentication solution. 
          This means, once signed in to your app, your users can start chatting immediately."
          images={imagenCard3}
        />
        
      </div>
      <div className={styles.footer_container}>
        <div className={styles.card_footer}>
          <Card />
        </div>
        <div className={styles.logo_footer}>
            <img src={logofooter}></img>
        </div>
        <div className={styles.contact_container}>

        </div>
        <div className={styles.copyright_container}>
          <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
        </div>
      </div>
    </div>
  )

}