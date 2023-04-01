import styles from "./MainFive.module.css"
import overview from "../../UI/images/overview.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const MainFive = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
            }, [])
    return ( 
        <div className={styles.main5}>
        <img data-aos="fade-right"style={{position: "relative", top:"280px", left:"85px"}} src= {overview} alt="multiple"/> 
        <div>
         </div>
            <h2 data-aos="fade-up"className={styles.overview}>Your Financial Overview at a glance</h2>
            <p data-aos="fade-up" className={styles.main5p}>From the big picture to the tiny details, Flick gives you  the full overview of all your finances. Discover where your money really goes each month thanks to powerful insights about your spending habits.</p>
        </div>
     );
}
 
export default MainFive;