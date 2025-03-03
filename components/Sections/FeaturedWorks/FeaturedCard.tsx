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
import { memo, useMemo } from 'react'
import { useTranslation } from 'next-i18next'

export type Project = {
  id: number
  title: string
  tags: string[]
  imgs: string[]
  videoUrl?: string
  description: string
  linkDemo: string
  linkGitHub: string
}

export type FeaturedCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }: Omit<FeaturedCardProps, 'height' | 'src' | 'objectPosition'>) => {
    const { t } = useTranslation('common')

    const buttons = useMemo(
      () => [
        { label: t('projects.view_project'), url: ctaUrl },
        { label: t('projects.view_code'), url: project.linkGitHub },
        ...(project.videoUrl
          ? [{ label: t('projects.view_video'), url: project.videoUrl }]
          : []),
      ],
      [ctaUrl, project, t]
    )

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
          {buttons.map(({ label, url }, index) => (
            <WrapItem key={index}>
              <Button
                variant="solid"
                size="sm"
                as="a"
                href={url}
                target="_blank"
                rel="noreferrer"
                bg="teal.500"
                color="white"
                _hover={{ bg: 'teal.600' }}
              >
                {label}
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
