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
    const bgBadge = useColorModeValue('gray.100', 'gray.700')

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
        },
        {
          label: t('projects.view_code'),
          url: project.linkGitHub,
          icon: <FaGithub />,
        },
        ...(project.videoUrl
          ? [
              {
                label: t('projects.view_video'),
                url: project.videoUrl,
                icon: <FaVideo />,
              },
            ]
          : []),
      ],
      [project, t]
    )

    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          maxH="80vh"
          maxW={{ base: '95%', sm: '85%', md: '600px' }}
          w="auto"
        >
          <ModalHeader
            position="sticky"
            top="0"
            zIndex="sticky"
            bg={useColorModeValue('white', 'gray.800')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            py={4}
          >
            {project.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            overflowY="auto"
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
            <Stack spacing={5} alignItems="center">
              {/* Image Gallery */}
              <Box
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                position="relative"
                maxW="100%"
                w="fit-content"
              >
                <Image
                  src={project.imgs[currentImageIndex]}
                  alt={`${project.title} - image ${currentImageIndex + 1}`}
                  width="100%"
                  height="auto"
                  maxH="300px"
                  objectFit="cover"
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
                      size="sm"
                      colorScheme="whiteAlpha"
                      borderRadius="full"
                      onClick={prevImage}
                    />
                    <IconButton
                      aria-label="Next image"
                      icon={<FaChevronRight />}
                      position="absolute"
                      right="2"
                      top="50%"
                      transform="translateY(-50%)"
                      size="sm"
                      colorScheme="whiteAlpha"
                      borderRadius="full"
                      onClick={nextImage}
                    />

                    {/* Image indicators */}
                    <HStack
                      spacing={1}
                      justify="center"
                      position="absolute"
                      bottom="2"
                      width="100%"
                    >
                      {project.imgs.map((_, index) => (
                        <Box
                          key={index}
                          as={FaCircle}
                          size="8px"
                          color={
                            index === currentImageIndex
                              ? 'white'
                              : 'whiteAlpha.600'
                          }
                          cursor="pointer"
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </HStack>
                  </>
                )}
              </Box>

              {/* Tags */}
              <Wrap justify="center" mt={2} maxW="100%">
                {project.tags.map((tag, i) => (
                  <WrapItem key={i}>
                    <Badge
                      variant="subtle"
                      fontSize="xs"
                      colorScheme="teal"
                      px={2}
                      py={0.5}
                      borderRadius="md"
                    >
                      {tag}
                    </Badge>
                  </WrapItem>
                ))}
              </Wrap>

              {/* Description */}
              <Box textAlign="center" maxW="100%">
                <Heading as="h4" fontSize="md" color={titleColor} mb={2}>
                  {t('projects.description_label')}
                </Heading>
                <Text fontSize="md" color={descriptionColor}>
                  {project.description}
                </Text>
              </Box>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <Stack spacing={2} alignItems="center" maxW="100%">
                  <Heading as="h4" fontSize="md" color={titleColor}>
                    {t('projects.features')}
                  </Heading>
                  <Wrap spacing={2} justify="center">
                    {project.features.map((feature, i) => (
                      <WrapItem key={i}>
                        <Badge
                          fontSize="xs"
                          colorScheme="purple"
                          px={2}
                          py={0.5}
                          borderRadius="md"
                          variant="subtle"
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
            bg={useColorModeValue('white', 'gray.800')}
            borderTopWidth="1px"
            borderTopColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <Wrap justify="center" spacing={3} width="100%">
              {buttons.map(({ label, url, icon }, index) => (
                <WrapItem key={index}>
                  <Button
                    as="a"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    size="sm"
                    colorScheme="blue"
                    leftIcon={icon}
                  >
                    {label}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
)

/**
 * FeaturedCard renders a project card with just an image and hover effect.
 * When clicked, it opens a modal with full project details.
 */
const FeaturedCard = memo(
  ({
    idx,
    height,
    src,
    title,
    description,
    objectPosition,
    ctaUrl,
    project,
  }: FeaturedCardProps) => {
    const bg = useColorModeValue('gray.50', 'gray.800')
    const bgHover = useColorModeValue(
      'rgba(255, 255, 255, 0.9)',
      'rgba(26, 32, 44, 0.9)'
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation('common')

    return (
      <>
        <MotionBox
          position="relative"
          borderRadius="xl"
          overflow="hidden"
          cursor="pointer"
          boxShadow="lg"
          onClick={onOpen}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          transition="all 0.3s"
          height="250px"
        >
          {/* Project Image with parallax effect */}
          <MotionImage
            src={src}
            alt={title}
            height="100%"
            width="100%"
            objectFit="cover"
            objectPosition={objectPosition || 'center'}
            transition="all 0.5s"
            whileHover={{ scale: 1.1 }}
            borderRadius="xl"
          />

          {/* Overlay on hover with title and tags */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgGradient="linear(to-t, blackAlpha.800, blackAlpha.400)"
            opacity="0"
            transition="all 0.3s ease-in-out"
            _hover={{ opacity: 1 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={4}
          >
            <Heading
              size="md"
              color="white"
              textAlign="center"
              mb={3}
              textShadow="0px 2px 5px rgba(0,0,0,0.5)"
            >
              {title}
            </Heading>

            {/* Show a few tags on hover */}
            <Wrap justify="center" mb={3}>
              {project.tags.slice(0, 3).map((tag, i) => (
                <WrapItem key={i}>
                  <Badge
                    colorScheme="teal"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                  >
                    {tag}
                  </Badge>
                </WrapItem>
              ))}
              {project.tags.length > 3 && (
                <WrapItem>
                  <Badge
                    colorScheme="gray"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                  >
                    +{project.tags.length - 3}
                  </Badge>
                </WrapItem>
              )}
            </Wrap>

            <Button
              size="sm"
              colorScheme="blue"
              mt={2}
              opacity={0.9}
              _hover={{ opacity: 1 }}
            >
              {t('projects.view_details')}
            </Button>
          </Box>
        </MotionBox>

        {/* Project Modal */}
        <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
      </>
    )
  }
)

export default FeaturedCard
