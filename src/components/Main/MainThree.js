import styles from "./MainThree.module.css"
import multiple from "../../UI/images/multiple.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const MainThree = () => {
    useEffect(()=>{
AOS.init({duration:2000})
    }, [])
    return ( 
        <div className={styles.main3}>
        <img className={styles.main3img} data-aos="fade-right" style={{position: "relative", top:"30px", left:"115px"}} src= {multiple} alt="multiple"/> 
        <div>
         </div>
            <h2 data-aos="fade-down" className={styles.multiple}>No need for multiple apps</h2>
            <p data-aos="fade-down" className={styles.main3p}>Easily connect all your accounts. From cash and credit to loans and investments, you can see your complete financial picture on Flick.</p>
        </div>
     );
}
 
export default MainThree;