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
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaVideo,
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
const ProjectModal = memo(({ project, isOpen, onClose }: { project: Project, isOpen: boolean, onClose: () => void }) => {
  const { t } = useTranslation('common')
  
  // Shared color values
  const titleColor = useColorModeValue('gray.700', 'whiteAlpha.900')
  const descriptionColor = useColorModeValue('gray.600', 'gray.300')
  const bgBadge = useColorModeValue('gray.100', 'gray.700')
  
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
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={5}>
            {/* Image Gallery */}
            <Box borderRadius="md" overflow="hidden">
              <Image 
                src={project.imgs[0]} 
                alt={project.title}
                width="100%"
                height="auto"
                objectFit="cover"
              />
            </Box>
            
            {/* Tags */}
            <Wrap justify="center" mt={2}>
              {project.tags.map((tag, i) => (
                <WrapItem key={i}>
                  <Badge
                    variant="outline"
                    fontSize="xs"
                    color="teal.500"
                    borderColor="teal.500"
                    bg={bgBadge}
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {tag}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
            
            {/* Description */}
            <Text fontSize="md" color={descriptionColor}>
              {project.description}
            </Text>
            
            {/* Features */}
            {project.features && project.features.length > 0 && (
              <Stack spacing={2}>
                <Heading as="h4" fontSize="md" color={titleColor}>
                  {t('projects.features')}
                </Heading>
                <Stack spacing={2}>
                  {project.features.map((feature, i) => (
                    <Badge 
                      key={i}
                      fontSize="sm" 
                      colorScheme="purple" 
                      px={3} 
                      py={1} 
                      borderRadius="full"
                    >
                      {feature}
                    </Badge>
                  ))}
                </Stack>
              </Stack>
            )}
          </Stack>
        </ModalBody>
        
        <ModalFooter>
          <Wrap justify="center" spacing={3}>
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
})

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
    const bgHover = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')
    const { isOpen, onOpen, onClose } = useDisclosure()

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
            transition: { duration: 0.3 }
          }}
        >
          {/* Project Image */}
          <Image
            src={src}
            alt={title}
            height="250px"
            width="100%"
            objectFit="cover"
            objectPosition={objectPosition || 'center'}
            transition="all 0.5s"
            _groupHover={{ transform: 'scale(1.1)' }}
          />
          
          {/* Overlay on hover with title */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.600"
            opacity="0"
            transition="all 0.3s"
            _hover={{ opacity: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              size="md"
              color="white"
              textAlign="center"
              px={4}
              textShadow="0px 2px 5px rgba(0,0,0,0.5)"
            >
              {title}
            </Heading>
          </Box>
        </MotionBox>

        {/* Project Modal */}
        <ProjectModal 
          project={project} 
          isOpen={isOpen} 
          onClose={onClose} 
        />
      </>
    )
  }
)

export default FeaturedCard
