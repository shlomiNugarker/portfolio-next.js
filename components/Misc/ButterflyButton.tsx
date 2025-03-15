import { useEffect, useState, memo } from 'react'
import { Box, Image, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

// Type definitions for the Butterfly Reporter API
declare global {
  interface Window {
    bf_ReporterPlugin?: {
      toggleButterflyReporter: (apiKey: string) => void
    }
  }
}

// Constants for better maintainability
const BUTTERFLY_SCRIPT_URL = 'https://butterfly-button.web.app/cdn/butterfly-plugin.js'
const BUTTERFLY_LOGO_URL = 'https://butterfly-button.web.app/img/butterfly-logo-200.png'
const BUTTON_SIZE = 30

// Animation for the breathing effect
const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
`

/**
 * ButterflyButton component for feedback reporting
 * Features:
 * - Dynamic script loading
 * - Animated hover effect
 * - Accessible tooltip
 * - Error handling
 */
const ButterflyButton = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  
  // Different shadow colors based on theme
  const boxShadow = useColorModeValue(
    '0 2px 5px rgba(0,0,0,0.2)',
    '0 2px 5px rgba(255,255,255,0.2)'
  )

  // Load the Butterfly script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = BUTTERFLY_SCRIPT_URL
    script.async = true
    script.onload = () => setIsScriptLoaded(true)
    script.onerror = () => {
      console.error('Failed to load Butterfly Reporter script')
      setHasError(true)
    }
    
    document.body.appendChild(script)

    return () => {
      try {
        document.body.removeChild(script)
      } catch (error) {
        console.error('Error cleaning up Butterfly script:', error)
      }
    }
  }, [])

  // Handle button click to open the feedback reporter
  const handleClick = () => {
    try {
      if (typeof window !== 'undefined' && window.bf_ReporterPlugin) {
        const apiKey = process.env.NEXT_PUBLIC_BUTTERFLY_API_KEY || ''
        if (!apiKey) {
          console.warn('Butterfly API key is not set')
        }
        window.bf_ReporterPlugin.toggleButterflyReporter(apiKey)
      } else if (isScriptLoaded) {
        console.warn('Butterfly plugin is not available')
      }
    } catch (error) {
      console.error('Error opening Butterfly Reporter:', error)
      setHasError(true)
    }
  }

  // Don't render if there was an error loading the script
  if (hasError) return null

  return (
    <Tooltip 
      label="Send Feedback" 
      aria-label="Send feedback button"
      placement="left"
      hasArrow
    >
      <Box
        bottom="20px"
        right="20px"
        margin="10px"
        zIndex={1000}
        cursor="pointer"
        transition="all 0.3s ease"
        borderRadius="full"
        onClick={handleClick}
        role="button"
        aria-label="Send Feedback"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
          }
        }}
      >
        <Image
          src={BUTTERFLY_LOGO_URL}
          width={BUTTON_SIZE}
          height={BUTTON_SIZE}
          alt="Send Feedback"
          loading="lazy"
          draggable={false}
        />
      </Box>
    </Tooltip>
  )
}

export default memo(ButterflyButton)