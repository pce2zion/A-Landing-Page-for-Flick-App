import styles from "./MainFour.module.css"
import faster from "../../UI/images/faster.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

  
const MainFour = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
            }, [])
    return ( 
        <div className={styles.main4}>
        <img data-aos="fade-left" style={{position: "relative", top:"170px", left:"585px", }} src= {faster} alt="multiple"/> 
        <div>
         </div >
            <h2 data-aos="fade-up" className={styles.faster}>Pay anyone 7x faster</h2>
            <p data-aos="fade-up" className={styles.main4p}>Pay friends, businesses and family, no matter what bank account they use. They get credited instantly and securely.</p>
        </div>
     );
}
 
export default MainFour;