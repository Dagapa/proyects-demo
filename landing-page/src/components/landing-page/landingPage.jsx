import styles from './landingPage.module.css';
import illustration from '../../assets/illustration-mockups.svg';
import logo from '../../assets/logo.svg';
import { Button } from '../button/button';
import { Card } from '../card/card';
import imagenCard1 from '../../assets/illustration-grow-together.svg';
import imagenCard2 from '../../assets/illustration-flowing-conversation.svg';
import imagenCard3 from '../../assets/illustration-your-users.svg';
import logofooter from '../../assets/logo-footer.svg';
import iconoCorreo from '../../assets/icon-email.svg';
import iconoLocation from '../../assets/icon-location.svg';
import iconoPhone from '../../assets/icon-phone.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';



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
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion. </p>
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
        <div className={styles.card_container}>
          <div className={styles.images_container}>
            <img src={imagenCard2}></img>
          </div>
          <div className={styles.section_container}>
            <h2>Flowing Conversations</h2>
            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
          </div>
          <div>
          </div>
        </div>
        <Card
          title=" Your Users"
          text="  It takes no time at all to integrate Huddle with your app's authentication solution. 
          This means, once signed in to your app, your users can start chatting immediately."
          images={imagenCard3}
        />

      </div>
      <div className={styles.footer_container}>
        <div className={styles.card_footer}>
          <Card title=" Ready To Build Your Community?" flexDirection="column" alignItems="center" button={true} />
        </div>
        <div className={styles.section_footer}>
          <div className={styles.logo_footer}>
            <img src={logofooter}></img>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.contact_column1}>
              <div className={styles.contact_section_container}>
                <img src={iconoLocation}></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua</p>
              </div>
              <div className={styles.contact_section_container}>
                <img src={iconoPhone}></img>
                <p>+1-543-123-4567</p>
              </div>
              <div className={styles.contact_section_container}>
                <img src={iconoCorreo}></img>
                <p>example@huddle.com</p>
              </div>
            </div>
            <div className={styles.contact_column}>
              <p>About Us</p>
              <p>What We Do</p>
              <p>FAQ</p>
            </div>
            <div className={styles.contact_column}>
              <p>Career</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
            <div className={styles.contact_column_social}>
              <div className={styles.icon_container}>
                <img src={facebook}></img>
              </div>
              <div className={styles.icon_container}>
                <img src={twitter}></img>
              </div>
              <div className={styles.icon_container}>
                <img src={instagram}></img>
              </div>
            </div>
          </div>
          <div className={styles.copyright_container}>
            <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  )

}