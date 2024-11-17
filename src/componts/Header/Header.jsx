import React, { useEffect, useState } from 'react'
import Reasult from '../resutls/Reasult.jsx'
import Error from '../Error/Errors.jsx'


const Header = () => {
  const [data,setData] = useState({
    "url":""
  });

  const [result,getResult] = useState({});

  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${data.url}&lang=en&engine=2`

  const options = {
    method:'GET',
    headers:{
      'x-rapidapi-key':"2a2961cf7fmsh84487a4d7003b41p15c518jsn2d978aea7772",
      'x-rapidapi-host':"article-extractor-and-summarizer.p.rapidapi.com"
    }
  };

  const getData = async() => {
    try {
      const response = await fetch(url,options);
      const results = await response.json();
      console.log(results)
      getResult({
        "ok":true,
        "summary":results.summary
      })
    } catch (error) {
      console.log(error)
    }
  }

  const dataStore=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  return (
    <div className="text-center pt-11 h-[80vh] bg-gradient-to-b from-slate-100 to-blue-300">
      <div className="">
        <input type="url" name="url" value={data.url} placeholder='Enter Url / SongId for Download' className="w-[400px] h-[40px] mr-4 shadow-lg outline-none rounded pl-3 max-sm:w-[250px]" onChange={dataStore}/>
        <button type="submit" className="bg-blue-400 h-[40px] w-[100px] text-zinc-50 rounded" onClick={()=>getData()}>Search</button>
      </div>
      <div className="w-full mt-5">
        <h1 className="text-zinc-600 font-sans">Hello,This is Spotify songs Downloader</h1>
      </div>
      <div className="">
        {result.ok?<Reasult summary={result.summary}/>:<Error message={result.ok}/>}
      </div>
    </div>
  )
}

export default Header
