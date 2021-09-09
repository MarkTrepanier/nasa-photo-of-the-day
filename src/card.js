import React from "react";
import styled from "styled-components";

//styles
const CardStyle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2, h4, p, img {
        width: 80%;
        color: ${pr=>pr.theme.white};
        background-color: ${pr=>pr.theme.primaryColor};
        border: thick ${pr=>pr.theme.secondaryColor} solid;
        border-radius: 15px;
        
    }
`
export default function Card(props){
    const {data} = props;
    return(
        <CardStyle className='card'>
          <h2>{data.title}</h2>
          <h4>{data.date}</h4>
          <img src={data.hdurl}></img>
          <p className='explanation'>{data.explanation}</p>
        </CardStyle>
    )
}