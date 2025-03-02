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
    'https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg',
  LightMode:
    'https://res.cloudinary.com/duajg3ah1/image/upload/v1660763357/shlomiN_mewit4.jpg',
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
        boxSize={{ base: 64, lg: 'sm' }}
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
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
