export const Player =({fn,song})=>{
    console.log('Song object rec',song);
    return(
        <div>
            <button onClick= {()=>{
                fn(false,null);
                <br/>

            }} className="btn btn-success">Back</button>
            <br/>
            <p> <br/>
                <br/>
                <img src={song.artworkUrl100} alt={song.trackName} className="img-fluid" />
                <br/>
                {song?.artistName} {song?.trackName}
                
            </p>
            
            <br/>
    <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
        Your browser does not support the audio element.
        </audio>
        </div>)
}