'use client'

import { Reorder, motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const Day4 = () => {
  const [items, setItems] = useState([
    'MStars',
    'Academy',
    'Selbe',
    'DDish',
    'Property',
    'Unitel'
  ])

  return (
    <motion.div className='flex min-h-screen w-screen flex-col items-center justify-center gap-10'>
      {/* <Reorder.Group values={items} onReorder={setItems} axis='y'>
        {items.map((item) => (
          <Reorder.Item
            value={item}
            key={item}
            className="cursor-grab active:cursor-grabbing"
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group> */}

      {items.map((item) => (
        <EachBox item={item} />
      ))}
    </motion.div>
  )
}

const EachBox = ({ item }: { item: any }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)
  const handleMouseMove = (event: any) => {
    // console.log('Hiiiiiiiiiiiiiii')
    // console.log(event)
    // console.log(event.clientX, event.clientY)
    const boxEvent = event.currentTarget!.getBoundingClientRect()
    const boxWidth = boxEvent.width
    const boxHeight = boxEvent.height
    // console.log(boxEvent)
    const mouseX = event.clientX
    const mouseY = event.clientY

    const mouseYOnBox = mouseY - boxEvent.top
    const mouseXOnBox = mouseX - boxEvent.left
    const ifMouseIsAtTop = mouseYOnBox < boxHeight / 2
    const ifMouseIsAtBottom = mouseYOnBox > boxHeight / 2
    const ifMouseIsAtLeft = mouseXOnBox < boxWidth / 2
    const ifMouseIsAtRight = mouseXOnBox > boxWidth / 2

    if (ifMouseIsAtTop) {
      y.set(50)
    }
    if (ifMouseIsAtBottom) {
      y.set(-50)
    }
    if (ifMouseIsAtLeft) {
      x.set(-50)
    }
    if (ifMouseIsAtRight) {
      x.set(50)
    }

    const BoxOpacity = mouseYOnBox > boxEvent.height

    // console.log(mouseXOnBox, mouseYOnBox, 'opacity: ' + BoxOpacity)
  }
  const splitParentVariants = {
    initial: { x: 0 },
    hover: { x: 20, transition: { type: 'spring', staggerChildren: 0.1 } }
  }
  const splitChildrenVariants = { initial: { x: 0 }, hover: { x: -20 } }
  return (
    <motion.div
      key={item}
      className='h-96 border-2 border-blue-500 bg-emerald-400 text-5xl'
      // initial={{
      //   opacity: 0
      // }}
      // whileInView={{
      //   opacity: 1
      // }}
      // transition={{
      //   duration: 3
      // }}
      // viewport={{
      //   once: true
      // }}
      // onViewportEnter={}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='flex'
        variants={splitParentVariants}
        initial='initial'
        whileHover='hover'
      >
        {item.split('').map((eachAlphabet: any) => (
          <motion.span variants={splitChildrenVariants}>
            {eachAlphabet}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Day4
