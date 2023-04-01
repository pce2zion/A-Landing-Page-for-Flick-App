import styles from "./Main.module.css"
import background from '../../UI/images/mainbg.jpg'
import hero from '../../UI/images/hero.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import MainTwo from "./MainTwo";
import MainThree from "./MainThree";
import MainFour from "./MainFour";
import MainFive from "./MainFive";
import MainSix from "./MainSix";
import MainSeven from "./MainSeven";
import BackgroundTwo from "./BackgroundTwo";
import Slider from "./Slider";
import Divide from "./Divide";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../footer/Footer";

const Main = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return ( 
        <div className={styles.main}>
            <Container>
     
            <Row>
       <Col xs={12} md={4}>
            {
                !matches ? (
                   <div className={styles.main1}>

                   </div>
                ) : (

                    <div className={styles.main2}>
                        <img src={hero} alt="hero" />
                        
                    </div>
                   
                )
            }
                <div classname= {styles.bg}>
                     <img src= {background} style={{height: "640px", position: "relative", left: "58px", borderRadius: "15px"}} alt="mainbg" />
                     <h1 className={styles.mainword}>Payment has never <br/> been this <span className={styles.span}>easy</span></h1>
                     <p className={styles.mainwordp}>One secure platform to pay, get paid, and manage all your finances <br/> better!</p>
                </div>

                <div className={styles.btn1}>Join as a User</div>
                <div className={styles.btn2}>Open a Business Account</div>

                <MainTwo/>
                <MainThree/>
                <MainFour/>
                <MainFive/>
                <MainSix/>
                <MainSeven/>
                <BackgroundTwo/>
                <Slider/>
                <Divide/>
                {/* <Footer/> */}
                </Col>
           </Row>
    
   

           
        </Container>
            
        </div>
     );
}
 
export default Main;