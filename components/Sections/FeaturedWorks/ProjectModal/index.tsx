import { memo, useState, useCallback, useMemo } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useColorModeValue,
  Box,
  VStack,
  HStack,
  IconButton,
  Tooltip,
  useBreakpointValue,
  Flex,
  Heading,
  Button,
  ButtonGroup,
  Text,
  Divider,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaVideo,
  FaWindowMaximize,
  FaTimes,
  FaImages,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

import { Project } from '../types'
import ProjectGallery from './ProjectGallery'
import ProjectDetails from './ProjectDetails'
import { fadeIn, scaleUp } from 'config/animations'
import useThemeStyles from 'hooks/theme/useThemeStyles'

const MotionBox = motion(Box)

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

/**
 * Modern, immersive project modal with enhanced UX and clean architecture
 */
const ProjectModal = memo(({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t } = useTranslation('common')
  const { getCardBgColor, getBgColor, getDividerColor, isDarkMode } =
    useThemeStyles()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showIframe, setShowIframe] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Responsive modal sizing
  const modalSize = useBreakpointValue({
    base: 'full',
    md: isFullscreen ? 'full' : '5xl',
    lg: isFullscreen ? 'full' : '6xl',
  })

  const modalMaxW = useBreakpointValue({
    base: '100vw',
    md: isFullscreen ? '100vw' : '85vw',
    lg: isFullscreen ? '100vw' : '90vw',
    xl: isFullscreen ? '100vw' : '85vw',
  })

  const modalMaxH = useBreakpointValue({
    base: '100vh',
    md: isFullscreen ? '100vh' : '90vh',
    lg: isFullscreen ? '100vh' : '95vh',
  })

  // Layout configuration for fullscreen mode
  const layoutConfig = useMemo(
    () => ({
      mainContentHeight: isFullscreen ? '85vh' : '60vh',
      mainContentDirection: { base: 'column', lg: 'row' } as const,
      galleryWidth: { base: '100%', lg: isFullscreen ? '70%' : '60%' },
      detailsWidth: { base: '100%', lg: isFullscreen ? '30%' : '40%' },
    }),
    [isFullscreen]
  )

  // Color values with theme support
  const modalBg = getCardBgColor()
  const borderColor = getDividerColor()
  const overlayBg = useColorModeValue('blackAlpha.700', 'blackAlpha.800')
  const headerBg = useColorModeValue('whiteAlpha.900', 'gray.800')
  const headerShadow = useColorModeValue('sm', 'md')

  // Handlers
  const handleToggleView = useCallback(() => {
    if (!showIframe) {
      setIframeLoading(true)
      setShowIframe(true)
    } else {
      setShowIframe(false)
    }
  }, [showIframe])

  const handleIframeLoad = useCallback(() => {
    setIframeLoading(false)
  }, [])

  const handleImageChange = useCallback(
    (direction: 'next' | 'prev' | number) => {
      if (typeof direction === 'number') {
        setCurrentImageIndex(direction)
      } else if (direction === 'next') {
        setCurrentImageIndex((prev) =>
          prev === project.imgs.length - 1 ? 0 : prev + 1
        )
      } else {
        setCurrentImageIndex((prev) =>
          prev === 0 ? project.imgs.length - 1 : prev - 1
        )
      }
    },
    [project.imgs.length]
  )

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev)
  }, [])

  const handleClose = useCallback(() => {
    onClose()
    // Reset state after modal closes
    setTimeout(() => {
      setCurrentImageIndex(0)
      setShowIframe(false)
      setIframeLoading(false)
      setIsFullscreen(false)
    }, 300)
  }, [onClose])

  // Memoized action buttons
  const actionButtons = useMemo(
    () => [
      {
        label: t('projects.view_demo') || 'View Demo',
        url: project.linkDemo,
        icon: <FaExternalLinkAlt />,
        colorScheme: 'blue',
        isExternal: true,
        tooltip: 'Open live demo in new tab',
      },
      {
        label: t('projects.view_code') || 'View Code',
        url: project.linkGitHub,
        icon: <FaGithub />,
        colorScheme: 'gray',
        isExternal: true,
        tooltip: 'View source code on GitHub',
      },
      ...(project.videoUrl
        ? [
            {
              label: t('projects.view_video') || 'View Video',
              url: project.videoUrl,
              icon: <FaVideo />,
              colorScheme: 'red',
              isExternal: true,
              tooltip: 'Watch demo video',
            },
          ]
        : []),
    ],
    [project, t]
  )

  const toggleViewButton = useMemo(
    () => ({
      label: showIframe
        ? t('projects.show_images') || 'Show Images'
        : t('projects.preview_live') || 'Live Preview',
      icon: showIframe ? <FaImages /> : <FaWindowMaximize />,
      onClick: handleToggleView,
      colorScheme: showIframe ? 'teal' : 'purple',
      variant: 'outline',
      tooltip: showIframe
        ? 'Switch back to image gallery'
        : 'Load live interactive preview',
      isDisabled: !project.allowIframe,
    }),
    [showIframe, t, handleToggleView, project.allowIframe]
  )

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          size={modalSize}
          isCentered={!isFullscreen}
          motionPreset="slideInBottom"
          closeOnOverlayClick={true}
          closeOnEsc={true}
          scrollBehavior="inside"
          preserveScrollBarGap={true}
          blockScrollOnMount={true}
        >
          <ModalOverlay
            bg={overlayBg}
            backdropFilter="blur(12px)"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <ModalContent
            as={MotionBox}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={scaleUp}
            maxW={modalMaxW}
            maxH={modalMaxH}
            bg={modalBg}
            borderRadius={{
              base: isFullscreen ? 'none' : 'md',
              md: isFullscreen ? 'none' : '2xl',
            }}
            overflow="hidden"
            boxShadow={isFullscreen ? 'none' : '2xl'}
            border={isFullscreen ? 'none' : '1px solid'}
            borderColor={isFullscreen ? 'transparent' : borderColor}
            position="relative"
            m={isFullscreen ? 0 : undefined}
          >
            {/* Header */}
            <Flex
              direction="row"
              align="center"
              justify="space-between"
              py={4}
              px={6}
              bg={headerBg}
              borderBottom="1px solid"
              borderColor={borderColor}
              boxShadow={headerShadow}
              position="relative"
              zIndex={5}
            >
              <MotionBox variants={fadeIn} initial="initial" animate="animate">
                <Heading size="lg" noOfLines={1}>
                  {project.title}
                </Heading>
                {project.subtitle && (
                  <Text color="gray.500" fontSize="md" mt={1}>
                    {project.subtitle}
                  </Text>
                )}
              </MotionBox>

              <HStack spacing={2}>
                {project.allowIframe && (
                  <Tooltip label={toggleViewButton.tooltip}>
                    <Button
                      leftIcon={toggleViewButton.icon}
                      onClick={toggleViewButton.onClick}
                      colorScheme={toggleViewButton.colorScheme}
                      variant={toggleViewButton.variant}
                      size="sm"
                      isDisabled={toggleViewButton.isDisabled}
                    >
                      {toggleViewButton.label}
                    </Button>
                  </Tooltip>
                )}

                <IconButton
                  aria-label="Close modal"
                  icon={<FaTimes />}
                  variant="ghost"
                  colorScheme="gray"
                  borderRadius="full"
                  onClick={handleClose}
                />
              </HStack>
            </Flex>

            {/* Main Content */}
            <Flex
              direction={layoutConfig.mainContentDirection}
              height={layoutConfig.mainContentHeight}
              width="100%"
              overflow="hidden"
            >
              {/* Gallery Section */}
              <Box
                width={layoutConfig.galleryWidth}
                height={{ base: '50%', lg: '100%' }}
                position="relative"
              >
                <ProjectGallery
                  project={project}
                  currentImageIndex={currentImageIndex}
                  onImageChange={handleImageChange}
                  showIframe={showIframe}
                  iframeLoading={iframeLoading}
                  onIframeLoad={handleIframeLoad}
                  onToggleFullscreen={handleToggleFullscreen}
                  isFullscreen={isFullscreen}
                />
              </Box>

              {/* Details Section */}
              <Box
                width={layoutConfig.detailsWidth}
                height={{ base: '50%', lg: '100%' }}
                borderLeft={{ base: 'none', lg: '1px solid' }}
                borderTop={{ base: '1px solid', lg: 'none' }}
                borderColor={borderColor}
              >
                <ProjectDetails project={project} />
              </Box>
            </Flex>

            {/* Footer */}
            <Box
              py={4}
              px={6}
              borderTop="1px solid"
              borderColor={borderColor}
              bg={headerBg}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'stretch', md: 'center' }}
                justify="space-between"
                gap={4}
              >
                <ButtonGroup spacing={3} width={{ base: '100%', md: 'auto' }}>
                  {actionButtons.map((button, idx) => (
                    <Tooltip key={idx} label={button.tooltip}>
                      <Button
                        as="a"
                        href={button.url}
                        target={button.isExternal ? '_blank' : undefined}
                        rel={
                          button.isExternal ? 'noopener noreferrer' : undefined
                        }
                        leftIcon={button.icon}
                        colorScheme={button.colorScheme}
                        size={{ base: 'md', md: 'md' }}
                        width={{ base: '100%', md: 'auto' }}
                      >
                        {button.label}
                      </Button>
                    </Tooltip>
                  ))}
                </ButtonGroup>

                <Button
                  variant="ghost"
                  onClick={handleClose}
                  width={{ base: '100%', md: 'auto' }}
                >
                  {t('projects.close') || 'Close'}
                </Button>
              </Flex>
            </Box>
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  )
})

ProjectModal.displayName = 'ProjectModal'

export default ProjectModal
