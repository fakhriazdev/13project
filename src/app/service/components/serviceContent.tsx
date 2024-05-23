import { projects } from "../data";
import { HoverEffect } from "./card-hover-effect";

export function ServiceContent() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-9">
      <h1 className="text-center text-3xl text-black">Services</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
