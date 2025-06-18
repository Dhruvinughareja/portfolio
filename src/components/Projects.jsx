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
                <div key={index} className='gap-5 mb-8 flex flex-wrap lg:justify-center pt-10'>
                    <motion.div 
                        whileInView={{opacity:1 , x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                        className='w-full lg:w-1/4'
                    >
                        <img 
                            src={project.image}
                            width={500}
                            height={250}
                            alt={project.title}
                            className='mb-6 rounded-lg border border-gray-800' 
                        />
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity:1 , x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                        className='w-full max-w-xl lg:w-3/4'
                    >
                        <h3 className='mb-2 font-semibold text-2xl text-white'>{project.title}</h3>
                        <p className='mb-4 text-gray-400'>{project.description}</p>
                        <div className='flex flex-wrap gap-2'>
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