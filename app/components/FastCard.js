import Image from "next/image";

export default function FastCard() {
  const axios = require("axios");

  // Make a request for a user with a given ID
  const Movies = [
    {
      id: 1,
      Title: "The Fast and the Furious",
      Year: "2001",
      imdbID: "tt0232500",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 2,
      Title: "Fast & Furious 6",
      Year: "2013",
      imdbID: "tt1905041",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
    },
    {
      id: 3,
      Title: "Fast Five",
      Year: "2011",
      imdbID: "tt1596343",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg",
    },
    {
      id: 4,
      Title: "Fast & Furious",
      Year: "2009",
      imdbID: "tt1013752",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 5,
      Title: "The Fast and the Furious: Tokyo Drift",
      Year: "2006",
      imdbID: "tt0463985",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
    },
    {
      id: 6,
      Title: "2 Fast 2 Furious",
      Year: "2003",
      imdbID: "tt0322259",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 7,
      Title: "Fast & Furious Presents: Hobbs & Shaw",
      Year: "2019",
      imdbID: "tt6806448",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 8,
      Title: "F9: The Fast Saga",
      Year: "2021",
      imdbID: "tt5433138",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 9,
      Title: "Fast X",
      Year: "2023",
      imdbID: "tt5433140",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 10,
      Title: "Fast Times at Ridgemont High",
      Year: "1982",
      imdbID: "tt0083929",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWM4NTc3N2YtMjk2Ny00MTRmLWE4YzItNTVhMTRlODVkNmE5XkEyXkFqcGc@._V1_SX300.jpg",
    },
  ];

  const moviesList = Movies.map((movie) => {
    return (
      <div key={movie.id}>
        <div>
          {/* cards */}
          <div className="flex min-w-40  ml-4 h-60">
            <Image
              className="rounded"
              width={170}
              height={100}
              src={movie.Poster}
              alt="movie"
            />
          </div>
          {/*===cards=== */}
        </div>
        <p className="min-w-10 ml-4 text-amber-400">{movie.Title}</p>
      </div>
    );
  });

  return (
    <div>
      <p className="ml-4 text-amber-400 text-2xl">Fast & Furious Movies </p>
      <div className="flex w-300 mt-4 overflow-auto no-scrollbar ">
        <div className="flex">{moviesList}</div>
      </div>
    </div>
  );
}
