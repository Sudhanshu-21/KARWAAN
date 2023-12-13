import Navbar from "./navbar";

function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        <div className="border-0 border-sky-500 col-span-9 md:col-span-7 md:col-start-2  sm:pt-[54px] md:pt-12">
          <img
            src="/rk_narayan_crop.png"
            className="pt-12 xl:w-[90rem] xl:ps-0 xl:pt-12 border-0 border-green-500"
          ></img>
        </div>
      </div>
    </>
  );
}
export default Home;
