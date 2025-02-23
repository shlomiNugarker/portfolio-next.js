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
  isMobile?: boolean
  project: Project
}

const variants = {
  normal: { opacity: 0.85 },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const MotionImage = motion(Image)

const CoverImage = ({
  height,
  src,
  title,
  objectPosition,
}: {
  height: string | ResponsiveValue<any>
  src: string
  title: string
  objectPosition?: string
}) =>
  src ? (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.85}
      whileHover={variants.hover}
      whileTap={variants.tap}
      fallback={<Skeleton height={height} width="100%" />}
    />
  ) : null

const ProjectDescription: React.FC<{
  idx: number
  title: string
  description: string
  ctaUrl: string
  project: Project
}> = ({ idx, title, description, ctaUrl, project }) => {
  const buttons = [
    { label: 'View Project', url: ctaUrl },
    { label: 'View Code', url: project.linkGitHub },
    ...(project.videoUrl
      ? [{ label: 'View Video', url: project.videoUrl }]
      : []),
  ]

  // בחירת צבעים בהתאם למצב הצבע
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const descriptionColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Container
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Stack spacing={1} w="full">
        <Heading
          as="h3"
          fontSize={{ base: 'lg', md: 'xl', '2xl': '2xl' }}
          fontWeight="bold"
          letterSpacing="wider"
          textTransform="uppercase"
          color={titleColor}
          mb={1}
        >
          <Text
            as="span"
            color="teal.500"
            fontSize={{ base: 'md', md: 'lg' }}
            mr={2}
          >
            #{idx < 10 ? `0${idx}` : idx}
          </Text>
          {title}
        </Heading>
        <Divider borderColor="gray.400" />
      </Stack>
      <Text
        fontSize={{ base: 'xs', md: 'sm' }}
        mt={2}
        lineHeight="short"
        color={descriptionColor}
        wordBreak="break-word"
      >
        {description}
      </Text>
      <Wrap justify="flex-start" mt={2} spacing={2}>
        {buttons.map((btn, index) => (
          <WrapItem key={index}>
            <Button
              variant="outline"
              size="xs"
              as="a"
              href={btn.url}
              target="_blank"
              rel="noreferrer"
            >
              {btn.label}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  )
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  ctaUrl,
  project,
}) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')

  return (
    <Box
      bg={bg}
      borderRadius="sm"
      borderWidth="1px"
      overflow="hidden"
      boxShadow="sm"
      m={1}
    >
      {src && (
        <CoverImage
          height={height}
          src={src}
          title={title}
          objectPosition={objectPosition}
        />
      )}
      {/* החלק של הפירוט עכשיו תופס את כל רוחב הכרטיס */}
      <ProjectDescription
        idx={idx}
        title={title}
        description={description}
        ctaUrl={ctaUrl}
        project={project}
      />
    </Box>
  )
}

export default FeaturedCard
