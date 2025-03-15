import {
  Box,
  Image as ChkImage,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { avatarAnimation } from 'config/animations'

const AVATAR_SIZE = '300px'
const AVATAR_BORDER_RADIUS = 'full'

const AvatarImages = {
  DarkMode:
    'https://res.cloudinary.com/duajg3ah1/image/upload/v1741872339/myPortfolio/hwj1rvjunnmiszropyjb.png',
  LightMode:
    'https://res.cloudinary.com/duajg3ah1/image/upload/v1741872339/myPortfolio/hwj1rvjunnmiszropyjb.png',
} as const

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  // Memoize MotionBox to prevent unnecessary re-renders
  const MotionBox = useMemo(() => motion(Box), [])

  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )

  useEffect(() => {
    const preloadImages = () => {
      try {
        window.preloadedPictures = Object.values(AvatarImages).map((src) => {
          const img = new Image()
          img.src = src
          return img
        })
      } catch (error) {
        console.error('Failed to preload avatar images:', error)
      }
    }

    preloadImages()
  }, [])

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: AVATAR_SIZE, md: AVATAR_SIZE }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate="animate"
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="Shlomi's Avatar"
          borderRadius={AVATAR_BORDER_RADIUS}
          htmlWidth={AVATAR_SIZE}
          htmlHeight={AVATAR_SIZE}
          margin="auto"
          loading="eager"
          fallback={
            <SkeletonCircle
              height="100%"
              width="100%"
              startColor={useColorModeValue('gray.200', 'gray.700')}
              endColor={useColorModeValue('gray.300', 'gray.600')}
            />
          }
          backgroundColor={useColorModeValue('gray.200', 'gray.700')}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
