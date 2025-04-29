import { useState, memo, useMemo } from 'react'
import {
  Box,
  Image,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Heading,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  HStack,
  Flex,
  Tooltip,
  Spinner,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaVideo,
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaWindowMaximize,
  FaImages,
} from 'react-icons/fa'
import styles from './styles.module.css'

export type Project = {
  id: number
  title: string
  tags: string[]
  imgs: string[]
  videoUrl?: string
  description: string
  linkDemo: string
  linkGitHub: string
  features?: string[]
}

export type FeaturedCardProps = {
  height: string | Record<string, string>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  project: Project
}

// Predefined motion components to avoid recreation
const MotionBox = motion(Box)
const MotionImage = motion(Image)

/**
 * ProjectModal displays full project details in a modal dialog
 */
const ProjectModal = memo(
  ({
    project,
    isOpen,
    onClose,
  }: {
    project: Project
    isOpen: boolean
    onClose: () => void
  }) => {
    const { t } = useTranslation('common')
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showIframe, setShowIframe] = useState(false)
    const [iframeLoading, setIframeLoading] = useState(false)

    // Function to toggle between iframe and image view
    const toggleView = () => {
      if (!showIframe) {
        setIframeLoading(true)
        setShowIframe(true)
      } else {
        setShowIframe(false)
      }
    }

    // Handle iframe load event
    const handleIframeLoad = () => {
      setIframeLoading(false)
    }

    // Shared color values
    const titleColor = useColorModeValue('gray.700', 'whiteAlpha.900')
    const descriptionColor = useColorModeValue('gray.600', 'gray.300')
    const modalBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')

    // Handle image navigation
    const nextImage = () => {
      setCurrentImageIndex((prev) =>
        prev === project.imgs.length - 1 ? 0 : prev + 1
      )
    }

    const prevImage = () => {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.imgs.length - 1 : prev - 1
      )
    }

    // Reset current image index when modal closes
    const handleClose = () => {
      onClose()
      setTimeout(() => {
        setCurrentImageIndex(0)
        setShowIframe(false)
      }, 300)
    }

    // Function to view project in iframe instead of navigating away
    const viewInIframe = () => {
      if (!showIframe) {
        setIframeLoading(true)
        setShowIframe(true)
      }
    }

    // Build the action buttons based on available project links
    const buttons = useMemo(
      () => [
        {
          label: showIframe
            ? t('projects.show_images')
            : t('projects.preview_live'),
          icon: showIframe ? <FaImages /> : <FaWindowMaximize />,
          onClick: toggleView,
          colorScheme: showIframe ? 'teal' : 'blue',
          isExternal: false,
        },
        {
          label: t('projects.view_code'),
          url: project.linkGitHub,
          icon: <FaGithub />,
          colorScheme: 'gray',
          isExternal: true,
        },
        ...(project.videoUrl
          ? [
              {
                label: t('projects.view_video'),
                url: project.videoUrl,
                icon: <FaVideo />,
                colorScheme: 'red',
                isExternal: true,
              },
            ]
          : []),
      ],
      [project, t, showIframe, toggleView]
    )

    return (
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size={{ base: 'full', sm: 'lg', md: 'xl' }}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay className={styles.modalOverlay} />
        <ModalContent
          maxH={{ base: '100vh', sm: '90vh', md: '85vh' }}
          maxW={{ base: '100%', md: '1000px' }}
          w="auto"
          borderRadius={{ base: '0', sm: 'xl' }}
          overflow="hidden"
          boxShadow="2xl"
          my={{ base: 0, sm: 4 }}
          className={styles.modalContent}
        >
          <ModalHeader
            position="sticky"
            top="0"
            zIndex="sticky"
            bg={modalBg}
            borderBottomWidth="1px"
            borderBottomColor={borderColor}
            py={{ base: 3, sm: 4 }}
            fontSize={{ base: 'lg', sm: 'xl' }}
            fontWeight="bold"
            textAlign="center"
            backdropFilter="blur(10px)"
          >
            {project.title}
          </ModalHeader>
          <ModalCloseButton size={{ base: 'md', sm: 'lg' }} />
          <ModalBody
            overflowY="auto"
            p={{ base: 4, sm: 6 }}
            sx={{
              '&::-webkit-scrollbar': {
                width: '6px',
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: useColorModeValue(
                  'rgba(0,0,0,0.2)',
                  'rgba(255,255,255,0.2)'
                ),
                borderRadius: '20px',
                border: '2px solid transparent',
                backgroundClip: 'content-box',
                '&:hover': {
                  backgroundColor: useColorModeValue(
                    'rgba(0,0,0,0.3)',
                    'rgba(255,255,255,0.3)'
                  ),
                },
              },
            }}
          >
            <Stack spacing={{ base: 6, sm: 8 }} alignItems="center">
              {/* Image Gallery */}
              <Box
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                position="relative"
                maxW="100%"
                w="100%"
                className={styles.revealAnimation}
                style={{ animationDelay: '0.1s' }}
              >
                {showIframe ? (
                  <Box
                    position="relative"
                    height={{ base: '550px', sm: '80vh', md: '60vh' }}
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
                        zIndex="1"
                        bg="rgba(0,0,0,0.1)"
                      >
                        <Spinner size="xl" color="blue.500" thickness="4px" />
                      </Flex>
                    )}
                    <iframe
                      src={project.linkDemo}
                      title={`${project.title} - live preview`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                      onLoad={handleIframeLoad}
                      style={{
                        opacity: iframeLoading ? 0.3 : 1,
                        transition: 'opacity 0.3s ease',
                      }}
                    ></iframe>

                    {/* External link button */}
                    <Tooltip
                      label={t('projects.open_in_new_tab')}
                      placement="top"
                    >
                      <IconButton
                        as="a"
                        href={project.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open in new tab"
                        icon={<FaExternalLinkAlt />}
                        position="absolute"
                        top="2"
                        left="2"
                        size={{ base: 'sm', sm: 'md' }}
                        colorScheme="blue"
                        borderRadius="full"
                        opacity={0.7}
                        _hover={{ opacity: 1 }}
                        zIndex="2"
                      />
                    </Tooltip>
                  </Box>
                ) : (
                  <Image
                    src={project.imgs[currentImageIndex]}
                    alt={`${project.title} - image ${currentImageIndex + 1}`}
                    width="100%"
                    height="auto"
                    maxH={{ base: '250px', sm: '300px', md: '400px' }}
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    className={styles.modalImage}
                  />
                )}

                {/* Toggle view button */}
                <Tooltip
                  label={
                    showIframe
                      ? t('projects.show_images') || 'Show Images'
                      : t('projects.preview_live') || 'Live Preview'
                  }
                  placement="top"
                >
                  <IconButton
                    aria-label="Toggle view"
                    icon={showIframe ? <FaImages /> : <FaWindowMaximize />}
                    position="absolute"
                    top="2"
                    right="2"
                    size={{ base: 'sm', sm: 'md' }}
                    colorScheme={showIframe ? 'teal' : 'blue'}
                    borderRadius="full"
                    onClick={toggleView}
                    opacity={0.7}
                    _hover={{ opacity: 1 }}
                    zIndex="2"
                  />
                </Tooltip>

                {/* Image navigation controls - only show if more than 1 image and not in iframe mode */}
                {project.imgs.length > 1 && !showIframe && (
                  <>
                    <IconButton
                      aria-label="Previous image"
                      icon={<FaChevronLeft />}
                      position="absolute"
                      left="2"
                      top="50%"
                      transform="translateY(-50%)"
                      size={{ base: 'sm', sm: 'md' }}
                      colorScheme="blackAlpha"
                      borderRadius="full"
                      onClick={prevImage}
                      className={styles.galleryNavPrev}
                      opacity={0.7}
                      _hover={{ opacity: 1 }}
                    />
                    <IconButton
                      aria-label="Next image"
                      icon={<FaChevronRight />}
                      position="absolute"
                      right="2"
                      top="50%"
                      transform="translateY(-50%)"
                      size={{ base: 'sm', sm: 'md' }}
                      colorScheme="blackAlpha"
                      borderRadius="full"
                      onClick={nextImage}
                      className={styles.galleryNavNext}
                      opacity={0.7}
                      _hover={{ opacity: 1 }}
                    />

                    {/* Image indicators */}
                    <HStack
                      spacing={2}
                      justify="center"
                      position="absolute"
                      bottom="3"
                      width="100%"
                    >
                      {project.imgs.map((_, index) => (
                        <Box
                          key={index}
                          as={FaCircle}
                          size="10px"
                          color={
                            index === currentImageIndex
                              ? 'white'
                              : 'whiteAlpha.600'
                          }
                          cursor="pointer"
                          onClick={() => setCurrentImageIndex(index)}
                          transition="all 0.2s"
                          _hover={{ color: 'white', transform: 'scale(1.2)' }}
                        />
                      ))}
                    </HStack>
                  </>
                )}
              </Box>

              {/* Tags */}
              <Wrap
                justify="center"
                spacing={{ base: 2, sm: 3 }}
                maxW="100%"
                className={styles.tagContainer}
              >
                {project.tags.map((tag, i) => (
                  <WrapItem key={i}>
                    <Badge
                      fontSize={{ base: 'xs', sm: 'sm' }}
                      px={{ base: 2, sm: 3 }}
                      py={1}
                      borderRadius="full"
                      textTransform="lowercase"
                      fontWeight="medium"
                      className={styles.projectTag}
                      style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                    >
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>

              {/* Description */}
              <Box
                maxW="100%"
                w="100%"
                className={styles.revealAnimation}
                style={{ animationDelay: '0.3s' }}
              >
                <Heading
                  as="h4"
                  fontSize={{ base: 'md', sm: 'lg' }}
                  color={titleColor}
                  mb={{ base: 2, sm: 3 }}
                >
                  {t('projects.description_label')}
                </Heading>
                <Text
                  fontSize={{ base: 'sm', sm: 'md' }}
                  color={descriptionColor}
                  lineHeight="1.8"
                >
                  {project.description}
                </Text>
              </Box>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <Stack
                  spacing={{ base: 3, sm: 4 }}
                  alignItems="flex-start"
                  w="100%"
                  className={`${styles.featureList} ${styles.revealAnimation}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <Heading
                    as="h4"
                    fontSize={{ base: 'md', sm: 'lg' }}
                    color={titleColor}
                  >
                    {t('projects.features')}
                  </Heading>
                  <Wrap spacing={{ base: 2, sm: 3 }} w="100%">
                    {project.features.map((feature, i) => (
                      <WrapItem key={i}>
                        <Badge
                          fontSize={{ base: 'xs', sm: 'sm' }}
                          px={{ base: 2, sm: 3 }}
                          py={1}
                          borderRadius="full"
                          textTransform="lowercase"
                          fontWeight="medium"
                          className={styles.featureItem}
                          style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                        >
                          {feature}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Stack>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter
            position="sticky"
            bottom="0"
            bg={modalBg}
            borderTopWidth="1px"
            borderTopColor={borderColor}
            py={{ base: 3, sm: 4 }}
            backdropFilter="blur(10px)"
          >
            <Flex
              justify="center"
              width="100%"
              gap={{ base: 2, sm: 4 }}
              flexWrap="wrap"
            >
              <Button
                onClick={handleClose}
                size={{ base: 'sm', sm: 'md' }}
                colorScheme="gray"
                variant="outline"
                borderRadius="full"
                px={{ base: 4, sm: 6 }}
                boxShadow="md"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
                className={styles.actionButton}
              >
                {t('close')}
              </Button>
              {buttons.map(
                (
                  { label, url, icon, colorScheme, isExternal, onClick },
                  index
                ) => (
                  <Button
                    key={index}
                    as={onClick ? undefined : 'a'}
                    href={onClick ? undefined : url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    onClick={onClick}
                    size={{ base: 'sm', sm: 'md' }}
                    colorScheme={colorScheme}
                    leftIcon={icon}
                    borderRadius="full"
                    px={{ base: 4, sm: 6 }}
                    boxShadow="md"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                    transition="all 0.2s"
                    className={styles.actionButton}
                  >
                    {label}
                  </Button>
                )
              )}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
)

/**
 * FeaturedCard renders a simplified project card showing only the title
 * When clicked, it opens a modal with full project details
 */
const FeaturedCard = memo(
  ({ idx, height, src, title, objectPosition, project }: FeaturedCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation('common')
    const cardBg = useColorModeValue('gray.50', 'gray.800')
    const cardHoverBg = useColorModeValue('white', 'gray.700')
    const overlayBg = useColorModeValue(
      'rgba(0, 0, 0, 0.75)',
      'rgba(0, 0, 0, 0.85)'
    )
    const titleColor = useColorModeValue('white', 'white')
    const numberBg = useColorModeValue('blue.500', 'blue.400')

    const handleCardClick = () => {
      onOpen()
    }

    return (
      <>
        <Box
          as="div"
          position="relative"
          borderRadius="xl"
          overflow="hidden"
          cursor="pointer"
          boxShadow="md"
          bg={cardBg}
          onClick={handleCardClick}
          height={height}
          width="100%"
          role="button"
          aria-label={`Open ${title} details`}
          tabIndex={0}
          className={styles.featureCard}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardClick()
            }
          }}
        >
          {/* Animated gradient background */}
          <Box className={styles.gradientBg} />

          {/* Project Image */}
          <Image
            src={src}
            alt={title}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition={objectPosition || 'center'}
          />

          {/* Overlay for title display */}
          <Box className={styles.imageOverlay}>
            <Stack
              spacing={2}
              align="center"
              justify="center"
              p={{ base: 2, sm: 4 }}
              textAlign="center"
              width="100%"
            >
              <Heading
                as="h3"
                size={{ base: 'sm', sm: 'md' }}
                color={titleColor}
                fontWeight="bold"
                textShadow="0 2px 10px rgba(0,0,0,0.8)"
                transition="transform 0.3s ease"
                className={styles.projectTitle}
              >
                {title}
              </Heading>

              {/* Preview Tags */}
              <Wrap justify="center" spacing={2} mt={2} opacity={0.9}>
                {project.tags.slice(0, 3).map((tag, i) => (
                  <WrapItem key={i}>
                    <Badge
                      fontSize="xs"
                      colorScheme="teal"
                      px={2}
                      py={0.5}
                      borderRadius="full"
                      textTransform="lowercase"
                      fontWeight="medium"
                      opacity={0.9}
                    >
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
                {project.tags.length > 3 && (
                  <WrapItem>
                    <Badge
                      fontSize="xs"
                      colorScheme="gray"
                      px={2}
                      py={0.5}
                      borderRadius="full"
                      textTransform="lowercase"
                      fontWeight="medium"
                      opacity={0.9}
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  </WrapItem>
                )}
              </Wrap>
            </Stack>
          </Box>
        </Box>

        {/* Project Modal */}
        <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
      </>
    )
  }
)

export default FeaturedCard
