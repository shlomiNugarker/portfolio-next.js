import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Skeleton,
  Text,
  SimpleGrid,
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
      objectFit="contain"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.75}
      whileHover={variants.hover}
      whileTap={variants.tap}
      fallback={<Skeleton height={height} width="100%" />}
    />
  ) : null

const ProjectDescription: React.FC<any> = ({
  idx,
  title,
  description,
  ctaUrl,
  isLeft,
  project,
}) => {
  const buttons = [
    { label: 'View Project', url: ctaUrl },
    { label: 'View Code', url: project.linkGitHub },
    ...(project.videoUrl
      ? [{ label: 'View Video', url: project.videoUrl }]
      : []),
  ]

  // שימוש בערכי צבעים בהתאם למצב הצבע (בהיר/כהה)
  const titleColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const descriptionColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Container p={5} display="flex" flexDirection="column" alignItems="center">
      <Stack spacing={2} w="full" textAlign={isLeft ? 'right' : 'left'}>
        <Heading
          as="h3"
          fontSize={{ base: 'xl', md: '2xl', '2xl': '3xl' }}
          fontWeight="bold"
          letterSpacing="wider"
          textTransform="uppercase"
          color={titleColor}
        >
          <Text
            as="span"
            color="teal.500"
            fontSize={{ base: 'lg', md: 'xl' }}
            mr={2}
          >
            #{idx < 10 ? `0${idx}` : idx}
          </Text>
          {title}
        </Heading>
        <Divider borderColor="gray.400" />
      </Stack>
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        mt={3}
        lineHeight="tall"
        color={descriptionColor}
        wordBreak="break-word"
      >
        {description}
      </Text>
      <Wrap justify="center" mt={4}>
        {buttons.map((btn, index) => (
          <WrapItem key={index}>
            <Button
              variant="outline"
              size="sm"
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
  isMobile,
  project,
}) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')

  return (
    <Box
      bg={bg}
      borderRadius="md"
      borderWidth="1px"
      overflow="hidden"
      boxShadow="md"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={0}
        flexDirection={{ base: 'column-reverse', md: 'row' }}
      >
        {isLeftImage && (
          <CoverImage
            height={height}
            src={src}
            title={title}
            objectPosition={objectPosition}
          />
        )}
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          ctaUrl={ctaUrl}
          project={project}
          isLeft={isLeftImage}
        />
        {!isLeftImage && (
          <CoverImage
            height={height}
            src={src}
            title={title}
            objectPosition={objectPosition}
          />
        )}
      </SimpleGrid>
    </Box>
  )
}

export default FeaturedCard
