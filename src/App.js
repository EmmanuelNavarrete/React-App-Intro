import Form from "./Form";

const movies = [
  {
    name: "Avengers",
    available: 3
  },
  {
    name: "Terminator",
    available: 5
  }
];

export default function App() {
  return (
    <div>
      <h2> Peliculas </h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
