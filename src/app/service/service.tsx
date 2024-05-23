"use client";

import { NavbarDemo } from "@/components/navbar/Navbar";
import { MenuItem } from "@/components/navbar/NavbarMenu";
import { Tooltip } from "@/components/ToolTip/";
import Image from "next/image";
import React from "react";
import { FloatingNavDemo } from "@/components/navbar/FloatingNavbar";
import { people } from "@/components/ToolTip/people";
import { ServiceContent } from "./components/serviceContent";

export default function Service() {
  return <ServiceContent />;
}
