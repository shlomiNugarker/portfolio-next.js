import { memo, useCallback } from 'react'
import {
  Box,
  Image,
  IconButton,
  HStack,
  Tooltip,
  Spinner,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '../types'
import useThemeStyles from 'hooks/theme/useThemeStyles'

const MotionBox = motion(Box)
const MotionImage = motion(Image)

interface ProjectImageGalleryProps {
  project: Project
  showIframe: boolean
  iframeLoading: boolean
  currentImageIndex: number
  onImageChange: (direction: 'next' | 'prev' | number) => void
  onIframeLoad: () => void
}

/**
 * Enhanced image gallery with smooth transitions and modern UI
 */
const ProjectImageGallery = memo(
  ({
    project,
    showIframe,
    iframeLoading,
    currentImageIndex,
    onImageChange,
    onIframeLoad,
  }: ProjectImageGalleryProps) => {
    const { t } = useTranslation('common')
    const { getCardBgColor } = useThemeStyles()

    const galleryBg = useColorModeValue('gray.100', 'gray.800')
    const controlsBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.800')
    const controlsHoverBg = useColorModeValue('white', 'gray.700')

    const handleImageNavigation = useCallback(
      (direction: 'next' | 'prev') => {
        onImageChange(direction)
      },
      [onImageChange]
    )

    const handleImageSelect = useCallback(
      (index: number) => {
        onImageChange(index)
      },
      [onImageChange]
    )

    return (
      <Box
        flex={{ base: '1', lg: '1.4' }}
        height="100%"
        position="relative"
        bg={galleryBg}
        overflow="hidden"
      >
        <AnimatePresence mode="wait">
          {showIframe ? (
            <MotionBox
              key="iframe"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              position="relative"
              height="100%"
              width="100%"
            >
              {/* Loading Spinner */}
              {iframeLoading && (
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  alignItems="center"
                  justifyContent="center"
                  zIndex="overlay"
                  bg="blackAlpha.300"
                  backdropFilter="blur(4px)"
                >
                  <Spinner size="xl" color="blue.500" thickness="4px" />
                </Flex>
              )}

              {/* Live Demo Iframe */}
              <iframe
                src={project.linkDemo}
                title={`${project.title} - live preview`}
                width="100%"
                height="100%"
                style={{
                  border: 'none',
                  opacity: iframeLoading ? 0.3 : 1,
                  transition: 'opacity 0.3s ease',
                }}
                onLoad={onIframeLoad}
                allow="clipboard-read; clipboard-write"
              />

              {/* External Link Button */}
              <Tooltip label={t('projects.open_in_new_tab')} placement="top">
                <IconButton
                  as="a"
                  href={project.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in new tab"
                  icon={<FaExternalLinkAlt />}
                  position="absolute"
                  bottom={4}
                  right={4}
                  size="lg"
                  colorScheme="blue"
                  borderRadius="full"
                  bg={controlsBg}
                  _hover={{
                    bg: controlsHoverBg,
                    transform: 'scale(1.1)',
                  }}
                  boxShadow="lg"
                  zIndex="overlay"
                />
              </Tooltip>
            </MotionBox>
          ) : (
            <MotionBox
              key="image-gallery"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              position="relative"
              height="100%"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <AnimatePresence mode="wait">
                <MotionImage
                  key={currentImageIndex}
                  src={project.imgs[currentImageIndex]}
                  alt={`${project.title} - screenshot ${currentImageIndex + 1}`}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </AnimatePresence>

              {/* Navigation Controls */}
              {project.imgs.length > 1 && (
                <>
                  <IconButton
                    aria-label="Previous image"
                    icon={<FaChevronLeft />}
                    position="absolute"
                    left={4}
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    borderRadius="full"
                    bg={controlsBg}
                    _hover={{
                      bg: controlsHoverBg,
                      transform: 'translateY(-50%) scale(1.1)',
                    }}
                    onClick={() => handleImageNavigation('prev')}
                    boxShadow="lg"
                    transition="all 0.2s"
                  />

                  <IconButton
                    aria-label="Next image"
                    icon={<FaChevronRight />}
                    position="absolute"
                    right={4}
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    borderRadius="full"
                    bg={controlsBg}
                    _hover={{
                      bg: controlsHoverBg,
                      transform: 'translateY(-50%) scale(1.1)',
                    }}
                    onClick={() => handleImageNavigation('next')}
                    boxShadow="lg"
                    transition="all 0.2s"
                  />

                  {/* Image Indicators */}
                  <HStack
                    spacing={2}
                    justify="center"
                    position="absolute"
                    bottom={4}
                    width="100%"
                    px={4}
                  >
                    <Box
                      bg={controlsBg}
                      borderRadius="full"
                      px={3}
                      py={2}
                      boxShadow="lg"
                    >
                      <HStack spacing={2}>
                        {project.imgs.map((_, index) => (
                          <Box
                            key={index}
                            as="button"
                            w={3}
                            h={3}
                            borderRadius="full"
                            bg={
                              index === currentImageIndex
                                ? 'blue.500'
                                : 'gray.400'
                            }
                            cursor="pointer"
                            onClick={() => handleImageSelect(index)}
                            transition="all 0.2s"
                            _hover={{
                              bg:
                                index === currentImageIndex
                                  ? 'blue.600'
                                  : 'gray.500',
                              transform: 'scale(1.2)',
                            }}
                          />
                        ))}
                      </HStack>
                    </Box>
                  </HStack>
                </>
              )}
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    )
  }
)

ProjectImageGallery.displayName = 'ProjectImageGallery'

export default ProjectImageGallery
