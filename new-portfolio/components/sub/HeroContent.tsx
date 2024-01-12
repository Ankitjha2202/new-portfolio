"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/appUtils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
    

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[400px] w-auto h-auto"
        >
          <span>
            I'm 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Ankit Jha{" "}
            </span>
            a Software Engineer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Software Engineer with experience in FullStack Software development and Machine Learning. I am passionate about problem solving,I enjoy the challenge of developing efficient algorithms to solve complex problems, Let's make great things together.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1fIq-P_Jg5h-fAwnfBG5lLYuhCT13GT-S/view?usp=sharing"
          variants={slideInFromTop}
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          className="Welcome-box py-2 px-4 border border-[#7042f88b] opacity-90 rounded-lg shadow-md cursor-pointer text-[13px] font-semibold text-[#b49bff] flex items-center"
          style={{ width: 'auto', maxWidth: '200px' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SparklesIcon className="h-5 w-5 mr-2" />
            See My Resume
        </motion.a>



      </div>

     
    </motion.div>
  );
};

export default HeroContent;