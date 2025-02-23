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

const ProjectDescription: React.FC<{
  idx: number
  title: string
  description: string
  ctaUrl: string
  isLeft: boolean
  project: Project
}> = ({ idx, title, description, ctaUrl, isLeft, project }) => {
  return (
    <Container p={5} display="flex" flexDirection="column" alignItems="center">
      <Stack spacing={2} w="full" textAlign={isLeft ? 'right' : 'left'}>
        <Text
          fontSize={{ base: 'md', md: 'lg', '2xl': '2xl' }}
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          <Text as="span" color="teal.500" fontSize="md">
            #{idx < 10 ? `0${idx}` : idx}{' '}
          </Text>
          {title}
        </Text>
        <Divider borderColor="gray.400" />
      </Stack>
      <Text fontSize="sm" mt={3} wordBreak="break-word">
        {description}
      </Text>
      <Wrap justify="center" mt={4}>
        <WrapItem>
          <Button
            variant="outline"
            size="sm"
            as="a"
            href={ctaUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            variant="outline"
            size="sm"
            as="a"
            href={project.linkGitHub}
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </Button>
        </WrapItem>
        {project.videoUrl && (
          <WrapItem>
            <Button
              variant="outline"
              size="sm"
              as="a"
              href={project.videoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Video
            </Button>
          </WrapItem>
        )}
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
