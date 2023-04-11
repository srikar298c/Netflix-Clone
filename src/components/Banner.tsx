import React, {useEffect, useState} from 'react';
import {Movie} from "../../typings";
import Image from "next/image";

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
    const {movie, setMovie} = useState<Movie | null>(null)
    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )

    }, [netflixOriginals])
    return (
        <div>
            <div><Image src={`${baseUrl}${movie?.backdrop_pat || movie?.poster_path}`} alt={}/></div>
        </div>
    );
}

export default Banner;