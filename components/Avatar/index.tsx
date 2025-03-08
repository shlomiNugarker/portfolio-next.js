import {
  Box,
  Image as ChkImage,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { avatarAnimation } from 'config/animations'

const AvatarImages = {
  DarkMode:
    'https://res.cloudinary.com/duajg3ah1/image/upload/v1741463143/khdlhgdxyme2h1fqduap.png',
  LightMode:
    'https://res.cloudinary.com/duajg3ah1/image/upload/v1741463143/khdlhgdxyme2h1fqduap.png',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )

  useEffect(() => {
    window.preloadedPictures = [
      AvatarImages.DarkMode,
      AvatarImages.LightMode,
    ].map((src) => {
      const img = new Image()
      img.src = src
      return img
    })
  }, [])

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: '300px', md: '300px' }}
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
          borderRadius="full"
          htmlWidth="300"
          htmlHeight="300"
          margin="auto"
          fallback={
            (
              <SkeletonCircle height="100%" width="100%" />
            ) as React.ReactElement
          }
          backgroundColor={useColorModeValue('gray.200', 'gray.700')}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
