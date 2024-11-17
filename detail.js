import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie]= useState([]);
    const getMovies = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        console.log(json);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
        <img src={movie.large_cover_image} alt={movie.title}></img>
        <h1>{movie.title}</h1>
        <h3>년도: {movie.year}</h3>
        <h3>별점: {movie.rating}</h3>
        </div>
    );
}

export default Detail;
