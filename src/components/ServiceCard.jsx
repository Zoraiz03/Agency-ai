import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {

  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.div
     initial={{opacity: 0, y: 30}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration:0.5, delay: index * 0.2}}
     viewport={{once: true}}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border
      border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900
      transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
    >

      <div
        className={`pointer-events-none absolute w-[200px] h-[200px] rounded-full
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
        blur-2xl transition-opacity duration-300 ${
          hovered ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          top: position.y - 100,
          left: position.x - 100
        }}
      />

      <div className='flex items-center gap-10 p-8 relative z-10'>
        
        <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
          <img
            src={service.icon}
            alt=""
            className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'
          />
        </div>

        <div className='flex-1'>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>

      </div>

    </motion.div>
  )
}

export default ServiceCard