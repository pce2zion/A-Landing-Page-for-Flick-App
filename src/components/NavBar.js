import classes from './NavBar.module.css'
import Logo from "../UI/icons/logo2.svg"
import ChevronDown from "../UI/icons/chevrondown.svg"
import useMediaQuery from '@mui/material/useMediaQuery';
import NavLogo from "../UI/icons/nav.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {
    const matches = useMediaQuery('(min-width:600px)');
    return ( 

        <div className={classes.nav}>

<Container>
     
     <Row>
       <Col xs={12} md={4}>
       {
                
                !matches ? (
                    <div className={classes.flex}>
                        <img classname = {classes.logo} src={Logo} alt="logo"/>
                        <img src={NavLogo} alt="navlogo" />
                    </div>
                
                ) : (
                    
                    <div className={classes.flex}>
                                <img classname = {classes.logo} src={Logo} alt="logo"/>
                            <ul className={classes.ulflex}>
                                <li><a href='*'>Business</a></li>
                                <li><a href="pricing">Pricing</a></li>
                                <li><a href="about-us">About us</a></li>
                                <li><a href="Business">Developer<img style={{marginTop: "-16px", marginLeft:"75px"}}src={ChevronDown} alt="chevrondown"/></a></li>
                            </ul>
                        </div>     
                
                )
            
            }
      
       </Col>
     </Row>
    
   

           
        </Container>
            
        </div>
        
       
     );
}
 
export default NavBar;