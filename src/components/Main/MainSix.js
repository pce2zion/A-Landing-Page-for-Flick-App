import styles from "./MainSIx.module.css"
import loyalty from "../../UI/images/loyalty.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const MainSix = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
            }, [])
    return ( 
        <div className={styles.main6}>
        <img data-aos="fade-left"style={{position: "relative", top:"500px", left:"755px"}} src= {loyalty} alt="multiple"/> 
        <div>
         </div>
            <h2 className={styles.loyalty}>Access digital loyalty cards and earn customer points</h2>
            <p className={styles.main6p}>Get rewarded by your favorite merchant with digital loyalty cards and 
            earn customer points to shop more. With our app, no more unused/untraceable loyalty customer points.</p>
        </div>
     );
}
 
export default MainSix;