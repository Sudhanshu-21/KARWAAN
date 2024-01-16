import FirstScreen from "./firstScreen";
import EventsCarousel from "./eventsCarousel";
import Speakers from "./speakers";
import Glimpses from "./glimpses";
import About from "./about";
import Footer from "./footer";
import { Carousel } from "./carousel";

function Home() {
  return (
    <>
      {/* For md and large screens */}
      <div>
        <FirstScreen />
        <About />
        <EventsCarousel />
        <Carousel />
        <Speakers />
        <Glimpses />
        <Footer />
      </div>
    </>
  );
}
export default Home;
