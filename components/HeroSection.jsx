// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import img1 from "D:/SIH project/virtualr/src/assets/jmse-10-01620-g003-550.jpg"
import img2 from "D:/SIH project/virtualr/src/assets/profile-pictures/Water-Surface-Garbage-Cleaning-Unmanned-Remote-Controlled-Boat-Harvester-River-Cleaning-Machine.jpg"
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Ecoresc build Technology
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for sustainiabilty
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
       Innovating ideas and building projects to 
       resolve crux issues in our sorrounding and deploying it in a sustainable manner for  
       exponential growth and balance life.
      </p>
       {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>  */}
      <div className="flex mt-10 justify-center">
        <img src= {img1} className=" rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 lg:h-1/2 lg:w-1/3"  />
        <img src= {img2} className=" rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 lg:h-1/2 lg:w-1/3"  />
       
      
       
       
      </div>
    </div>
  );
};

export default HeroSection;
