import React, { useState, useEffect } from 'react';
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("iit kharagpur");
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
        getData(e.target.value)
    }
  return (
    <div>
        <nav>
            <div>
                <h1>InfoSprout</h1>
            </div>
            <ul>
                <a>Fresh Picks</a>
                <a>Popular</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Sprout some News here' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Informed. Stay Sprouting.</p>
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