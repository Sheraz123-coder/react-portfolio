import React from "react";
import { FaCamera, FaDesktop, FaUser } from "react-icons/fa";
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
          <video src={"https://res.cloudinary.com/dmyc4zuhl/video/upload/v1777633646/intro_wxo79a.mp4"} className="w-full max-w-[900px] h-auto object-cover rounded-xl" autoPlay controls muted loop></video>
         
        </div>
      </div>

      {/* PAGE 2 */}
      <div
        className="page2 relative min-h-screen bg-[url(https://images.pexels.com/photos/16886370/pexels-photo-16886370.jpeg)] bg-cover bg-center text-white"
      >
        <div
          className="layer absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>

        <div className="things relative z-10 min-h-screen flex flex-col justify-around px-6 py-10">
          <Colortext />
          <div className="skills flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
            <Svgcards
              icon={<FaCamera className="w-10 h-10" />}
              heading={"Youtube Videos"}
              para={
                "Professional video editor offering high-quality post-production services for YouTube content creators."
              }
            />
            <Svgcards
              icon={<FaDesktop className="w-10 h-10" />}
              heading={"Commercial"}
              para={
                "Professional video editor offering high-quality post-production services for YouTube content creators."
              }
            />
            <Svgcards
              icon={<FaUser className="w-10 h-10" />}
              heading={"Event Videos"}
              para={
                "Professional video editor offering high-quality post-production services for YouTube content creators."
              }
            />
          </div>
        </div>
      </div>

      {/* PAGE 3 */}
      <section id="projects">

      <div className="page3 bg-white px-4 sm:px-10 py-10">
        <div className="heading text-center pb-10">
          <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl text-orange-400 font-extrabold">
            Past Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <PastProject
            pics={"https://res.cloudinary.com/dmyc4zuhl/video/upload/v1777634311/1_e6fhrg.mp4"}
            title={"Talking Head Videos"}
          />
          <PastProject
            pics={"https://res.cloudinary.com/dmyc4zuhl/video/upload/v1777633882/2_ng48sl.mp4"}
            title={"Documentary"}
          />
          <PastProject
            pics={"https://res.cloudinary.com/dmyc4zuhl/video/upload/v1777632950/3_ogaw1q.mp4"}
            title={"Poadcast video Editing"}
          />
          <PastProject
            pics={"https://res.cloudinary.com/dmyc4zuhl/video/upload/v1777633795/4_wjqylw.mp4"}
            title={"Voice Over"}
          />
          <PastProject
            pics={"https://res.cloudinary.com/dmyc4zuhl/video/upload/v1777633698/5_uahhtv.mp4"}
            title={"Talking Head Videos"}
          />
          <PastProject
            pics={"https://www.pexels.com/download/video/2053420/"}
            title={"Documentary"}
          />
        </div>
        <div className="pagelink mt-10 text-center">
          <button className="h-10 w-32 bg-gray-900 font-extrabold text-white text-xl sm:text-2xl rounded-md">
            See More
          </button>
        </div>
      </div>
            </section>


      {/* PAGE 4 */}
      <div className="page4 px-4 sm:px-10 py-12 text-center bg-gray-100">
        <div className="heading text-orange-300">
          <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl gradient-text">From Fiverr</h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-text">Client Review</h1>
        </div>
        <div className="clients mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cards
            comment="Great job; fast turn around; fun quirky video made from a bunch of small snippet videos I recorded. Would definitely recommend!"
            cliname="Mr Dreamer"
          />
          <Cards
            comment="Great seller, always responsive, I asked him to change something literally more than 10 times and he was so generous and professional ! Definitely recommend him but just not too much otherwise he won't be available for my next job! lol"
            cliname="Zee"
          />
          <Cards
            comment="Fantastic - he was extremely responsive, helpful and fast! I will be calling on him for EVERY video need I have. Actually sending him another request now! : )"
            cliname="camron"
          />
          <Cards
            comment="Fantastic - he was extremely responsive, helpful and fast! I will be calling on him for EVERY video need I have. Actually sending him another request now! : )"
            cliname="Asfand"
          />
          <Cards
            comment="Fantastic - he was extremely responsive, helpful and fast! I will be calling on him for EVERY video need I have. Actually sending him another request now! : )"
            cliname="Ali"
          />
          <Cards
            comment="It was a pleasure working with Zeeshan"
            cliname="Anglena"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
