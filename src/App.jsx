import { useState, useRef } from "react";
import {
  CameraIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import "./App.css";
import Navbar from "./Component/Navbar";
import Cards from "./Component/Cards";
import Footer from "./Component/Footer";
import Svgcards from "./Component/Svgcards";
import PastProject from "./Component/PastProject";
import Colortext from "./Component/Colortext";

function App() {
  return (
    <>
      <Navbar />

      {/* PAGE 1 */}
      <div className="page1 min-h-[90vh]">
        <div className="video min-h-[90vh] flex justify-center items-center px-4">
          <img
            src="https://images.pexels.com/videos/8100336/pexels-photo-8100336.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="intro"
            className="w-full max-w-[900px] h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="page2 relative min-h-screen bg-[url(https://images.pexels.com/photos/16886370/pexels-photo-16886370.jpeg)] bg-cover bg-center text-white">

        <div
          className="layer absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>

        <div className="things relative z-10 min-h-screen flex flex-col justify-around px-6 py-10">

          <div>
            <Colortext />
          </div>

          <div className="skills flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            <Svgcards
              icon={<CameraIcon className="w-10" />}
              heading={"Youtube Videos"}
              para={
                "Professional video editor offering high-quality post-production services for YouTube content creators."
              }
            />
            <Svgcards
              icon={<ComputerDesktopIcon className="w-10" />}
              heading={"Commercial "}
              para={
                "Professional video editor offering high-quality post-production services for YouTube content creators."
              }
            />
            <Svgcards
              icon={<UserIcon className="w-10 " />}
              heading={"Event Videos "}
              para={
                "Professional video editor offering high-quality post-production services for YouTube content creators."
              }
            />
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
      <div className="page3 bg-white px-4 sm:px-10 py-10">
        <div className="heading text-center pb-10">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl text-orange-400 font-extrabold">
            Past Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PastProject
            pics={"https://www.pexels.com/download/video/5198042/"}
            title={"Talking Head Videos"}
          />
          <PastProject
            pics={"https://www.pexels.com/download/video/2053420/"}
            title={"Documentary"}
          />
          <PastProject
            pics={"https://www.pexels.com/download/video/5174040/"}
            title={"Poadcast video Editing"}
          />
          <PastProject
            pics={"https://www.pexels.com/download/video/15200537/"}
            title={"Voice Over"}
          />
          <PastProject
            pics={"https://www.pexels.com/download/video/4835868/"}
            title={"3d Videos"}
          />
          <PastProject
            pics={"https://www.pexels.com/download/video/4923273/"}
            title={"Talking Head Videos"}
          />
        </div>

        <div className="pagelink mt-10 text-center">
          <button className="h-10 w-32 bg-gray-900 font-extrabold text-white text-xl sm:text-2xl rounded-md">
            See More
          </button>
        </div>
      </div>

      {/* PAGE 4 */}
      <div className="page4 px-4 sm:px-10 py-12 text-center bg-gray-100">
        <div className="heading text-orange-300">
          <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl gradient-text">
            From Fiverr
          </h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-text">
            Client Review
          </h1>
        </div>

        <div className="clients mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cards
            comment="Great job; fast turn around; fun quirky video made from a bunch of small snippet videos I recorded. Would definitely recommend!"
            cliname={"Mr Dreamer"}
          />
          <Cards
            comment="Great seller, always responsive, I asked him to change something literally more than 10 times and he was so generous and professional ! Definitely recommend him but just not too much otherwise he won't be available for my next job! lol"
            cliname={"Zee"}
          />
          <Cards
            comment="Fantastic - he was extremely responsive, helpful and fast! I will be calling on him for EVERY video need I have. Actually sending him another request now! : )"
            cliname={"Ali"}
          />
          <Cards
            comment="Fantastic - he was extremely responsive, helpful and fast! I will be calling on him for EVERY video need I have. Actually sending him another request now! : )"
            cliname={"Ali"}
          />
          <Cards
            comment="Fantastic - he was extremely responsive, helpful and fast! I will be calling on him for EVERY video need I have. Actually sending him another request now! : )"
            cliname={"Ali"}
          />
          <Cards
            comment="It was a pleasure working with Zeeshan"
            cliname={"Anglena"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;