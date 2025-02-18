import { FC } from "react";
import Button from "../components/buttons";
// import Card from "../components/cards";

const Homepage: FC = () => {
  return (
    <>
      <div className="">
        <header className="bg-white p-2 px-32 shadow-md text-black flex justify-between items-center z-20 relative">
          <h1 className="text-2xl font-bold tracking-widest text-black">
            INTEO
          </h1>

          {/* <div className="flex items-center">
    <img src="Logo.png" alt="Logo" className="h-10 w-auto" />
  </div> */}

          <nav className="flex space-x-4 overflow-x-auto">
            <button className="text-black font-medium hover:bg-pm-300 hover:text-white py-2 px-4 rounded-sm">
              About
            </button>
            <button className="text-black font-medium hover:bg-pm-300 hover:text-white  py-2 px-4 rounded-sm">
              Services
            </button>
            <button className="text-black font-medium hover:bg-pm-300 hover:text-white  py-2 px-4 rounded-sm">
              Our Work
            </button>
            <Button size="sm" text="CONTACT US" />
          </nav>
        </header>
        <main className="overflow-x-auto h-screen">
            <div className="flex justify-center items-center mt-16">
            <h3 className="xs:text-h5 sm:text-h4 md:text-h3 lg:text-h3 xl:text-h3 tracking-widest font-mono">
         Make your home an ode to joy bullshit
        </h3>
            </div>
        </main>
      </div>
    </>
  );
};

export default Homepage;
