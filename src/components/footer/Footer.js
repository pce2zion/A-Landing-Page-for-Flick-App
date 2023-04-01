import styles from "./Footer.module.css"
import Logo from "../../UI/icons/logo2.svg"
import android from "../../UI/images/android.svg"
import apple from "../../UI/images/apple.svg"
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div >
                <img src={Logo} alt="flick logo" />
                <p>One secure platform to pay, get paid, and manage all your finances better!</p>
                <img src={apple} alt="flick logo" />
                <img src={android} alt="flick logo" />
            </div>

            <div className={styles.footerflex1}>
                <div >
                <p>Company</p>
                <ul>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>FAQ's</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
               </div>

               <div>
                <p>Developers</p>
                <ul>
                    <li>Overview</li>
                    <li>API Documentation</li>
                    <li>Support</li>
                    
                </ul>
               </div>

               <div>
                <p>Address</p>
                <p>Nideria: 6th Floor, Landmark Towers, 5B Water Coporation Road, Victoria Island, Lagos</p>
                <p>United States: 2261 Market Street 2261 Market Street #4664 San Francisco CA 9114</p>
               </div>
               
            </div>
           

            
        </div>
     );
}
 
export default Footer;