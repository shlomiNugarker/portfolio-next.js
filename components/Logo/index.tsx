import { memo, useState } from 'react'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Logo = () => {
  return (
    <AnimatePresence>
      <Link href="/" passHref></Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
