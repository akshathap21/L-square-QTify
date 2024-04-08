import  "./Logo.module.css"
import LogoImage from "../assets/logo.png"
const Logo =()=>{
    return(
        <div className="logo-container"><img  src={LogoImage} alt="logo" width="100vw" height="50vh" /></div>
    )
}

export default Logo