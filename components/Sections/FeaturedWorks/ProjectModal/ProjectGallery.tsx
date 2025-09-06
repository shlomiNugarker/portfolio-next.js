import { useState, useCallback, memo } from 'react'
import {
  Box,
  Image,
  IconButton,
  Flex,
  useColorModeValue,
  AspectRatio,
  Spinner,
  Text,
  Badge,
  useBreakpointValue,
  Tooltip,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaCompress,
} from 'react-icons/fa'
import { Project } from '../types'
import { fadeIn } from 'config/animations'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

interface ProjectGalleryProps {
  project: Project
  currentImageIndex: number
  onImageChange: (direction: 'next' | 'prev' | number) => void
  showIframe: boolean
  iframeLoading: boolean
  onIframeLoad: () => void
  onToggleFullscreen: () => void
  isFullscreen: boolean
}

const ProjectGallery = memo(
  ({
    project,
    currentImageIndex,
    onImageChange,
    showIframe,
    iframeLoading,
    onIframeLoad,
    onToggleFullscreen,
    isFullscreen,
  }: ProjectGalleryProps) => {
    const [isHovering, setIsHovering] = useState(false)
    const isMobile = useBreakpointValue({ base: true, md: false })

    const galleryBg = useColorModeValue('gray.50', 'gray.900')
    const controlsBg = useColorModeValue('whiteAlpha.800', 'blackAlpha.700')
    const controlsHoverBg = useColorModeValue('white', 'gray.700')

    const handleMouseEnter = useCallback(() => {
      setIsHovering(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
      setIsHovering(false)
    }, [])

    return (
      <Box
        position="relative"
        width="100%"
        height="100%"
        bg={galleryBg}
        borderRadius="md"
        overflow="hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main content - either image or iframe */}
        <AnimatePresence mode="wait">
          {showIframe && project.allowIframe ? (
            <MotionBox
              key="iframe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              height="100%"
              width="100%"
              position="relative"
            >
              {iframeLoading && (
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  alignItems="center"
                  justifyContent="center"
                  bg={galleryBg}
                  zIndex={1}
                  flexDirection="column"
                  gap={4}
                >
                  <Spinner size="xl" color="blue.500" thickness="4px" />
                  <Text>Loading preview...</Text>
                </Flex>
              )}
              <Box
                as="iframe"
                src={project.linkDemo}
                title={`${project.title} live demo`}
                width="100%"
                height="100%"
                borderWidth="0"
                onLoad={onIframeLoad}
                zIndex={0}
                sx={{
                  aspectRatio: '16/9',
                }}
              />
            </MotionBox>
          ) : (
            <MotionBox
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              height="100%"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <AspectRatio ratio={16 / 9} width="100%" height="100%">
                <MotionImage
                  src={project.imgs[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  loading="lazy"
                  borderRadius="md"
                  quality={90}
                />
              </AspectRatio>
            </MotionBox>
          )}
        </AnimatePresence>

        {/* Navigation arrows - only show when hovering or on mobile */}
        {project.imgs.length > 1 && !showIframe && (
          <>
            <AnimatePresence>
              {(isHovering || isMobile) && (
                <>
                  <MotionBox
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      aria-label="Previous image"
                      icon={<FaChevronLeft />}
                      onClick={() => onImageChange('prev')}
                      variant="solid"
                      colorScheme="blue"
                      size="md"
                      isRound
                      bg={controlsBg}
                      _hover={{ bg: controlsHoverBg }}
                      boxShadow="lg"
                    />
                  </MotionBox>

                  <MotionBox
                    position="absolute"
                    right={4}
                    top="50%"
                    transform="translateY(-50%)"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconButton
                      aria-label="Next image"
                      icon={<FaChevronRight />}
                      onClick={() => onImageChange('next')}
                      variant="solid"
                      colorScheme="blue"
                      size="md"
                      isRound
                      bg={controlsBg}
                      _hover={{ bg: controlsHoverBg }}
                      boxShadow="lg"
                    />
                  </MotionBox>
                </>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Image counter badge */}
        {project.imgs.length > 1 && !showIframe && (
          <Badge
            position="absolute"
            bottom={4}
            left={4}
            px={3}
            py={1}
            borderRadius="full"
            bg={controlsBg}
            backdropFilter="blur(8px)"
            boxShadow="md"
            fontSize="sm"
          >
            {currentImageIndex + 1} / {project.imgs.length}
          </Badge>
        )}

        {/* Fullscreen toggle */}
        <AnimatePresence>
          {(isHovering || isMobile) && (
            <MotionBox
              position="absolute"
              top={4}
              right={4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Tooltip label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>
                <IconButton
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                  icon={isFullscreen ? <FaCompress /> : <FaExpand />}
                  onClick={onToggleFullscreen}
                  variant="solid"
                  colorScheme="gray"
                  size="md"
                  isRound
                  bg={controlsBg}
                  _hover={{ bg: controlsHoverBg }}
                  boxShadow="lg"
                />
              </Tooltip>
            </MotionBox>
          )}
        </AnimatePresence>

        {/* Thumbnail navigation */}
        {project.imgs.length > 1 && !showIframe && (
          <Flex
            position="absolute"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            justifyContent="center"
            gap={2}
            px={4}
            py={2}
            borderRadius="full"
            bg={controlsBg}
            backdropFilter="blur(8px)"
            boxShadow="md"
            maxW="80%"
            overflowX="auto"
            css={{
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': {
                height: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '2px',
              },
            }}
          >
            {project.imgs.map((img, idx) => (
              <Box
                key={idx}
                width="40px"
                height="40px"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                onClick={() => onImageChange(idx)}
                opacity={idx === currentImageIndex ? 1 : 0.6}
                transform={
                  idx === currentImageIndex ? 'scale(1.1)' : 'scale(1)'
                }
                boxShadow={idx === currentImageIndex ? 'md' : 'none'}
                transition="all 0.2s"
                _hover={{ opacity: 1 }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  loading="lazy"
                />
              </Box>
            ))}
          </Flex>
        )}
      </Box>
    )
  }
)

ProjectGallery.displayName = 'ProjectGallery'

export default ProjectGallery
