import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Skeleton,
  Text,
  Button,
  Container,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
  Heading,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { easing, DURATIONS } from 'config/animations'
import { memo } from 'react'

export type Project = {
  id: number
  title: string
  tags: string[]
  imgs: string[]
  videoUrl: string
  description: string
  linkDemo: string
  linkGitHub: string
}

export type FeaturedCardProps = {
  height: string | ResponsiveValue<any>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  project: Project
}

const MotionImage = motion(Image)
const MotionBox = motion(Box)

const CoverImage = memo(
  ({
    height,
    src,
    title,
    objectPosition,
  }: {
    height: string | ResponsiveValue<any>
    src: string
    title: string
    objectPosition?: string
  }) => (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.9}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      fallback={<Skeleton height={height} width="100%" />}
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
  }: {
    idx: number
    title: string
    description: string
    ctaUrl: string
    project: Project
  }) => {
    const buttons = [
      { label: 'View Project', url: ctaUrl },
      { label: 'View Code', url: project.linkGitHub },
      ...(project.videoUrl
        ? [{ label: 'View Video', url: project.videoUrl }]
        : []),
    ]

    const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    const descriptionColor = useColorModeValue('gray.600', 'gray.300')

    return (
      <Container
        p={6}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Stack spacing={2} w="full">
          <Heading
            as="h3"
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight="bold"
            letterSpacing="wider"
            color={titleColor}
          >
            <Text
              as="span"
              color="teal.500"
              fontSize={{ base: 'md', md: 'xl' }}
              mr={2}
            >
              #{idx < 10 ? `0${idx}` : idx}
            </Text>
            {title}
          </Heading>
          <Divider borderColor="gray.400" />
        </Stack>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mt={4}
          color={descriptionColor}
          wordBreak="break-word"
        >
          {description}
        </Text>
        <Wrap justify="flex-start" mt={4} spacing={3}>
          {buttons.map((btn, index) => (
            <WrapItem key={index}>
              <Button
                variant="solid"
                size="sm"
                as="a"
                href={btn.url}
                target="_blank"
                rel="noreferrer"
                bg="teal.500"
                color="white"
                _hover={{ bg: 'teal.600' }}
              >
                {btn.label}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
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
    const bg = useColorModeValue('white', 'gray.800')

    return (
      <MotionBox
        bg={bg}
        borderRadius="lg"
        borderWidth="1px"
        overflow="hidden"
        boxShadow="lg"
        whileHover={{ boxShadow: 'xl', transform: 'translateY(-3px)' }}
        transition="all 0.3s ease"
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
