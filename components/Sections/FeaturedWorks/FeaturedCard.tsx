import { useState, memo, useMemo } from 'react'
import {
  Box,
  Image,
  Divider,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Heading,
  Badge,
  Collapse,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import {
  FaChevronDown,
  FaChevronUp,
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

const MotionBox = motion(Box)
const MotionImage = motion(Image)

const CoverImage = memo(
  ({
    height,
    src,
    title,
    objectPosition,
  }: Omit<FeaturedCardProps, 'idx' | 'description' | 'ctaUrl' | 'project'>) => (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition || 'center'}
      loading="lazy"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      borderTopRadius="lg"
    />
  )
)

const ProjectDescription = memo(
  ({
    idx,
    title,
    description,
    ctaUrl,
    project,
  }: Omit<FeaturedCardProps, 'height' | 'src' | 'objectPosition'>) => {
    const { t } = useTranslation('common')
    const [isExpanded, setIsExpanded] = useState(false)

    const buttons = useMemo(
      () => [
        {
          label: t('projects.view_project'),
          url: ctaUrl,
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
      [ctaUrl, project, t]
    )

    const titleColor = useColorModeValue('gray.700', 'whiteAlpha.900')
    const descriptionColor = useColorModeValue('gray.600', 'gray.300')
    const bgBadge = useColorModeValue('gray.100', 'gray.700')

    return (
      <Stack p={4} spacing={3} width="100%" textAlign="center">
        <Heading
          as="h3"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="semibold"
          color={titleColor}
        >
          {title}
        </Heading>
        <Divider borderColor={useColorModeValue('gray.200', 'gray.600')} />

        <Wrap justify="center">
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

        <Button
          size="sm"
          variant="ghost"
          colorScheme="teal"
          rightIcon={isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded
            ? t('projects.close_details')
            : t('projects.show_details')}
        </Button>

        <Collapse in={isExpanded} animateOpacity>
          <Stack spacing={3} mt={3}>
            <Text fontSize="sm" color={descriptionColor}>
              {description}
            </Text>

            {project.features && project.features.length > 0 && (
              <Stack spacing={2} align="center">
                <Heading as="h4" fontSize="md" color={titleColor}>
                  {t('projects.features')}
                </Heading>
                <Wrap justify="center">
                  {project.features.map((feature, i) => (
                    <WrapItem key={i}>
                      <Badge
                        fontSize="sm"
                        colorScheme="purple"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        {feature}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Stack>
            )}

            <Wrap justify="center" mt={2}>
              {buttons.map(({ label, url, icon }, index) => (
                <WrapItem key={index}>
                  <Button
                    as="a"
                    href={url}
                    target="_blank"
                    size="sm"
                    colorScheme="blue"
                    leftIcon={icon}
                  >
                    {label}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Collapse>
      </Stack>
    )
  }
)

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
    const borderColor = useColorModeValue('gray.200', 'gray.700')

    return (
      <MotionBox
        bg={bg}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
        overflow="hidden"
        boxShadow="md"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        width="100%"
      >
        <CoverImage
          height={height}
          src={src}
          title={title}
          objectPosition={objectPosition}
        />
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          ctaUrl={ctaUrl}
          project={project}
        />
      </MotionBox>
    )
  }
)

export default FeaturedCard
