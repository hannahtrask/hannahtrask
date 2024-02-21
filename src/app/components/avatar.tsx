'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Avatar({ id, alt }) {
// todo get framer working
  return (
      <>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <Image src={`/assets/${id}.png`} alt={alt} width="64" height="64"/>
        </motion.div>
      </>
  )
}