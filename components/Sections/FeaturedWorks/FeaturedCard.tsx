import { memo, useCallback, useState } from 'react'
import {
  Box,
  Image,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Heading,
  Badge,
  useDisclosure,
  Text,
  Icon,
  Flex,
  Tooltip,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaVideo,
  FaInfoCircle,
} from 'react-icons/fa'
import styles from './styles.module.css'
import ProjectModal from './ProjectModal'
import { Project, FeaturedCardProps } from './types'
import { fadeInUp, pulse } from 'config/animations'
import { HoverAnimation, MotionBox } from 'components/Core'

/**
 * Enhanced FeaturedCard with modern design and improved modal integration
 */
const FeaturedCard = memo(
  ({ height, src, title, objectPosition, project }: FeaturedCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation('common')
    const [isHovered, setIsHovered] = useState(false)

    const cardBg = useColorModeValue('white', 'gray.800')
    const titleColor = useColorModeValue('white', 'white')
    const overlayBg = useColorModeValue(
      'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.4) 100%)',
      'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.5) 100%)'
    )

    const handleCardClick = useCallback(() => {
      onOpen()
    }, [onOpen])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick()
        }
      },
      [handleCardClick]
    )

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false)
    }, [])

    // Determine category badge color
    const getCategoryColor = (category?: Project['category']) => {
      if (!category) return 'purple'

      const primaryCategory = Array.isArray(category) ? category[0] : category

      switch (primaryCategory) {
        case 'web':
          return 'blue'
        case 'mobile':
          return 'green'
        case 'ai':
          return 'purple'
        case 'game':
          return 'red'
        case 'design':
          return 'pink'
        case 'backend':
          return 'orange'
        case 'fullstack':
          return 'teal'
        default:
          return 'gray'
      }
    }

    const categoryColor = getCategoryColor(project.category)
    const categoryLabel = project.category
      ? Array.isArray(project.category)
        ? project.category[0]
        : project.category
      : 'web'

    return (
      <>
        <HoverAnimation
          as="article"
          scale={1.03}
          y={-8}
          duration={0.4}
          position="relative"
          borderRadius="2xl"
          overflow="hidden"
          cursor="pointer"
          boxShadow="xl"
          bg={cardBg}
          onClick={handleCardClick}
          height={height}
          width="100%"
          role="button"
          aria-label={`Open ${title} project details`}
          tabIndex={0}
          className={styles.featureCard}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          _focus={{
            outline: '3px solid',
            outlineColor: 'blue.400',
            outlineOffset: '2px',
          }}
          _hover={{
            boxShadow: '2xl',
          }}
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {/* Category badge */}
          <Badge
            position="absolute"
            top={4}
            left={4}
            zIndex={10}
            colorScheme={categoryColor}
            textTransform="uppercase"
            fontSize="xs"
            fontWeight="bold"
            px={2}
            py={1}
            borderRadius="md"
            opacity={0.9}
            letterSpacing="0.5px"
            boxShadow="md"
          >
            {t(`categories.${categoryLabel}`) || categoryLabel}
          </Badge>

          {/* Featured badge if applicable */}
          {project.featured && (
            <Badge
              position="absolute"
              top={4}
              right={4}
              zIndex={10}
              colorScheme="yellow"
              textTransform="uppercase"
              fontSize="xs"
              fontWeight="bold"
              px={2}
              py={1}
              borderRadius="md"
              opacity={0.9}
              letterSpacing="0.5px"
              boxShadow="md"
            >
              {t('projects.featured') || 'Featured'}
            </Badge>
          )}

          {/* Animated gradient background */}
          <Box
            className={styles.gradientBg}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={0}
          />

          {/* Project Image with blur-up loading effect */}
          <Box position="relative" height="100%" width="100%" overflow="hidden">
            <Image
              src={src}
              alt={`${title} project screenshot`}
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition={objectPosition || 'center top'}
              loading="lazy"
              transition="all 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
              transform={isHovered ? 'scale(1.08)' : 'scale(1)'}
              filter={isHovered ? 'brightness(0.8)' : 'brightness(1)'}
              fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23999999'%3ELoading...%3C/text%3E%3C/svg%3E"
            />

            {/* Subtle overlay gradient always visible */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 50%)"
              zIndex={1}
            />
          </Box>

          {/* Content Overlay */}
          <AnimatePresence>
            <MotionBox
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              background={overlayBg}
              display="flex"
              alignItems="flex-end"
              p={6}
              zIndex={2}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0.3,
                backdropFilter: isHovered ? 'blur(3px)' : 'blur(0px)',
              }}
              transition={{ duration: 0.4 }}
              sx={{
                '@media (hover: none)': {
                  opacity: 0.85,
                },
              }}
            >
              <Stack spacing={4} align="center" width="100%" textAlign="center">
                {/* Project Title with animation */}
                <MotionBox
                  animate={{
                    y: isHovered ? -8 : 0,
                    transition: { duration: 0.4 },
                  }}
                >
                  <Heading
                    as="h3"
                    size={{ base: 'lg', sm: 'xl' }}
                    color={titleColor}
                    fontWeight="800"
                    textShadow="0 4px 12px rgba(0,0,0,0.8)"
                    lineHeight="1.2"
                    mb={2}
                  >
                    {title}
                  </Heading>

                  {/* Project subtitle if available */}
                  {project.subtitle && (
                    <Text
                      color="whiteAlpha.900"
                      fontSize="md"
                      fontWeight="medium"
                      textShadow="0 2px 4px rgba(0,0,0,0.6)"
                      mb={3}
                    >
                      {project.subtitle}
                    </Text>
                  )}
                </MotionBox>

                {/* Technology Tags Preview with animation */}
                <MotionBox
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                    scale: isHovered ? 1 : 0.95,
                    transition: { duration: 0.4, delay: 0.1 },
                  }}
                >
                  <Wrap justify="center" spacing={2} opacity={0.95} maxW="90%">
                    {project.tags.slice(0, 3).map((tag) => (
                      <WrapItem key={tag}>
                        <Badge
                          fontSize="xs"
                          colorScheme="blue"
                          variant="solid"
                          px={3}
                          py={1}
                          borderRadius="full"
                          textTransform="none"
                          fontWeight="600"
                          bg="rgba(59, 130, 246, 0.9)"
                          color="white"
                          backdropFilter="blur(4px)"
                          boxShadow="sm"
                        >
                          {tag}
                        </Badge>
                      </WrapItem>
                    ))}
                    {project.tags.length > 3 && (
                      <WrapItem>
                        <Badge
                          fontSize="xs"
                          variant="solid"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontWeight="600"
                          bg="rgba(107, 114, 128, 0.9)"
                          color="white"
                          backdropFilter="blur(4px)"
                          boxShadow="sm"
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      </WrapItem>
                    )}
                  </Wrap>
                </MotionBox>

                {/* Quick action links */}
                <MotionBox
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 20,
                    transition: { duration: 0.4, delay: 0.2 },
                  }}
                >
                  <Flex justify="center" mt={2} gap={4}>
                    {project.linkDemo && (
                      <Tooltip label={t('projects.view_demo') || 'View Demo'}>
                        <Box
                          as="span"
                          p={2}
                          borderRadius="full"
                          bg="whiteAlpha.300"
                          _hover={{ bg: 'whiteAlpha.400' }}
                          transition="all 0.2s"
                        >
                          <Icon
                            as={FaExternalLinkAlt}
                            color="white"
                            boxSize={4}
                          />
                        </Box>
                      </Tooltip>
                    )}

                    {project.linkGitHub && (
                      <Tooltip label={t('projects.view_code') || 'View Code'}>
                        <Box
                          as="span"
                          p={2}
                          borderRadius="full"
                          bg="whiteAlpha.300"
                          _hover={{ bg: 'whiteAlpha.400' }}
                          transition="all 0.2s"
                        >
                          <Icon as={FaGithub} color="white" boxSize={4} />
                        </Box>
                      </Tooltip>
                    )}

                    {project.videoUrl && (
                      <Tooltip
                        label={t('projects.view_video') || 'Watch Video'}
                      >
                        <Box
                          as="span"
                          p={2}
                          borderRadius="full"
                          bg="whiteAlpha.300"
                          _hover={{ bg: 'whiteAlpha.400' }}
                          transition="all 0.2s"
                        >
                          <Icon as={FaVideo} color="white" boxSize={4} />
                        </Box>
                      </Tooltip>
                    )}

                    <Tooltip label={t('projects.more_info') || 'More Info'}>
                      <Box
                        as="span"
                        p={2}
                        borderRadius="full"
                        bg="whiteAlpha.300"
                        _hover={{ bg: 'whiteAlpha.400' }}
                        transition="all 0.2s"
                      >
                        <Icon as={FaInfoCircle} color="white" boxSize={4} />
                      </Box>
                    </Tooltip>
                  </Flex>
                </MotionBox>

                {/* Call to action text */}
                <MotionBox
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    transition: { duration: 0.3, delay: 0.3 },
                  }}
                  variants={pulse}
                  initial="initial"
                  animate={isHovered ? 'animate' : 'initial'}
                >
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.900"
                    fontWeight="500"
                    textShadow="0 2px 6px rgba(0,0,0,0.6)"
                  >
                    {t('projects.click_to_explore') ||
                      'Click to explore project'}
                  </Text>
                </MotionBox>
              </Stack>
            </MotionBox>
          </AnimatePresence>
        </HoverAnimation>

        {/* Enhanced Modal */}
        <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
      </>
    )
  }
)

FeaturedCard.displayName = 'FeaturedCard'

export default FeaturedCard
