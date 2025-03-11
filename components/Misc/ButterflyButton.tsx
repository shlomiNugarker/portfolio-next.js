import { useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    bf_ReporterPlugin?: {
      toggleButterflyReporter: (apiKey: string) => void
    }
  }
}

const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`

const ButterflyButton = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://butterfly-button.web.app/cdn/butterfly-plugin.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.bf_ReporterPlugin) {
      window.bf_ReporterPlugin.toggleButterflyReporter(
        process.env.NEXT_PUBLIC_BUTTERFLY_API_KEY || ''
      )
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        zIndex: 1000,
        cursor: 'pointer',
      }}
    >
      <Image
        onClick={handleClick}
        src="https://butterfly-button.web.app/img/butterfly-logo-200.png"
        width={30}
        height={30}
        alt="The Butterfly Button"
        animation={`${breatheAnimation} 2.5s infinite ease-in-out`}
      />
    </motion.div>
  )
}

export default ButterflyButton
