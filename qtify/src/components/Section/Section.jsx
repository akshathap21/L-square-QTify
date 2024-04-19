import { useEffect, useState } from "react";
import React from "react";
import { CircularProgress } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from "../Section/Section.module.css"
import Card from "../Card/Card"
import Carousel from "../Carousel/Carousel";


export default function Section({title, data, type, filterSources}){
const [filters, setFilters] = useState([{key:"all", label:"All"}])
    const [caroselToggle, setCarouselToggle] = useState(false);

    const [songData,setSongData]=useState([])

//console.log(data,filters)
    const handleToggle=()=>{
      setCarouselToggle((prevState) => !prevState)
    }
    const [value, setValue] = React.useState(0);

    // const handleChange = (value) => {
    //    setValue(value);
    //   console.log(value)
    // };

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
      console.warn(newValue);
      setValue(newValue);
    };

useEffect(()=>{
  if(filterSources){
    filterSources().then((response)=>{
      //const{ data } = response;
      
      setFilters([...filters, ...response]);
      //console.log("useEffect",filters[1].key,data[1].genre.key)
    // const songCardToRender = data.filter((card)=> (card.genre.key === filters[1].key))
      //console.log("songs",songCardToRender)
    // setSongData(...songCardToRender)
     //console.log("songData",songData)
    })
  }
  
},[])

const showFilter = filters.length >1
  const cardsToRender = data.filter((card)=> 
(showFilter && value!==0)  ?card.genre.key===filters[value].key : card )


    return(
        <div className={styles.sectionContainer}>
            <div className={styles.header}>
                <h3>{title}</h3>
                {type==="album" &&
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!caroselToggle? "Show All": "Collapse All"}
                </h4>
}
              
                
            </div>
            {type==="songs" && 
              <div className={styles.songsTab}>
                <Tabs value={value} onChange={handleChange} >
                 { filters.map((ele)=> (

                    <Tab label={ele.label}  style={{color: "white"}} />
                  ))}       

                 </Tabs>
                
              </div>
              }



      {data.length ===0 ? (<CircularProgress/>):(
        <div>
          {/* {type==="songs"? (<div>

            {!caroselToggle? (
              <div>
                  <Carousel data={cardsToRender} type={type} />
              </div>
            ):(
              <div className={styles.wrapper} >
                
                {songData.map((ele)=>(
                 
                  <div className={styles.cardStyle}><Card data={ele} type={type} /></div>
                  
                ))}
                  
              </div>
            )} 
         </div>):(
            <div>*/}
             {!caroselToggle? (
              <div>
                  <Carousel data={cardsToRender} type={type} />
              </div>
            ):(
              <div className={styles.wrapper} >
                
                {cardsToRender.map((ele)=>(
                 
                  <div className={styles.cardStyle}><Card data={ele} type={type} /></div>
                  
                ))}
                  
              </div>
            )}
            </div>
      //     )}
         
      //   </div>
      )}

        </div>
    )
}