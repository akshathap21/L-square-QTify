import styles from "../Search/Search.module.css"
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg"

const Search =(props)=>{
    return(
        <div >
             <input name="album"  className={styles.search} placeholder={props.placeholder} ></input>
            <button className={styles.searchIconButton} type="submit">
                <SearchIcon />
            </button>
        </div>
    )
}

export default Search;