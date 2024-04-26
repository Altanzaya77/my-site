'use client'
import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion'
import { startTransition } from 'react'
const App = () => {
  // const InputDivScale = useMotionValue(1)
  // const InputDivScaleSpring = useSpring(InputDivScale)
  const [scope, animate] = useAnimate()
  const imagesVariants = {
    initial: {
      opacity: 0,
      scale: 1
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 5,
        staggerChildren: 1,
        staggerDirection: -1
        //delay: 1,
        //delayChildren: 4,
        //when: 'beforeChildren'
      }
    },
    whileHover: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    whileTap: {
      scale: 1.5,
      transition: {
        duration: 2
      }
    }
  }
  const buttonVariants = {
    initial: {
      scale: 1
    },
    whileHover: {
      scale: 1.2
    },
    whileTap: {
      scale: 0.8
    }
  }
  const eachImageVariants = {
    initial: {
      scale: 0.5
    },
    animate: {
      scale: 1
    }
  }

  return (
    <motion.div
    ref={scope}
      drag
      dragTransition={
        {
          // max: 100,
          // min: 100,
          // bounceDamping:0.5,
          // timeConstant:2
        }
      }
      transition={{
        type: 'inertia',
        velocity: 2
      }}
      className=' relative m-10 flex h-44 w-auto items-center justify-center rounded-lg bg-[#1e41bc] px-5 py-3 text-center text-white ring-[20px] ring-[#dce5f9]'
    >
      <div className='flex flex-col gap-2'>
        <span
          id='first-span'
          className='text-sm font-semibold transition-all duration-500 sm:text-lg lg:text-2xl'
        >
          Welcome to Hust Villa
        </span>
        <span id='second-span' className='text-xs font-thin'>
          Log into your account with others
        </span>
        <motion.div
          // style={{ scale: InputDivScaleSpring }}
         
          className='ri ng-2 flex h-10 w-96 items-center rounded-full bg-[#7d93dd] ring-[#a0b1e6]'
        >
          <input
            className='w-full bg-transparent px-2 outline-none placeholder:text-gray-200'
            placeholder='tnzayaea@gmail.com'
          />
          <motion.button
            variants={buttonVariants}
            initial='initial'
            whileHover='whileHover'
            whileTap='whileTap'
            transition={{ type: 'spring' }}
            onClick={() => {
              animate(
                '#first-span',
                {
                  scale: 2
                },
                {
                  duration: 2
                }
              )
              animate(
                '#second-span',
                {
                  rotate: 360
                
                },
                {
                  duration: 2
                }
              )
              //InputDivScale.set(0.8)
            }}
            className='mr-1 flex size-8 items-center justify-center rounded-full bg-white'
          >
            <img src='/arrow-right.svg' className='w-5' alt='' />
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        variants={imagesVariants}
        initial='initial'
        animate='animate'
        whileHover='whileHover'
        whileTap='whileTap'
        className='group absolute -bottom-9 flex gap-4 *:size-12 *:rounded-full *:border-[3px] *:border-white *:shadow-xl'
      >
        <motion.img
          variants={eachImageVariants}
          src='/download.jpeg'
          className='peer group-hover:border-black'
        />
        <motion.img
          variants={eachImageVariants}
          src='/download.jpeg'
          className='group-hover:border-yellow-100'
        />
        <motion.img
          variants={eachImageVariants}
          src='/download.jpeg'
          className='transition-all duration-500 hover:scale-125 group-hover:border-red-700'
        />
        <motion.img
          variants={eachImageVariants}
          src='/download.jpeg'
          className='group-hover:border-blue-500'
        />
        <motion.img
          variants={eachImageVariants}
          src='/download.jpeg'
          className='group-hover:border-pink-300'
        />
      </motion.div>
    </motion.div>
  )
}

export default App
