"use client";
import React, { useState } from "react";
import {BrandLogo, HoveredLink, Menu, MenuItem, ProductItem} from "@/components/navbar/NavbarMenu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { Twitter,Instagram,Linkedin,Github} from 'lucide-react';

export function NavbarDemo() {
  return (
      <div className="w-full bg-white z-50">
      <Navbar className="top-0" />
      </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
      <>
        <div className={cn(" top-10 inset-x-0 mx-auto max-w-7xl bg-white z-50 text-md flex justify-between px-5", className)}>
          <BrandLogo/>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={""} item="Services">

            </MenuItem>
            <MenuItem setActive={setActive} active={""} item="Tools">

            </MenuItem>
            <MenuItem setActive={setActive} active={""} item="Pricing">

            </MenuItem>

            <MenuItem setActive={setActive} active={""} item="Profile">

            </MenuItem>
          </Menu>
            <div className="flex gap-4 my-auto bg-gray px-4 py-2 text-sm font-medium rounded-full">
                <Link className="text-black hover:text-orange" href={"#"}><Twitter size="18"/></Link>
                <Link className="text-black hover:text-orange" href={"#"}><Instagram size="18"/></Link>
                <Link className="text-black hover:text-orange" href={"#"}><Linkedin size="18"/></Link>
                <Link className="text-black hover:text-orange" href={"#"}><Github size="18"/></Link>
            </div>

        </div>

      </>

  );
}
