import "./Logo.module.css"
import styles from "./Logo.module.css"
import LogoImage from "../assets/logo.png"
const Logo =()=>{
    return(
        <div className="logo-container"><img className={styles.logoimg} src={LogoImage} alt="qtify-logo" /></div>
    )
}

export default Logo