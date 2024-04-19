import './App.css';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Card from './components/Card/Card'
import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchTopAlbums , fetchNewAlbums, fetchSongs} from './api/Api';
import HomePage from './components/HomePage/HomePage';

function App() {

  const [data, setData] = useState({})

  const generateData =(key,source)=>{
    source().then((data)=>{
      setData((prevState) =>{
        return{...prevState, [key]:data}
      })
    })
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    
    
  },[]);

  const {topAlbums=[], newAlbums=[], songs=[]}= data;
  return (
    <div className="App">
      <NavigationBar />
    
      <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
     
    </div>
  );
}

export default App;
