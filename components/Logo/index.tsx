import { memo } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

const Logo = () => (
  <AnimatePresence>
    <Link href="/" passHref></Link>
  </AnimatePresence>
)

export default memo(Logo)
