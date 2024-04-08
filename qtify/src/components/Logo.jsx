import  "./Logo.module.css"
import LogoImage from "../assets/logo.png"
const Logo =()=>{
    return(
        <div style={{ marginLeft: "32px",display :"flex",
            alignItems: "center",}}  ><img  src={LogoImage} alt="logo"  width={67} height={34} /></div>
    )
}

export default Logo