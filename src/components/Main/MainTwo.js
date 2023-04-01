import classes from "./MainTwo.module.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const MainTwo = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
            }, [])
    return ( 
        <div className={classes.main2}>
            <div>
                <h2 data-aos="fade-up">Customers all over Nigeria trust Flick to transact faster</h2>
            </div>
            <div>
            <p data-aos="fade-up" className={classes.main2p}>Connect your bank accounts, view your net worth in a glance and make contactless payment</p>
                <div data-aos="fade-left" className={classes.list}>
                    <h1>20<span className={classes.spanbrr}> +</span></h1> <br /> <span className={classes.spanbr}>Bank integrations</span> 
                    <h1>$2M<span className={classes.spanbre}> +</span></h1> <br /><span className={classes.spanbr}>Transactions processed</span> 
                    <h1>72k<span className={classes.spanbre}> +</span></h1> <br /><span className={classes.spanbr}>Transactions completed</span> 
                </div>
            </div>
            
        </div>
     );
}
 
export default MainTwo;