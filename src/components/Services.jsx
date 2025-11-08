import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: "Advertising",
            description: "We turn bold ideas into captivating digital experiences that leave a lasting impression.",
            icon: assets.ads_icon
        },
        {
            title: "Content marketing",
            description: "We help you create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience.",
            icon: assets.marketing_icon
        },{
            title: "Content writing",
            description: "We help you create marketing content that engages your audience and drives conversions.",
            icon: assets.content_icon
        },{
            title: "Social media",
            description: "We help you build and engage with your audience on social media platforms.",
            icon: assets.social_icon
        },
    ]

  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true}}
        transition={{ staggerChildren: 0.2 }}

    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title='How can we help ?' desc='From strategy to execution, we craft digital solutions that move your business forwards.'/>  

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>      
    </motion.div>
  )
}

export default Services