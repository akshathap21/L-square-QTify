import styles from "./HeroSection.module.css"

import headPhoneImg from "../../assets/hero_headphones.png"

const HeroSection=()=>{
    return(
        <div className={styles.herobody} >
            <div className={styles.heroSection}>
            <div>
            <div className={styles.heroText} >100 Thousand Songs, ad-free </div>
            <div className={styles.heroText}>Over thousands podcast episodes</div>
            </div>
           
           <img src={headPhoneImg} alt="headphone-img" width={212} height={212}  />
                    
           </div>
        </div>
    )
}

export default HeroSection