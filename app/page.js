import NavBar from "./components/navBar";
import BatmanMovieCard from "./components/batmanMovies";
import FastCard from "./components/FastCard";
import HarryCard from "./components/HarryCard";
import AvengersCard from "./components/avengers";
import JamesBondCards from "./components/JamesBondCard";
import ApiSurce from "./components/ApiSurce";
import Menu from "./components/menu";


export default function Home() {
  return (
    <div className=" min-h-screen flex items-center flex-col gap-4 bg-zinc-950 font-sans">
      <Menu />
      <NavBar />
      <BatmanMovieCard />
      <FastCard />
      <HarryCard />
      <AvengersCard />
      <JamesBondCards />
      <ApiSurce />

      {/* copyright */}
      <div className="w-full h-20  bg-zinc-800 flex justify-center items-center ">
        Copyright 2026


      </div>
    </div>
  );
}
