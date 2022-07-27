import { useEffect, useState } from 'react'
import '../Styles/Header.css'
import { MovieList } from './MovieList';

export const Header = () => {

  const [searchQuery , updateSearchquery] = useState()
  const [timeoutId , updateTimeOutId] = useState();
  const [movieList , updatedMovieList] = useState([])

  const fetchData = (searchString) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.status === 200 && xhr.readyState === 4){
        var responseFromServer = xhr.responseText;
        var JsonData = JSON.parse(responseFromServer);
        // console.log(JsonData.Search);
        updatedMovieList(JsonData.Search);
      }
    }
    xhr.open("GET",`https://www.omdbapi.com/?s=${searchString}&apikey=3ba900a6`)
    xhr.send();
  }

  const onTextChange = (event) => {
      clearTimeout(timeoutId);
      updateSearchquery(event.target.value);
      const timeout = setTimeout(() => {
        console.log(fetchData(event.target.value),500)
      })
  }

   return(<>
        <div className='Container'>
      <header className='Header'>
        <div className='AppName'>
          <img src='https://images.unsplash.com/photo-1634155617372-69e7865ff131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' className='MovieImage' alt={'logo'}></img>
           Movie Prime
        </div>
        <div className='SearchBox'>
        <img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='SearchIcon'></img>
        <input type={'search'} className='search' placeholder='Search Your Movie' onChange={onTextChange}></input>
        </div>
      </header>
    </div>
    <MovieList data={movieList}></MovieList>
    </>)
} 