import Navbar from "./navbar";

function Home() {
  return (
    <>
      <div className="relative grid grid-cols-12 gap-8">
        <div className="border-0 border-sky-500 col-span-9 min-[335px]:col-span-10 md:col-span-7 md:col-start-2">
          <img
            src="/rkNarayanWoBg.png"
            className="xl:w-[90rem] xl:ps-0 xl:pt-12 border-0 border-green-500"
          ></img>
          <div className="absolute top-[60%] sm:top-[65%] lg:top-[60%] left-[45%] md:left-[43%] 2xl:left-[42%]  font-semibold">
          <button className="-translate-x-1/2 -translate-y-1/2 border-[2px] border-black bg-[#B29B7E] hover:bg-[#876f52] hover:scale-105 hover:border-[3px] hover:shadow-lg px-2 py-1 md:px-4 2xl:px-6 2xl:py-2 mx-2 my-1 sm:mx-3 2xl:mx-5 rounded-sm md:rounded-md text-base sm:text-lg 2xl:text-4xl">
            Events
          </button>
          <button className="-translate-x-1/2 -translate-y-1/2 border-[2px] border-black bg-[#B29B7E] hover:bg-[#876f52] hover:scale-105 hover:border-[3px] hover:shadow-lg px-2 py-1 md:px-4 2xl:px-6 2xl:py-2 mx-2 sm:mx-3 2xl:mx-5 my-1 rounded-sm md:rounded-md text-base sm:text-lg 2xl:text-4xl">
            Speakers
          </button></div>
        </div>
      </div>
      
    </>
  );
}
export default Home;
