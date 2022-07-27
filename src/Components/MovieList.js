import { useState } from 'react';
import '../Styles/MovieList.css'
import { Moviecard } from './MovieCard';

export const MovieList = (props) => {
    const [selectMovie , onMovieSelect] =  useState();
    let MovieData = props.data
    // console.log(MovieData);

    let ListOfData = {}
    
    ListOfData = MovieData?.length ? MovieData.map( (data,index) => <Moviecard key={index} data={data} onMovieSelect={onMovieSelect}></Moviecard> ) : 'No Movie Found';   
    return(
        <div className="MovieListContainer">
            {ListOfData}
        </div>
    )
}