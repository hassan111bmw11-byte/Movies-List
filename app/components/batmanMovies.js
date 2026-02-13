import Image from "next/image";

export default function BatmanCard() {
  const axios = require("axios");

  // Make a request for a user with a given ID
  const Movies = [
    {
      id: 1,
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 2,
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 3,
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      imdbID: "tt2975590",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 5,
      Title: "Batman",
      Year: "1989",
      imdbID: "tt0096895",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 6,
      Title: "Batman Returns",
      Year: "1992",
      imdbID: "tt0103776",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTliMDVkYTktZDdlMS00NTAwLWJhNzYtMWIwMDZjN2ViMGFiXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 7,
      Title: "Batman Forever",
      Year: "1995",
      imdbID: "tt0112462",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTUyNjJhZWItMTZkNS00NDc4LTllNjUtYTg3NjczMzA5ZTViXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 8,
      Title: "Batman & Robin",
      Year: "1997",
      imdbID: "tt0118688",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 9,
      Title: "The Lego Batman Movie",
      Year: "2017",
      imdbID: "tt4116284",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
    },
    {
      id: 10,
      Title: "Batman: The Animated Series",
      Year: "1992/1995",
      imdbID: "tt0103359",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ];

  const moviesList = Movies.map((movie) => {
    return (
      <div key={movie.id}>
        <div >
          {/* cards */}
          <div className="flex min-w-40  ml-4 h-60">
            {" "}
            <Image className="rounded" width={170} height={100} src={movie.Poster} alt="movie" />
          </div>
          {/*===cards=== */}
        </div>
        <p className="min-w-10 ml-4 text-amber-400 ">{movie.Title}</p>
      </div>
    );
  });

  return (
    <div >
      <p className="ml-4 text-amber-400 text-2xl">Batman's Movies </p>
      <div className="flex w-300 mt-4 overflow-auto no-scrollbar ">
        <div className="flex">{moviesList}</div>
      </div>
    </div>
  );
}
