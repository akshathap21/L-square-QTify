import { useState } from "react";
import { CircularProgress } from "@mui/material";
import styles from "../Section/Section.module.css"
import Card from "../Card/Card"
import Carousel from "../Carousel/Carousel";

export default function Section({title, data, type, filterSources}){

    const [caroselToggle, setCarouselToggle] = useState(false);
    const handleToggle=()=>{
      setCarouselToggle((prevState) => !prevState)
    }

  const cardsToRender = data.filter((card)=> card)
console.log("cardsToRender",cardsToRender)
    return(
        <div className={styles.sectionContainer}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!caroselToggle? "Show All": "Collapse All"}
                </h4>
            </div>

      {data===0 ? (<CircularProgress/>):(
        <div>
          {!caroselToggle? (
            <div>
                <Carousel data={cardsToRender} />
            </div>
          ):(
            <div className={styles.wrapper} >
              
              {cardsToRender.map((ele)=>(
               
                <div className={styles.cardStyle}><Card data={ele} type={type} /></div>
                
              ))}
                
            </div>
          )}
        </div>
      )}

        </div>
    )
}