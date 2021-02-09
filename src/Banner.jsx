import axios from "./axios";
import requests from "./Requests";
import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  // fetching the movies
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return Request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {" "}
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {truncate(
              `
           ${movie?.overview}
            `,
              150
            )}
          </h1>
        </div>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
