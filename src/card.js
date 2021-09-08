import React,{useState, useEffect} from "react";

export default function Card(props){
    const {data} = props;
    return(
        <div className='card'>
          <h2>{data.title}</h2>
          <h4>{data.date}</h4>
          <img src={data.hdurl}></img>
          <p className='explanation'>{data.explanation}</p>
        </div>
    )
}