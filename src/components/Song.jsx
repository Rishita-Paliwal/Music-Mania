// eslint-disable-next-line
import { FaPlay, FaPause } from 'react-icons/fa';

import { useState } from 'react';
export const Song=({fn,song})=>{
    console.log(song);
    // eslint-disable-next-line
    const [playerFlag,setPlayerFlag]= useState(false);

    const showPlayer = () => {
        fn(true,song);

    }
    return(<div className="row">
        <div className="col-4">
        <img src={song.artworkUrl100} alt={song.trackName} className="img-fluid" />
    
        </div>
        <div className="col-4">
            {song.artistName} {song.trackName}
            

        </div>
        <div className="col-4">
            <button onClick={showPlayer} className="btn btn-primary"><button>
  <FaPlay size={24} />
</button>

</button>
            

        </div>
        <hr/>
        </div>)
} 