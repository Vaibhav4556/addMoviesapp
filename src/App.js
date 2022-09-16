import logo from "./logo.svg";
import "./App.css";
import { Movie } from "./Movie";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      poster:
        "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
      name: "Avenger Endgame",
      rating: "8.4",
      summary: `Adrift in space with no food or water, Tony Stark sends a message to
   Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the
   remaining Avengers.Thor, Black Widow, Captain America and Bruce
   Banner must figure out a way to bring back their vanquished allies
   for an epic showdown with Thanos the evil demigod who decimated the
   planet and the universe.`,
    },
    {
      poster:
        "https://st1.bollywoodlife.com/wp-content/uploads/2017/11/Bahubali-The-beginning.jpg",
      name: "Bahubali The Begining",
      rating: "9.5",
      summary:
        "In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy.",
    },
    {
      poster:
        "https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg",
      name: "Pushpa:The Rise",
      rating: "8.9",
      summary:
        "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.",
    },
    {
      poster: "https://cdn.gulte.com/wp-content/uploads/2022/03/RRR-Review.jpg",
      name: "RRR",
      rating: "9.2",
      summary:
        "A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.",
    },
  ]);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const resetMovie =()=>{

    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  }

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
    };
   setMovies([...movies,newMovie])
   resetMovie()

  };
  return (
    <div>
      <div className="inputcontainer">
      <input
       value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter movie name"
      />
      <input
      value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter poster url"
      />
      <input
      value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter movie rating"
      />
      <input
      value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter movie summary"
      />

      <button className="btnadd" onClick={addMovie}>Add a Movie</button>
      </div>
     

      <div className="movie-list">
        {movies.map((props, index) => (
          <Movie
            key={index}
            name={props.name}
            poster={props.poster}
            rating={props.rating}
            summary={props.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
