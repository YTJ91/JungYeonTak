import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Movie_List/Home";
import MovieDetail from "./component/Movie_List/MovieDetail";
import Header from "./component/Movie_List/page/Header";
import Movie from "./component/Movie_List/page/Movie";
import Person from "./component/Movie_List/page/Person";
import TV from "./component/Movie_List/page/TV";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="tv" element={<TV />} />
        <Route path="person" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
