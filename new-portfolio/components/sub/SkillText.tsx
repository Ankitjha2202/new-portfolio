"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/appUtils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-full mt-80 flex flex-col items-center justify-center'>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center'
        >
          My Skills
        </motion.div>
        
  
    </div>
  )
}

export default SkillText