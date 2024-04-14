import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styles from '../Card/Card.module.css'


const Card=({data, type}) =>{
    console.log("data, type" , data,type)
    const label=data.follows + " Follows" ;
   return( 
   <>
   <div className={styles.card}>
    <div className={styles.image}>
        <img src={data.image} alt="img"  />
    </div>
    <div className={styles.chipDiv} >
      
        <Stack direction="row"  > 
        <Chip className={styles.chipStyle}  label={label} variant="outlined" />
        </Stack>
    </div>
    <div className={styles.albumTitle}><p>{data.title}</p></div>
   </div>
   
    </>)
  }

  export default Card