import { MovieInfoComponent } from "./MovieInfoComponent";

export function Moviecard(props){
    const {Title , Year , imbdID , Type , Poster} = props.data;
    let CallMovieComponent = () => {
        <MovieInfoComponent></MovieInfoComponent>
    }

    return(<>
        <div className='MovieContainer' onClick={CallMovieComponent()}>
                                        <img className='CoverImage' src={Poster}></img>
                                        <span className='MovieName'>{Title}</span>
                                        <div className='InfoCloumn'>
                                        <span>Year: {Year}</span>
                                        <span>Movie: {Type}</span>
                                        </div>
                                    </div>
    </>)
}