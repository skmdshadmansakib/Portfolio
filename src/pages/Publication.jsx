import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



import { motion } from "framer-motion";
import { published } from '../constants'

const Publication = () => {
  return (
    <motion.section className='max-container'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: -0 }}  
    transition={{ duration: 0.5 }}
    >
      <motion.h1 className='head-text'
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.1,
            ease: 'easeOut',
        }}
      >
        <span className='blue-gradient_text font-semibold drop-shadow'>Publications</span>
      </motion.h1>




      <div className='py-16'>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {published.map((experience) => (
              <VerticalTimelineElement
              key={experience.title}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                src={experience.icon}
                alt={experience.degree_name}
                className='w-[60%] h-[60%] object-contain'
                />
              </div>}
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
              >
                <div>
                <a href={'https://www.ijltemas.in/submission/index.php/online/article/view/1385/717'} target="_blank" rel="noopener noreferrer">
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  </a>
                </div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


    </motion.section>
  )
}

export default Publication