'use client'

import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion'

const Day3 = () => {
  const [scope, animate] = useAnimate()
  const eachserviceVariables = {
    initial: {
      scale: 1,
      x: -1000
    },
    animate: {
      x: 0
    }
  }
  const parentVariables = {
    initial: {},
    animate: {}
  }
  return (
    <motion.div ref={scope} className='grid h-screen w-screen grid-cols-2 '>
      <div className='flex flex-col p-20'>
        <motion.span
          variants={eachserviceVariables}
          initial='initial'
          animate='animate'
          className='text-5xl font-semibold '
        >
          Our services:
        </motion.span>
        <motion.div
          className='flex max-h-screen flex-col text-xl '
          variants={parentVariables}
          initial='initial'
          animate='animate'
          whileHover='hover'
          transition={{
            staggerChildren: 1,
            delay: 1,
            delayChildren: 1
          }}
        >
          <motion.button
            onClick={() => {
              animate('#image-1', { opacity: 1, x: 0 })
              animate('#image-2', { opacity: 0, x: 1000 })
              animate('#image-3', { opacity: 0, x: 1000 })
            }}
            className='hover:underline'
            variants={eachserviceVariables}
          >
            - First Service
          </motion.button>
          <motion.button
            onClick={() => {
              animate('#image-1', { opacity: 0, x: 1000 })
              animate('#image-3', { opacity: 0, x: 1000 })
              animate('#image-2', { opacity: 1, x: 0 })
            }}
            className='hover:underline '
            variants={eachserviceVariables}
          >
            - Second Service
          </motion.button>
          <motion.button
            onClick={() => {
              animate('#image-3', { opacity: 1, x: 0 })
              animate('#image-1', { opacity: 0, x: 1000 })
              animate('#image-2', { opacity: 0, x: 1000 })
            }}
            className='hover:underline'
            variants={eachserviceVariables}
          >
            - Third Service
          </motion.button>
        </motion.div>
      </div>
      <div className='flec relative max-h-screen flex-col overflow-hidden'>
        <motion.img
          id='image-1'
          src='https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439032757_754060216857495_5430304203174801696_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7xC7_kswTMQAb6tp54G&_nc_ht=scontent.fuln1-2.fna&oh=00_AfD05LNpb6upDx1KSPL1w05LlvBPsdLd1F2NGZQ56E9uYg&oe=662CAA74'
          className='absolute inset-0 size-full translate-x-[1000px] opacity-0'
        ></motion.img>
        <motion.img
          id='image-2'
          src='https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439008074_754060220190828_2216783336742786970_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fRgYs91Z2oQAb5eMvye&_nc_ht=scontent.fuln1-2.fna&oh=00_AfCnQ0Q-Cf-Y9qi5dEzqu34v-Z_sxTxZwj0ztR1vzLOw-A&oe=662CCEC8'
          className='absolute inset-0 size-full translate-x-[1000px] opacity-0'
        ></motion.img>
        <motion.img
          id='image-3'
          src='https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/439018298_754060200190830_3950449197090820872_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9Y6Im99Sb6gAb4pEhZy&_nc_ht=scontent.fuln1-2.fna&oh=00_AfB2Yl-xTaGlO9-rAdqpihju-kFE1yoy_8cIKbbDELdl5g&oe=662CB446'
          className='absolute inset-0 size-full translate-x-[1000px] opacity-0'
        ></motion.img>
      </div>
    </motion.div>
  )
}

export default Day3
