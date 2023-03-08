'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function Client({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    // <AnimatePresence mode='wait' initial={false}>
      <motion.div 
        key={pathname}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    // </AnimatePresence>)
    )
}