import React,{useState, useEffect} from "react";
import "./App.css";
import Axios from 'axios';

function App() {
  const [data, setData] = useState({})

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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
