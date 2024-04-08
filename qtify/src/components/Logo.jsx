import "./Logo.module.css"
import styles from "./Logo.module.css"
import LogoImage from "../assets/logo.png"
const Logo =()=>{
    return(
        <div><img className={styles.logoimg} src={LogoImage} alt="qtify-logo" width={67} height={34}/></div>
    )
}

export default Logo