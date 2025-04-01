import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Loader  from '../components/Loader';
import Fox from '../models/Fox'
import { Canvas } from '@react-three/fiber';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { motion } from "framer-motion";
import { socialLinks } from '../constants';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState ({ name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      { 
        from_name: form.name,
        to_name: "Sakib",
        from_email: form.email,
        to_email: 'shadmans804@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success' })

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setForm({ name: '', email: '', message: ''})
      }, [3000])

    }).catch(() => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({ show: true, text: 'I didnt receive your message', type: 'danger' })
    })
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <motion.h1 className='head-text'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        >Get in Touch</motion.h1>
        {alert.show && <Alert {...alert} />}

        <motion.form
        className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
          <motion.label className='text-black-500 font-semibold'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.2 }}          
          >
            Name
            <input 
            type='text'
            name='name'
            className='input'
            placeholder='Sakib'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </motion.label>

          <motion.label className='text-black-500 font-semibold'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: -0 }}  
          transition={{ duration: 0.2 }}  
          >
            Email
            <input 
            type='email'
            name='email'
            className='input'
            placeholder='@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </motion.label>

          <motion.label className='text-black-500 font-semibold'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.2 }}            
          >
            Your Message
            <textarea
            name='message'
            rows={5}
            className='textarea'
            placeholder='Let me know how I can help you'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </motion.label>
          <motion.button
          type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.2 }}            
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

    <motion.div className='flex justify-center items-center pt-7'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        >
      {socialLinks.map((link) => (
        <a 
          key={link.name} 
          href={link.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex justify-center items-center mx-2'
        >
          <motion.img src={link.iconUrl} alt={link.name} className='w-9 h-9 mr-3' whileHover={{ scale: 1.9 }}/>
        </a>
      ))}
    </motion.div>

      </div>
      
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
            currentAnimation={currentAnimation} 
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact;