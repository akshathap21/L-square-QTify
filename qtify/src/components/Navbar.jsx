import Box from "@mui/material/Box";
import Button from "./Button";
import Logo from "./Logo";
import Search from "./Search/Search";
//import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"


const NavigationBar =()=>{

    return(
        <>
        <Box className={styles.navbar}>
            
         <Logo/>
         <Search placeholder="Search an album of your choice"/>

         <Button  text="Give Feedback"/>
        </Box>
        </>
    )
}

export default NavigationBar 