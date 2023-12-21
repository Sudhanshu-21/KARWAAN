import FirstScreen from "./firstScreen";
import EventsCarousel from "./eventsCarousel";
import Navbar from "./navbar";

function Home() {
  return (
    <>
      {/* For md and large screens */}
      <div
        className="hidden md:block border-0 border-sky-500 bg-scroll bg-no-repeat bg-right-top "
        style={{
          backgroundImage: 'url("/Home/penLatest.png")',
          backgroundSize: "contain",
        }}
      >
        <Navbar />
        <FirstScreen/>
      </div>
      {/* For sm screens */}
      <div
        className="md:hidden border-0 border-sky-500 bg-scroll bg-no-repeat bg-right-top "
        style={{
          backgroundImage: 'url("/Home/penLatestCropSm.png")',
          backgroundSize: "contain",
        }}
      >
        <Navbar />
        <FirstScreen/>
      </div>
      {/* About Mag About Karwaan  */}
        <div className="bg-[#B29B7E] h-[500px] text-2xl md:text-4xl xl:text-6xl">About Mag About Karwaan</div>
      {/* Events EventsCarousel  */}
      <EventsCarousel />
      {/* Speakers  */}
      <div className="bg-[#B29B7E] h-[500px] text-2xl md:text-4xl xl:text-6xl">Speakers</div>
      {/* Newer sections to be added here (About mag, about KARWAAN, etc) */}
    </>
  );
}
export default Home;
