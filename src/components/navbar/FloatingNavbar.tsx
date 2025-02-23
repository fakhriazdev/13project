import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Service",
      link: "#service",
    },
    {
      name: "Developer",
      link: "#developer",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "md:hidden flex max-w-fit fixed bottom-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-black/10 backdrop-blur shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-1  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-black hover:text-neutral-500 font-medium"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="bg-black border text-sm font-normal relative border-neutral-200 text-orange px-4 py-3 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
