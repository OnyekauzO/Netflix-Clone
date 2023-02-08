import axios from 'axios'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './Row.css'
import movieTrailer from "movie-trailer"

const Row = ({title, fetchUrl, portraitPoster = false}) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    const [movies, setmovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("");
    useEffect(() => {
        fetchmovies()
    }, [fetchUrl])
    
    const fetchmovies = async () => {
        await axios.get(fetchUrl)
        .then((response) => {
            console.log(response.data.results)
            setmovies(response.data.results)
        }).catch((error) => {
            console.log(error)
        })
        console.log(movies)
        return;
    }
    const opts = {
      height: '390',
      width: '100%',
      transition: "all 0.4s ease",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
      // if (trailerUrl){
      //   settrailerUrl(false);
      // }else if (!trailerUrl){
      //   settrailerUrl(true);
      // }

      if (trailerUrl){
        settrailerUrl("");        
      }else{
        movieTrailer(movie?.name ||  movie.title || movie?.original)
        .then((url) => {
          // https://www.youtube.com/watch?v=YL1mCanx2lY
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error)
        })
      }
    };


    return (
        <div className='row'>
          <h2 className='row_title'>{title}</h2>
          <div className='row_posters'>
            {
              movies.map((movie) => (
                  <img key={movie.id} onClick={()=> handleClick(movie)} className={portraitPoster ? 'row_posterPortriat row_poster' : 'row_poster'} src={`${baseUrl}${portraitPoster ? movie.poster_path: movie.backdrop_path}`}  alt={movie.name} /> 
              ))
            }
          </div>
          {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} className="ytPopup" /> : null}
        </div>
    )
}

export default Row