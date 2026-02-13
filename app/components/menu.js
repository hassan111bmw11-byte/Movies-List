"use client";

import StarIcon from '@mui/icons-material/Star';
export default function Menu() {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ScrollToMovies = () => {
    window.scrollTo({
      top: 420,
      behavior: "smooth",
    });
  };

    const ScrollToApi = () => {
    window.scrollTo({
      top: 2191,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-zinc-800 w-300  h-12 mt-4 rounded-2xl fixed z-10 flex justify-between p-3">
      <div className="flex gap-8 ml-4">
        <nav
          onClick={ScrollTop}
          className="hover:bg-zinc-600 text-amber-400 w-20 text-center rounded h-6 transition-all-0.7s-ease"
        >
          Home
        </nav>
        <nav onClick={ScrollToMovies} className="hover:bg-zinc-600 text-amber-400 w-20 text-center rounded h-6 transition-all-0.7s-ease">
          Movies
        </nav>
        <nav onClick={ScrollToApi} className="hover:bg-zinc-600 text-amber-400 w-20 text-center rounded h-6 transition-all-0.7s-ease">
          Api Surce
        </nav>
      </div>
      <div className="mr-4">
        <nav className="text-amber-400"><StarIcon /></nav>
      </div>
    </div>
  );
}
