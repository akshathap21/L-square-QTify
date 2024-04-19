import { useOutletContext } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import Section from "../Section/Section"
import styles from "../HomePage/HomePage.module.css"
import { fetchGenres } from "../../api/Api";
export default function HomePage(){

    const {data} = useOutletContext();
    const {topAlbums, newAlbums,songs} = data;

    return(
        <>
        <HeroSection/>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <hr className={styles.lineSeperator}></hr>
        <Section title="Songs" data={songs} type="songs" filterSources={fetchGenres} />


        </>
    )
}