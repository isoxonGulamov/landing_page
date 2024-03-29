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
import confetti from "canvas-confetti";
import { useState, useEffect } from "react";

import Link from "next/link";
export default function Home() {
  const [open, setOpen] = React.useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 20, 2023";

    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
        
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);

      return () => clearInterval(interval);
    }, []);

  return (
    <main className="flex min-h-screen bg-black items-center justify-between ">
      <div className=" w-full   max-sm:pl-[12px] pl-[43px] relative">
        <div className="relative">
          <ParticlesComponent />
        </div>
        <div className="top-10 fixed flex items-center w-[50%]  justify-between">
          <Image
            className="w-[150px] h-[50px] max-sm:w-[100px] max-sm:h-[30px]"
            src={lightLogo}
            alt="mono-logo"
          />
        </div>
        <div className="w-full h-full">
          <div className="max-sm:absolute max-[485px]:left-[22%] z-50-[-0%] max-[395px]:right-[-75%] max-sm:left-[50%] max-sm:top-[-90px]  mb-[100px]">
            <div className="flex items-start max-sm:text-center   ">
              <h2 className="text-7xl  z-20  max-sm:text-center max-[832px]:text-4xl max-lg:text-5xl text-white font-semibold  leading-27	">
                WE’LL <span className="text-orange-500	">BE LIVE</span> <br />
                IN
                <span className="text-orange-500">
                  <span> {hours + days * 24}:</span>
                  <span>{minutes}:</span>
                  <span>{seconds} </span>
                </span>
                DAYS
              </h2>
              <Image
                className="floating z-20  max-sm:left-[-10%]  relative left-[-11%] max-xl:left-[-14%]   ml-2 w-[60px] mt-2 h-[60px] max-lg:w-[40px] max-lg:h-[40px] max-[832px]:w-[35px] max-[832px]:h-[35px]"
                src={rocket}
                alt="rocket"
              />{" "}
            </div>

            <div className="form-box mt-[35px]  ">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[420px] max-lg:w-[350px] max-[832px]:w-[300px] relative flex items-center"
              >
                <input
                  placeholder="    +998 97-234-21-12"
                  className="p-[10px]  w-full rounded-full"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  type="submit"
                  className="transition duration-500 ease-in-out transform hover:scale-90 active:scale-110  p-[10px] absolute right-[0%] rounded-full  bg-orange-500	 text-white "
                >
                  Notify Me
                  <span className="spanLine"></span>
                  <span className="spanLine"></span>
                  <span className="spanLine"></span>
                  <span className="spanLine"></span>
                </button>
              </form>
            </div>

            <div className="w-full relative ">
              <div className="absolute right-[10%] top-[150px] max-sm:right-[40%] max-sm:top-[170px] bottom-[-35%] icon-box flex gap-5">
                <Link href="https://www.instagram.com/monoposuz/">
                  <Image
                    src={instagram}
                    alt="instagram-icon"
                    className="cursor-pointer w-[48px] h-[48px] max-lg:w-[30px] max-lg:h-[30px] transition duration-700 ease-in-out transform   hover:bg-orange-500 p-1 rounded-full"
                  />
                </Link>
                <Link href="https://www.instagram.com/monoposuz/">
                  <Image
                    src={telegram}
                    className="cursor-pointer w-[48px] h-[48px] max-lg:w-[30px] max-lg:h-[30px]   transition duration-700 transform   hover:bg-orange-500 p-1 rounded-full"
                    alt="instagram-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full z-10">
        <div className="img-box max-md:bg-none w-full z-100">
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
