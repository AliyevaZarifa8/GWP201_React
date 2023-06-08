import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Movies from "./companents/Movies";
import axios from "axios";
import Form from "./companents/Form";
const baseUrl = "http://localhost:8080/movies";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await axios(baseUrl);
    const data = res.data;
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="App">
        <Form />
        <h1>Movies List</h1>
        <Movies baseUrl={baseUrl} setMovies={setMovies} movies={movies} />
      </div>
    </>
  );
}

export default App;
