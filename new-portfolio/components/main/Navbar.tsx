import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex items-center justify-center px-10">
        <div className="w-full max-w-[500px] h-full flex items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <div className="flex space-x-6 items-center">
              <a href="#about-me" className="cursor-pointer">
                About 
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
            <div className="px-5"></div>
            <div className="flex items-center space-x-5">
              <a href="https://www.instagram.com/_ankitj_" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} color="#fff" />
              </a>
              <a href="https://github.com/Ankitjha2202" target="_blank" rel="noopenener norefferer">
                <FaGithub size={24} color="#fff" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-jha-7ab508203" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaLinkedin size={24} color="#fff" />
              </a>
              <a href="https://leetcode.com/_Ankit_22/" target="_blank" className="w-8 h-8">
                <Image
                  priority
                  src="/leetcode.svg"
                  height={100}
                  width={100}
                  alt="Follow us on LeetCode"
                />
              </a>
              <a href="https://auth.geeksforgeeks.org/user/ankitjhabst" target="_blank" className="w-8 h-8">
                <Image
                  priority
                  src="/gfg.svg"
                  height={100}
                  width={100}
                  alt="Follow us on LeetCode"
                />
              </a>
              {/* <a href="https://drive.google.com/file/d/1fIq-P_Jg5h-fAwnfBG5lLYuhCT13GT-S/view?usp=sharing" target="_blank" className="w-8 h-8">
                <Image
                  priority
                  src="/resume.png"
                  height={100}
                  width={100}
                  alt="LeetCode"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
