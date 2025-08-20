import {Song} from './Song';
export const Songs = ({fn,allsongs})=>{
    console.log('*****All songs', allsongs);
    return(<>
           {allsongs.map((currentSong,index)=><Song fn ={fn} key={index} song = {currentSong}/>)}

        
        
        </>
    )
}