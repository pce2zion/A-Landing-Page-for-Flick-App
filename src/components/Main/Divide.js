import styles from "./Divide.module.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const Divide = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
            }, [])
    return ( 
        <div data-aos="zoom-out"className={styles.divide}>
            <div className={styles.divide1}>
                    <h1 data-aos="zoom-out"className={styles.divideh1}>Join Flick business today!</h1>
                    <p data-aos="zoom-out"className={styles.dividep}>Flick is simple to set up. Just download the app and you're ready to go.</p>
                    <div data-aos="zoom-out" className={styles.dividebtn}>Get started</div>
            </div>
            <div data-aos="zoom-out"className={styles.divide2}>
                <div data-aos="zoom-out"className={styles.divide21}>
                    <h1 className={styles.divide2h1}>Download the app</h1>
                    <div className={styles.divflex}>
                        <div className={styles.divide2div1}>01</div>
                        <p className={styles.divide2p}>Join our 22,000 users and start managing your money with ease today.</p>
                    
                    </div>
                    
                </div>
                <div className={styles.divide22}>
                    <h1 className={styles.divide2h1}>Securely link your account</h1>
                    <div className={styles.divflex}>
                    <div className={styles.divide2div2}>02</div>
                    <p className={styles.divide2p}>From cash to investments, you can easily connect all your accounts.</p>
                    </div>  
                    
                </div>
                <div className={styles.divide23}>
                    <h1 className={styles.divide2h1}>Start transacting</h1>
                    <div className={styles.divflex}>
                    <div className={styles.divide2div3}>03</div>
                    <p className={styles.divide2p}>Experience a fresh way to manage your money and transact faster today.</p>
                    </div>
                </div>
                    
            </div>

        </div>
     );
}
 
export default Divide;