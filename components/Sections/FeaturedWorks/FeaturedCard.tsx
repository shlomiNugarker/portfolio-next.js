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
        size={{ base: 'full', sm: 'lg', md: 'xl' }}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.600" />
        <ModalContent
          maxH={{ base: '100vh', sm: '90vh', md: '85vh' }}
          maxW={{ base: '70%', md: '700px' }}
          w="auto"
          borderRadius={{ base: '0', sm: 'xl' }}
          overflow="hidden"
          boxShadow="2xl"
          my={{ base: 0, sm: 4 }}
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
              >
                <Image
                  src={project.imgs[currentImageIndex]}
                  alt={`${project.title} - image ${currentImageIndex + 1}`}
                  width="100%"
                  height="auto"
                  maxH={{ base: '250px', sm: '300px', md: '400px' }}
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
                      size={{ base: 'sm', sm: 'md' }}
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
                      size={{ base: 'sm', sm: 'md' }}
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
              <Wrap justify="center" spacing={{ base: 2, sm: 3 }} maxW="100%">
                {project.tags.map((tag, i) => (
                  <WrapItem key={i}>
                    <Badge
                      fontSize={{ base: 'xs', sm: 'sm' }}
                      colorScheme="teal"
                      px={{ base: 2, sm: 3 }}
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
                          colorScheme="purple"
                          px={{ base: 2, sm: 3 }}
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
            py={{ base: 3, sm: 4 }}
          >
            <Flex
              justify="center"
              width="100%"
              gap={{ base: 2, sm: 4 }}
              flexWrap="wrap"
            >
              {buttons.map(({ label, url, icon, colorScheme }, index) => (
                <Button
                  key={index}
                  as="a"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  size={{ base: 'sm', sm: 'md' }}
                  colorScheme={colorScheme}
                  leftIcon={icon}
                  borderRadius="full"
                  px={{ base: 4, sm: 6 }}
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
      'rgba(0, 0, 0, 0.75)',
      'rgba(0, 0, 0, 0.85)'
    )
    const titleColor = useColorModeValue('white', 'white')
    const numberBg = useColorModeValue('blue.500', 'blue.400')

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
          width="100%"
          role="group"
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

          {/* Overlay for title display */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgGradient={`linear(to-t, ${overlayBg} 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="opacity 0.3s ease"
            opacity="0"
            _groupHover={{ opacity: 1 }}
          >
            <Stack
              spacing={2}
              align="center"
              justify="center"
              p={{ base: 2, sm: 4 }}
              textAlign="center"
            >
              <Heading
                as="h3"
                size={{ base: 'sm', sm: 'md' }}
                color={titleColor}
                fontWeight="bold"
                textShadow="0 2px 10px rgba(0,0,0,0.8)"
                transition="transform 0.3s ease"
                _groupHover={{ transform: 'translateY(-5px)' }}
              >
                {title}
              </Heading>
            </Stack>
          </Box>
        </MotionBox>

        {/* Project Modal */}
        <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
      </>
    )
  }
)

export default FeaturedCard
