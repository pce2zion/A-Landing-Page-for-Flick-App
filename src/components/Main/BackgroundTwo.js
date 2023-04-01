import styles from "./BackgroundTwo.module.css"
import background from '../../UI/images/mainbg.jpg'
import video from '../../UI/images/video.svg'
import apple from '../../UI/images/apple.svg'
import android from '../../UI/images/android.svg'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"




const BackgroundTwo = () => {
     useEffect(()=>{
          AOS.init({duration:2000})
              }, [])
   
    return ( 
       <div >
                <div classname= {styles.bg}>
                     <img  data-aos="zoom-in" src= {background} style={{height: "640px", position: "relative", top:"810px",left: "58px", borderRadius: "15px"}} alt="mainbg" />
                     <p data-aos="zoom-in" className={styles.bg2p}>DOWNLOAD THE FLICK APP</p>
                     <h1 data-aos="zoom-in" className={styles.bg2}>Start making confident <br/> <span className={styles.spanbg}>money moves </span>today</h1>
                    
                     <img data-aos="zoom-in" className={styles.videobg} src={video} alt="videoplayback"/>
                     <div data-aos="zoom-in"className={styles.btn1bg}><img  src={apple} alt="videoplayback"/></div>
                <div data-aos="zoom-in"className={styles.btn2bg}><img  src={android} alt="videoplayback"/></div>
                   
                </div>

                

            
        </div>
     );
}
 
export default BackgroundTwo;