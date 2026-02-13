import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-200 h-100 m-4 rounded mt-20 flex justify-between gap-4 items-center">
      <div className=" rounded-2xl  justify-center items-center w-120 h-60">
        <p className="  text-amber-400 mt-14 ml-8 text-4xl font-bold">
          Unlimeted Moves
        </p>
        <p className=" text-3xl text-amber-400 ml-8 font-bold  ">
          Unlimeted Fun
        </p>
      </div>
      <Image
        className="rounded-2xl w-120 h-70 "
        src="/images (2).jpg"
        width={1200}
        height={100}
        alt="movie"
        loading="eager"
      />
    </div>
  );
}
