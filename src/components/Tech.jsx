import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    inital : {y : -10} ,
    animate : {
        y : [10,-10] ,
        transition : {
            duration : duration ,
            ease : "linear" ,
            repeat : Infinity ,
            repeatType : "reverse" ,
        }
    }
})

const Tech = () => {
  return (
    <div id="Technology" className="pb-24 bg-black">
        <motion.h2 
            whileInView={{opacity: 1 , y: 0}} 
            initial={{opacity:0 , y : -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl font-bold text-white"
        >
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity: 1 , x: 0}} 
            initial={{opacity:0 , x : -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-8 p-8"
        >
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4 rounded-xl bg-gray-800 border border-gray-700"
            >
                <RiTailwindCssFill className="text-7xl text-gray-300"/>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(1)}
                className="p-4 rounded-xl bg-gray-800 border border-gray-700"
            >
                <RiReactjsLine className="text-7xl text-gray-300"/>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4 rounded-xl bg-gray-800 border border-gray-700"
            >
                <SiRedux className="text-6xl text-gray-300"/>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4 rounded-xl bg-gray-800 border border-gray-700"
            >
                <SiMongodb className="text-6xl text-gray-300"/>
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(7)}
                className="p-4 rounded-xl bg-gray-800 border border-gray-700"
            >
                <SiExpress className="text-6xl text-gray-300"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech