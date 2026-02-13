import Image from "next/image";

export default function JamesBondCards() {
  const axios = require("axios");

  // Make a request for a user with a given ID
  const Movies = [
        {
            "Title": "James Bond 007: Blood Stone",
            "Year": "2010",
            "imdbID": "tt1692489",
            "Type": "game",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxMzE4NDg0NF5BMl5BanBnXkFtZTgwMjg5Mjc1MDE@._V1_SX300.jpg"
        },
        {
            "Title": "Jatt James Bond",
            "Year": "2014",
            "imdbID": "tt3732110",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDUzMTdlYWEtOTVlYi00YjJhLWFmZmItZDk4Y2Y4NmQ4ZGJhXkEyXkFqcGc@._V1_SX300.jpg"
        },

        {
            "Title": "The James Bond Story",
            "Year": "1999",
            "imdbID": "tt0239074",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1ODc0MjkzMF5BMl5BanBnXkFtZTcwMDY2NzEyMQ@@._V1_SX300.jpg"
        },
        {
            "Title": "James Bond Supports International Women's Day",
            "Year": "2011",
            "imdbID": "tt1858469",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjRhYzM2YjMtZTNjOS00OThlLTgwZTQtNTVjZDAzZWU1YzM2XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Sean Connery vs James Bond",
            "Year": "2022",
            "imdbID": "tt22498916",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjZTEzMTEtZDFlNS00NThkLThkYTEtZTMwMTdkMmNmZDMzXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "James Bond",
            "Year": "2015",
            "imdbID": "tt4896340",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGM1Zjg5MmEtZjVlOC00NzM3LWEzMjktMGMwMTMwY2ZmMjVkXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Happy Anniversary 007: 25 Years of James Bond",
            "Year": "1987",
            "imdbID": "tt0223426",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzgwMTljODgtZmE4Yy00YjQyLWJlNDctODNkNDViNjM2MzJiXkEyXkFqcGc@._V1_SX300.jpg"
        }
      ]

  const moviesList = Movies.map((movie) => {
    return (
      <div key={movie.imdbID}>
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
      <p className="ml-4 text-amber-400 text-2xl">James Bond Movies </p>
      <div className="flex w-300 mt-4 overflow-auto no-scrollbar ">
        <div className="flex">{moviesList}</div>
      </div>
    </div>
  );
}
