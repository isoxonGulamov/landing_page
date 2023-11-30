"use client";
import Image from "next/image";
import React from "react";
import lightLogo from "@/public/mono logo_night.svg";
import ParticlesComponent from "./components/particlesComponent";
import telegram from "@/public/send-2.png";
import instagram from "@/public/instagram.png";
import rocket from "@/public/rocket.svg";
import "rsuite/dist/rsuite.css";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import DrawerComponent from "./components/drawer";


export default function Home() {
    const [open, setOpen] = React.useState(false);

  return (
    <main className="flex min-h-screen bg-black items-center justify-between ">
      <div className=" w-full   max-sm:pl-[12px] pl-[43px] relative">
        <div className="relative  ">
          <ParticlesComponent />
        </div>
        <div className="top-10 fixed">
          <Image
            className="w-[150px] h-[50px] max-sm:w-[100px] max-sm:h-[30px]"
            src={lightLogo}
            alt="mono-logo"
          />
        </div>
        <div className="w-full h-full">
          <div className="max-sm:absolute z-50 max-[485px]:right-[-69%] max-[395px]:right-[-75%] max-sm:right-[-50%] max-sm:top-[-90px]  mb-[100px]">
            <div className="flex items-start  ">
              <h2 className="text-7xl  max-sm:text-center max-[832px]:text-4xl max-lg:text-5xl text-white font-semibold  leading-27	">
                WE’LL <span className="text-orange-500	">BE LIVE</span> <br />
                IN <span className="text-orange-500">20</span> DAYS
              </h2>
              <Image
                className=" ml-3 w-[70px] h-[70px] max-lg:w-[40px] max-lg:h-[40px] max-[832px]:w-[35px] max-[832px]:h-[35px]"
                src={rocket}
                alt="rocket"
              />{" "}
            </div>

            {/* <DynamicForm/> */}

            <div className="form-box mt-[35px]  ">
              <form className="w-[420px] max-lg:w-[350px] max-[832px]:w-[300px] relative flex items-center">
                <input
                  placeholder="    +998 97-234-21-12"
                  className="p-[10px]  w-full rounded-full"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  type="submit"
                  className="p-[10px] absolute right-[0%] rounded-full  bg-orange-500	 text-white "
                >
                  Notify Me
                </button>
              </form>
            </div>

            <div className="w-full    ">
              <div className=" absolute right-[10%] bottom-[-35%] icon-box flex gap-5">
                <Image
                  src={instagram}
                  alt="instagram-icon"
                  className="cursor-pointer w-[48px] h-[48px] max-lg:w-[30px] max-lg:h-[30px] transition duration-700 ease-in-out transform hover:scale-110  hover:bg-orange-500 hover:p-2 rounded-full"
                />
                <Image
                  src={telegram}
                  className="cursor-pointer w-[48px] h-[48px] max-lg:w-[30px] max-lg:h-[30px]  transition duration-700 transform hover:scale-110  hover:bg-orange-500 hover:p-2 rounded-full"
                  alt="instagram-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full z-10">
        <div className="img-box w-full z-100">
          <div className="flex  right-[2%] top-10 fixed gap-6  items-center ">
            <div
              onClick={() => setOpen(true)}
              className="pt-2 transition duration-700 ease-in-out transform hover:bg-white hover:text-black pl-4 pb-2 pr-4 cursor-pointer  text-white rounded-full border-2 max-sm:pt-1 max-sm:pl-2 max-sm:pb-1 max-sm:pr-2 max-sm:text-sm	"
            >
              About us
            </div>

            <div className="pt-2 transition duration-700 ease-in-out transform hover:bg-white hover:text-black pl-4 pb-2 pr-4 cursor-pointer  text-white rounded-full border-2 max-sm:pt-1 max-sm:pl-2 max-sm:pb-1 max-sm:pr-2 max-sm:text-sm	">
              Contact
            </div>
          </div>

          <div>
            <Image
              className="w-[350px] max-[965px]:right-[5%] max-[700px]:hidden right-[17%] h-[80px] absolute top-[40%]"
              src={lightLogo}
              alt="mono-logo"
            />
          </div>
        </div>
      </div>

      <DrawerComponent isOpen={open} setOpen={setOpen} />
    </main>
  );
}
