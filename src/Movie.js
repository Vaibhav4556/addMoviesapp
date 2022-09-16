import { Counter } from "./Counter";

export function Movie(prop) {
  return (

    <div>
      <div className="movie-container">
        <img className="movie-poster" src={prop.poster} alt={prop.name} />
        <div className="movie-specs">
          <h3 className="movie-name">{prop.name}</h3>
          <p className="movie-rating">{prop.rating}</p>
        </div>
        <p className="movie-summary">{prop.summary}</p>
      </div>

      <Counter />
    </div>
  );
}
