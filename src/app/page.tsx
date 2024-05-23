"use client";

import { NavbarDemo } from "@/components/navbar/Navbar";
import { Tooltip } from "@/components/ToolTip/";
import Image from "next/image";
import React from "react";
import { FloatingNavDemo } from "@/components/navbar/FloatingNavbar";
import { people } from "@/components/ToolTip/people";
import Service from "./service/service";
import Pricing from "./pricing/pricing";
import Developer from "./developer/developer";

export default function Home() {
  return (
    <>
        <main
            className="relative w-full bg-gray bg-grid-black/[0.2] h-auto md:h-screen flex flex-col items-center justify-start text-black">
            <NavbarDemo/>
            <div
                className="absolute top-20 h-auto pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10"></div>
            <div className="max-w-7xl md:flex md:flex-row-reverse justify-center items-center my-10 z-20 mx-auto">
                <div className="mb-4 flex flex-col md:gap-4 justify-center items-center xl:w-[400px]">
                    <Image
                        className="w-16 md:w-36"
                        src="/brand.png"
                        width={500}
                        height={500}
                        alt="13 Project"
                    />
                    <h1 className="text-2xl md:text-4xl font-light mt-1 mb-2">
                        Project
                    </h1>
                    <div className="flex flex-row items-center justify-center md:mb-10 w-full">
                        <Tooltip items={people}/>
                    </div>
                </div>
                <div >
                    <h1 className="text-3xl text-center md:text-left md:text-6xl w-72 md:w-[460px] mb-3 font-medium mx-auto">
                        Make Your Own Application
                    </h1>
                    <p className="w-80 md:w-[440px] text-center md:text-left text-sm md:text-md mb-4">
                        We are passionate about creating software solutions that drive
                        business success and transform industries. With a dedicated team
                        of expert developers, designers, and strategists, we bring your
                        vision to life through innovative technology.
                    </p>
                    <button className="bg-black text-white px-8 py-2 rounded-full text-md">
                        Portfolio
                    </button>
                </div>
            </div>
        </main>
        <section id="pricing" className="w-full h-auto bg-gray">
            <Pricing/>
        </section>
        <section id="service" className="w-full h-screen bg-neutral-200">
            <Service/>
        </section>
      <section id="developer" className="w-full h-screen bg-neutral-200">
        <Developer />
      </section>
      <FloatingNavDemo />
    </>
  );
}
