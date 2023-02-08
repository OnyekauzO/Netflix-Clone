import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Row1 = (props) => {
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    const [movies, setmovies] = useState([])
    useEffect(() => {
        fetchMovies()
    }, [])
    

    const fetchMovies = async ()=>{
        await axios.get(props.fetchUrl)
        .then((response)=>{
            console.log(response.data.results)
            setmovies(response.data.results)
        }).catch((error) => {
            console.log(error)
        })
        console.log(movies);
        return;
    }
    // const fetchTrendingToday = async () => {
        //     await axios.get(TRENDING_TODAY)
    //     .then((response) => {
    //         // console.log(response.data.results[`...results`])
    //         // console.log(response.data.results[19])
    //         // setTrendingToday(response.data.results[20])
    //         console.log(response.data.results)
    //         setTrendingToday(response.data.results)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    //     console.log(TrendingToday)
    //     return;
    // }
    console.log(movies);

    return (
        <div>
            {/* <div style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${TrendingToday.poster_path}")`, height: "100vh", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "contain"}}></div> */}
            {/* <img src={`https:/image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg`}  alt="" /> */}
            {/* {
            TrendingToday.map((today, index) => (
                <img src={`${baseUrl}${today.poster_path}`}  alt={TrendingToday.name} /> 
            ))
            }; */}
            <h1>{props.title}</h1>
            {
                movies.map((movie, index)=>{
                <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
                })
            }

        {/* <img src={`${myObject.iconmage.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg.path}/someConstantText.${myObject.icon.suffix}`}/> */}
        </div>
    )
}

export default Row1