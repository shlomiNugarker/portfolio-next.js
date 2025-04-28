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
} from 'react-icons/fa'

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
  height: string
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
      setTimeout(() => setCurrentImageIndex(0), 300)
    }

    // Build the action buttons based on available project links
    const buttons = useMemo(
      () => [
        {
          label: t('projects.view_project'),
          url: project.linkDemo,
          icon: <FaExternalLinkAlt />,
          colorScheme: 'blue',
        },
        {
          label: t('projects.view_code'),
          url: project.linkGitHub,
          icon: <FaGithub />,
          colorScheme: 'gray',
        },
        ...(project.videoUrl
          ? [
              {
                label: t('projects.view_video'),
                url: project.videoUrl,
                icon: <FaVideo />,
                colorScheme: 'red',
              },
            ]
          : []),
      ],
      [project, t]
    )

    return (
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="xl"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
        <ModalContent
          maxH="90vh"
          maxW={{ base: '95%', sm: '85%', md: '700px' }}
          w="auto"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="2xl"
        >
          <ModalHeader
            position="sticky"
            top="0"
            zIndex="sticky"
            bg={modalBg}
            borderBottomWidth="1px"
            borderBottomColor={borderColor}
            py={4}
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
          >
            {project.title}
          </ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody
            overflowY="auto"
            p={6}
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
            <Stack spacing={8} alignItems="center">
              {/* Image Gallery */}
              <Box
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                position="relative"
                maxW="100%"
                w="100%"
              >
                <Image
                  src={project.imgs[currentImageIndex]}
                  alt={`${project.title} - image ${currentImageIndex + 1}`}
                  width="100%"
                  height="auto"
                  maxH="400px"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.02)' }}
                />

                {/* Image navigation controls - only show if more than 1 image */}
                {project.imgs.length > 1 && (
                  <>
                    <IconButton
                      aria-label="Previous image"
                      icon={<FaChevronLeft />}
                      position="absolute"
                      left="2"
                      top="50%"
                      transform="translateY(-50%)"
                      size="md"
                      colorScheme="blackAlpha"
                      borderRadius="full"
                      onClick={prevImage}
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
                      size="md"
                      colorScheme="blackAlpha"
                      borderRadius="full"
                      onClick={nextImage}
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
              <Wrap justify="center" spacing={3} maxW="100%">
                {project.tags.map((tag, i) => (
                  <WrapItem key={i}>
                    <Badge
                      fontSize="sm"
                      colorScheme="teal"
                      px={3}
                      py={1}
                      borderRadius="full"
                      textTransform="lowercase"
                      fontWeight="medium"
                    >
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>

              {/* Description */}
              <Box textAlign="left" maxW="100%" w="100%">
                <Heading as="h4" fontSize="lg" color={titleColor} mb={3}>
                  {t('projects.description_label')}
                </Heading>
                <Text fontSize="md" color={descriptionColor} lineHeight="1.8">
                  {project.description}
                </Text>
              </Box>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <Stack spacing={4} alignItems="flex-start" w="100%">
                  <Heading as="h4" fontSize="lg" color={titleColor}>
                    {t('projects.features')}
                  </Heading>
                  <Wrap spacing={3} w="100%">
                    {project.features.map((feature, i) => (
                      <WrapItem key={i}>
                        <Badge
                          fontSize="sm"
                          colorScheme="purple"
                          px={3}
                          py={1}
                          borderRadius="full"
                          textTransform="lowercase"
                          fontWeight="medium"
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
            py={4}
          >
            <Flex justify="center" width="100%" gap={4} flexWrap="wrap">
              {buttons.map(({ label, url, icon, colorScheme }, index) => (
                <Button
                  key={index}
                  as="a"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  size="md"
                  colorScheme={colorScheme}
                  leftIcon={icon}
                  borderRadius="full"
                  px={6}
                  boxShadow="md"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  {label}
                </Button>
              ))}
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
      'rgba(255, 255, 255, 0.85)',
      'rgba(23, 25, 35, 0.85)'
    )

    return (
      <>
        <MotionBox
          position="relative"
          borderRadius="xl"
          overflow="hidden"
          cursor="pointer"
          boxShadow="md"
          bg={cardBg}
          onClick={onOpen}
          whileHover={{
            y: -8,
            boxShadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          height={height}
        >
          {/* Project Image */}
          <MotionImage
            src={src}
            alt={title}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition={objectPosition || 'center'}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Modern overlay with just the title */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="40%"
            bgGradient="linear(to-t, blackAlpha.900, transparent)"
            transition="all 0.3s ease-in-out"
            display="flex"
            alignItems="flex-end"
            padding={5}
          >
            <Heading
              size="md"
              color="white"
              textAlign="left"
              textShadow="0px 2px 5px rgba(0,0,0,0.5)"
              fontWeight="bold"
            >
              {title}
            </Heading>
          </Box>

          {/* Clickable indicator */}
          <Box
            position="absolute"
            top="4"
            right="4"
            bg="blue.500"
            color="white"
            borderRadius="full"
            width="40px"
            height="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            fontWeight="bold"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            opacity="0.9"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.1)', opacity: 1 }}
          >
            {idx}
          </Box>
        </MotionBox>

        {/* Project Modal */}
        <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
      </>
    )
  }
)

export default FeaturedCard
