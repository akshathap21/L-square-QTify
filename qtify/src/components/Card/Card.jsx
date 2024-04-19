import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styles from '../Card/Card.module.css'


const Card=({data, type}) =>{
  
  const follows = data.follows +" Follows"
  const likes = data.likes + " Likes"
  //  console.log("types",type)
       
       
   
   return( 
   <>
   <div className={styles.card}>
    <div className={styles.image}>
        <img src={data.image} alt="img"  />
    </div>
    
    
      
        <Stack direction="row"  > 
        <div className={styles.chipDiv} >
        {type==="album"?(
        <Chip className={styles.chipStyle} label={ follows} variant="outlined" />
       ):(
        <Chip className={styles.chipStyle} label={likes} variant="outlined" />
       )
     }
        </div>   
        </Stack>
    
    
    <div className={styles.albumTitle}><p>{data.title}</p></div>
   </div>
   
    </>)
  }

  export default Card