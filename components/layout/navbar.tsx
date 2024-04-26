'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const texts = ['MStars Hub', 'Bootcamp #10', 'Frame Motion', 'Tailwind CSS']
const menuTexts = ['Home', 'Services', 'About Us', 'About Project']
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTextIndex, setcActiveTextIndex] = useState(0)
  useEffect(() => {
    const textInterval = setInterval(() => {
      const newIndex = (activeTextIndex + 1) % texts.length
      setcActiveTextIndex(newIndex)
    }, 3000)
    return () => clearInterval(textInterval)
  }, [activeTextIndex])
  const textParentVariants = { initial: {}, animate: {}, exit: {} }
  const textChildrenVariants = {
    initial: { y: 30 },
    animate: { y: 0 },
    exit: { y: -30 }
  }

  const splitParentVariants = {
    initial: { x: 0 },
    hover: { x: 20, transition: { type: 'spring', staggerChildren: 0.1 } }
  }
  const splitChildrenVariants = { initial: { x: 0 }, hover: { x: -20 } }

  return (
    <div className='bg-tcransparent fixed top-0 z-40 flex h-20 w-screen items-center justify-between px-10 text-lg'>
      <div className='relative z-50 flex '>
        <AnimatePresence>
          <motion.div
            key={'parent' + activeTextIndex}
            variants={textParentVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className='text-ulaan absolute left-0 flex overflow-hidden whitespace-nowrap font-bold'
            transition={{
              duration: 0.5,
              staggerChildren: 0.1,
              type: 'spring'
            }}
          >
            {texts[activeTextIndex].split('').map((eachAlphabet, index) => (
              <motion.span
                className='inline- flex'
                key={'children-' + activeTextIndex + eachAlphabet + index}
                variants={textChildrenVariants}
              >
                {eachAlphabet === ' ' ? (
                  <span className='inline-flex w-2'></span>
                ) : (
                  eachAlphabet
                )}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className='z-50 flex size-8 flex-col gap-2'
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <motion.img
          src='/bar.svg'
          className='w-8'
          initial={{ rotate: 0, y: 0 }}
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? 6.5 : 0
          }}
        />
        <motion.img
          src='/bar.svg'
          className='w-8'
          initial={{ rotate: 0, y: 0 }}
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? -6.5 : 0
          }}
        />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key={'menu'}
            className='bg-menu absolute inset-0 flex h-screen w-screen flex-col justify-center gap-20 bg-white p-20 text-7xl *:border-b-2 *:pb-5'
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{ duration: 1.5, type: 'spring' }}
          >
            {menuTexts.map((eachMenuText) => (
              <motion.div
                className='flex'
                variants={splitParentVariants}
                initial='initial'
                whileHover='hover'
              >
                {eachMenuText.split('').map((eachAlphabet: any) => (
                  <motion.span variants={splitChildrenVariants}>
                    {eachAlphabet === ' ' ? (
                      <span className='inline-flex w-5'></span>
                    ) : (
                      eachAlphabet
                    )}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
