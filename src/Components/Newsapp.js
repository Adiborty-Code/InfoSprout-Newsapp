import React, { useState, useEffect } from 'react';
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "59314da8f5b648c8967d023bb7ad882a";
    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }
    useEffect(()=>{
        getData()
    },[])
    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    const userInput=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with Trendy News</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value='technology'>Technology</button>
            <button onClick={userInput} value='sports'>Sports</button>
            <button onClick={userInput} value='business'>Business</button>
            <button onClick={userInput} value='health'>Health</button>
        </div>

        <div>
        {newsData? <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default Newsapp