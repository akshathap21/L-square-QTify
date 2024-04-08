import "./Logo.module.css"
import LogoImage from "../assets/logo.png"
const Logo =()=>{
    return(
        <div><img src={LogoImage} alt="qtify-logo" width={67}/></div>
    )
}

export default Logo