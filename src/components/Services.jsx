import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: 'Advertisinng',
            description: 'We turn bold ideas into powerful digital solutions that connect,engage...',
            icon: assets.ads_icon
        },
         {
            title: 'Content Marketing',
            description: 'We help you execute your content strategy with engaging and relevant content that resonates with your audience.',
            icon: assets.marketing_icon
        },
         {
            title: 'content Creation',
            description: 'We create compelling and relevant content that resonates with your audience, drives engagement, and helps you achieve your marketing goals.',
            icon: assets.content_icon
        },
         {
            title: 'Social Media',
            description: 'We help you build a strong social media presence, engage with your audience, and drive meaningful interactions that boost your brand.',
            icon: assets.social_icon
        },
    ]


  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white  '> 

    <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that moves your business forward.' />

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
        ))}
    </div>

    </motion.div>
  )
}

export default Services