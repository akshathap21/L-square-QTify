import { useOutletContext } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import Section from "../Section/Section"
import styles from "../HomePage/HomePage.module.css"

export default function HomePage(){

    const {data} = useOutletContext();
    const {topAlbums, newAlbums} = data;

    return(
        <>
        <HeroSection/>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <hr className={styles.lineSeperator}></hr>
        <Section title="Songs" data={newAlbums} type="album" />


        </>
    )
}