import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPage = () => {
    const [allSongs,setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [song, setPlayerSong] = useState(null);
    const loadSongs = async () => {
        setSongs(await getSongs('Latest Songs'));}
        useEffect(() => {
        loadSongs();
     }, [])
     const togglePlayer =(flag,songarg)=>{
        console.log('Flag',flag,'song object',songarg);
        setPlayerSong(songarg);
        setFlag(flag);
        
     }
    const getArtistName= async (artistName)=>{
        console.log('Rec artist name',artistName);
        setSongs(await getSongs(artistName));
        // Here you can implement the logic to fetch songs based on the artist name
    }
    const jsx= (<><Search fn = {getArtistName}/>
            <Songs fn = {togglePlayer} allsongs ={allSongs}/></>
    );
    return(
        <div className="container">
            <h1 className="alert alert-info text-center">Music Mania</h1>
        
            {flag?<Player fn= {togglePlayer} song ={song}/>:jsx}
        </div>);
}