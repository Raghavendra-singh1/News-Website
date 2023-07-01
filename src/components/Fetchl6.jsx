import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Fetchl6 = ({cat}) => {
    const [Data,setData] = useState("");
    const fetchbusiness=async()=>{
        await axios.get(
            "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=22119c0a294141a3adc98f0134fca53d"
        ).then((res)=> setData(res.data.articles));
    };
    useEffect(()=>{
        fetchbusiness();
    },[]);
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column my-4'>
      <h3>All articles published by the Wall Street Journal in the last 6 months, sorted by recent first</h3>
      <div className='my-2'>
        {Data ?  Data.map((items,index) =>(
            
            <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{width:"600p" , boxShadow: "2px 2px 10px silver" , borderRadius:"10px"}}>
                <h5 className='my-1'>{items.title}</h5>
                <img src={items.urlToImage} alt="image" className='img-fluid' style={{width:"100%",height:"300px",objectFit:'cover'}}></img>
                <p>{items.content}</p>
                <p>{items.description}</p>
                <a href={items.url} target='blank'>view More</a>
            </div>
            
        )): "LOADING."}

      </div>
    </div>
  )
}

export default Fetchl6
