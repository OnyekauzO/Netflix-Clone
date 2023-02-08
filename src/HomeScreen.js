import React from 'react'
import Nav from './Nav'
import './HomeScreen.css'
import Banner from './Banner'
import Row from './Row'

const HomeScreen = () => {
  const API_KEY = "e9db1b933e8bd4f1e051b7fc90cb6964"
  const requests = {
    POPULAR_MOVIES: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-CA&page=1`,
    TRENDING_TODAY: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&timezone=America%20-%20Toronto`,
    NEW_RELEASES: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-CA&page=1`,
    NETFLIX_ORIGINALS: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-CA&timezone=America%20-%20Toronto&with_networks=213`,
    TRENDING_WEEK: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&timezone=America%20-%20Toronto`
  
  }
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
        <Row title="Trending Today" fetchUrl={requests.TRENDING_TODAY}/>
        <Row title="New Releases" fetchUrl={requests.NEW_RELEASES}/>
        <Row title="Netflix Originals" fetchUrl={requests.NETFLIX_ORIGINALS} portraitPoster/>
        <Row title="Trending This Week" fetchUrl={requests.TRENDING_WEEK}/>
        {/* <Row1 fetchUrl={requests.POPULAR_MOVIES}/> */}


{/* <h1 style={{backgroundColor: "red", position: 'absolute', top: "96vh", marginLeft: "35px", paddingBottom: "200px", marginTop: "1rem"}}>test</h1> */}


    </div>
  )
}

export default HomeScreen