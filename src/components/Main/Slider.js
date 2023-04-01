
import Avatar from '@mui/material/Avatar';
import styles from "./Slider.module.css"
import Rating from '@mui/material/Rating';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import tems from "../../UI/images/member3.jpeg"
import oyin from "../../UI/images/member4.jpeg"
import { grey, yellow } from '@mui/material/colors';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


const Slider = (props) => {
        useEffect(()=>{
                AOS.init({duration:2000})
                    }, [])
    return ( 

        
            <div className={styles.slider}>

                
                 <ArrowBackIosNewRoundedIcon className={styles.chevron} color="disabled"/>
                    <div data-aos="zoom-in" className={styles.slider1}>
                       
                        <div className={styles.photo}>
                                <Avatar data-aos="zoom-in" alt="Remy Sharp" src={tems} sx={{ width:"150px", height:"150px" }} className={styles.avatar}/>   
                        </div>
                        <div data-aos="zoom-in"className={styles.cursor}>  <FormatQuoteIcon sx={{ color: grey[500] }} /> </div>

                        <p data-aos="flip-right" className={styles.sliderp} >Temitope Ikushika</p>

                        <Rating data-aos="fade-left"name="half-rating-read" defaultValue={2.5} precision={0.5} sx={{ color: yellow[700] }} className={styles.sliderRate}/>

                                <p data-aos="flip-right" className={styles.sliderp2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos blanditiis vero illo 
                                   quasi sit. Necessitatibus quia ullam inventore quasi.</p>
                                
                    </div>


                                <div data-aos="zoom-in" className={styles.slider1}>
                                  
                                    <div className={styles.photo}>
                                         <Avatar data-aos="zoom-in" alt="Remy Sharp" src={oyin} sx={{ width:"150px", height:"150px" }}className={styles.avatar} />
                                    </div>

                                    <div data-aos="zoom-in" className={styles.cursor}>  <FormatQuoteIcon sx={{ color: grey[100] }} /> </div>
                                    <p data-aos="flip-right" className={styles.sliderp}>Oyinda Akinsola</p>

                                    <Rating data-aos="fade-left"name="half-rating-read" defaultValue={2.5} precision={0.5} className={styles.sliderRate}/>
                                            <p data-aos="flip-right" className={styles.sliderp2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos blanditiis vero illo 
                                            quasi sit. Necessitatibus quia ullam inventore quasi.</p>
                             
                    </div>
                    <ArrowForwardIosRoundedIcon className={styles.chevron} />
            </div>
       
     );
}
 
export default Slider;