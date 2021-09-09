import React,{useState, useEffect} from "react";
import "./App.css";
import Axios from 'axios';
import Card from "./card";
import styled from "styled-components";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:${pr=>pr.theme.black};
  h1{
    color:${pr=>pr.theme.secondaryColor};
    background-color: ${pr=>pr.theme.primaryColor};
    border: thick ${pr=>pr.theme.secondaryColor} solid;
    border-radius: 15px;
  }
`
function App() {
  const [data, setData] = useState([])

  //fetch data
  useEffect(()=>{
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=kmVnTgTEvlAXqOUIafKvfWQdQjIhGSJIyNgvp2DC')
    .then(res=>{
      console.log(res.data);
      setData(res.data);
    })
    .catch(er=>console.log(er));
  },[])

  //return <html to vdom>
  return (
    <AppStyle className="App">
      <h1>NASA Photo OF The Day</h1>
      {data.length === 0 ? <p>loading</p>:
        <Card data={data}/>
      }
    </AppStyle>
  );
}

export default App;
