"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Move image upward as user scrolls

  return (
    <div className="w-full my-20">
      <div className="container grid grid-cols-2 gap-6">
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-6xl font-Primary font-bold">
            Some Short but{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 bg-clip-text text-transparent">
              meaningful
            </span>{" "}
            heading
          </h2>
          <p className="mt-7 text-xl leading-relaxed">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis
            egestas velit vivamus lorem himenaeos class nibh magnis. Litora
            suspendisse risus cursus platea feugiat facilisis. Consequat purus
            amet; venenatis placerat posuere sociosqu fames pretium est.
            Suscipit penatibus maximus massa egestas amet efficitur litora odio
            consectetur. Vulputate ullamcorper vitae mi nullam tempus tellus.
            Gravida platea finibus ultrices nisi dignissim sit vitae. Nam dis
            arcu cubilia elementum penatibus platea nisi nam. Rhoncus proin sem
            volutpat nec eros commodo laoreet.
          </p>
        </div>

        {/* Image with Parallax Effect */}
        <div className="aspect-square w-full overflow-hidden">
          <motion.img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ y, scale: 1.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
