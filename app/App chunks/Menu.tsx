"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const menu = [
    { name: "About", route: "/" },
    { name: "Path Finder", route: "/" },
    { name: "Insights", route: "/" },
    { name: "Contact", route: "/" },
  ];

  const [hoverId, setHoverId] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const circleSize = 20; // 5 * 4 = 20px (w-5 in Tailwind)

  return (
    <div className="flex items-center relative gap-5 bg-white/50 px-3 py-2 backdrop-filter backdrop-blur-xl">
      {menu.map((item, idx) => (
        <button
          key={idx}
          id={`btn-${idx}`}
          onMouseEnter={() => setHoverId(idx)}
          onMouseLeave={() => setHoverId(null)}
          onMouseMove={(e) => {
            const btn = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: e.clientX - btn.left - circleSize / 3,
              y: e.clientY - btn.top - circleSize / 3,
            });
          }}
          className="text-xl px-5 py-2 border border-black rounded-full capitalize relative overflow-hidden"
        >
         <AnimatePresence>
         {hoverId === idx && (
            <motion.div
              animate={{ x: mousePos.x, y: mousePos.y, scale:15 }}
              transition={{ duration:.4, ease:[0, 0, .2, 1] }}
              exit={{scale:0}}
              className="w-5 h-5 absolute bg-teal-300 rounded-full pointer-events-none"
            />
          )}
         </AnimatePresence>
          <Link className="relative z-10" href={item.route}>{item.name}</Link>
        </button>
      ))}
    </div>
  );
};

export default Menu;
