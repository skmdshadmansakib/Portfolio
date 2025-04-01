import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { schooling } from '../constants'
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section className='max-container'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: -0 }}  
    transition={{ duration: 0.5 }}
    >
      <motion.h1 className='head-text'
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.1,
            ease: 'easeOut',
        }}
      >
        Working <span className='blue-gradient_text font-semibold drop-shadow'>Experiences</span>
      </motion.h1>




      <div className='py-16'>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {schooling.map((experience) => (
              <VerticalTimelineElement
              key={experience.degree_name}
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
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                  style={{margin:0}}>
                    {experience.degree_name}
                  </p>
                </div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>


    </motion.section>
  )
}

export default Experience