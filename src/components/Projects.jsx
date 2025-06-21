import React from 'react'
import {PROJECTS} from "../content"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div id="projects" className='pb-4 bg-black'>
        <motion.h2 
            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl font-bold text-white'
        >
            Projects
        </motion.h2>
        <div className='px-4 sm:px-6 lg:px-8'>
            {PROJECTS.map((project , index) => (
                <div key={index} className='mb-8 flex flex-wrap justify-center'>
                    <motion.div 
                        whileInView={{opacity:1 , x:0}}
                        initial={{opacity:0,x:0}}
                        transition={{duration:1}}
                        className='w-full lg:w-3/4'
                    >
                        <h3 className='mb-2 text-center font-semibold text-2xl text-white'>{project.title}</h3>
                        <p className='mb-4 text-gray-400'>{project.description}</p>
                        <div className='flex flex-wrap justify-center gap-2'>
                            {project.technologies.map((tech,index)=> (
                                <span 
                                    key={index}
                                    className='px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm font-medium text-gray-300'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects