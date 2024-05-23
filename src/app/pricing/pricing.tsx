import React from "react";
import { HoverEffect } from "../service/components/card-hover-effect";
import { projects } from "../service/data";
import { HoverEffectPricing } from "./components/card-hover-effect";
import { pricings } from "./data";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto">
      <HoverEffectPricing items={pricings} />
    </div>
  );
}
