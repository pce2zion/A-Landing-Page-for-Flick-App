import styles from "./MainSeven.module.css"
import security from "../../UI/images/security.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const MainSeven= () => {
    useEffect(()=>{
        AOS.init({duration:2000})
            }, [])
    return ( 
        <div className={styles.main7}>
        <img data-aos="fade-right" style={{position: "relative", top:"640px", left:"70px"}} src= {security} alt="multiple"/> 
        <div>
         </div>
            <h2 data-aos="fade-up"className={styles.security}>Security & support you can trust</h2>
            <p data-aos="fade-up"className={styles.main7p}>From the big picture to the tiny details, Flick gives you  the full overview of all your finances. 
            Discover where your money really goes each month thanks to powerful insights about your spending habits.</p>
        </div>
     );
}
 
export default MainSeven;