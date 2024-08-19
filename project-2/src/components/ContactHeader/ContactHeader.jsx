import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={` ${styles.contactus_section}`}>

        <h1>CONTACT US</h1>
        <p>Let's connect: We are here to help you and we would love to hear from you anytime!
            whether you have a question, comment, or just want to chat, you can reach out to us through 
            the contact form of this page. 
            THANKYOU FOR VISITING OUR PAGE!
        </p>
    </div>
  )
}

export default ContactHeader;