import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios';
import movieTrailer from "movie-trailer"

const Banner = () => {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  let API_KEY = "e9db1b933e8bd4f1e051b7fc90cb6964"
  let POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-CA&page=1`
  // backgroundImage: `url("https://www.thecosmiccircus.com/wp-content/uploads/2022/08/day-shift-review-banner.png")`,

  function truncate(string, n){
    // if(string.length >= n){
    // }else{
    //   return string;
    // }
    // return string.slice(0, n) +'...'
    return string?.length > n ? string.substr(0, n - 1) + "...": string;
  }

  useEffect(() => {
    async function fetchMovie (){
      await axios.get(POPULAR_MOVIES)
      .then((response)=> {
        console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
        setmovies(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
      });
    }
    fetchMovie();
  }, [POPULAR_MOVIES])

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
    <div>

    <header className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
      backgroundPosition: "center center",
      // filter: "brightness(50%)",
      // opacity: 0.5,
      // backgroundColor: "black"
      // backdropFilter

    }}>

        <div className="banner--fadeTop">
        <div className="banner_contents">
          <h1 className="banner_name">{movies.title}</h1>
          <div className="banner_btns">
          <h1 className="banner_description">{truncate(movies.overview, 150)}</h1>
            <button className='banner_btn' onClick={()=> handleClick(movies)}>Play</ button>
            <button className='banner_btn'>More Info</button>
          </div>
        </div>
        </div>
        {/* <div className="banner--fadeBottom"></div> */}
    </header>
    </div>
    
  )
}

export default Banner