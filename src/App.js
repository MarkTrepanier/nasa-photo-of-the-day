import React,{useState, useEffect} from "react";
import "./App.css";
import Axios from 'axios';
import Card from "./card";

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
    <div className="App">
      <h1>NASA Photo OF The Day</h1>
      {data.length === 0 ? <p>loading</p>:
        <Card data={data}/>
      }
    </div>
  );
}

export default App;
