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
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.css' // Import the CSS module

export type Project = {
  id: number
  title: string
  tags: string[]
  imgs: string[]
  videoUrl?: string
  description: string
  linkDemo: string
  linkGitHub: string
  features?: string[] // מאפיין אופציונלי לתכונות
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
      opacity={0.95}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25, ease: 'easeOut' },
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

    const titleColor = useColorModeValue('gray.700', 'whiteAlpha.900')
    const descriptionColor = useColorModeValue('gray.600', 'gray.300')
    const bgBadge = useColorModeValue('gray.100', 'gray.700')

    return (
      <Container
        p={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Stack spacing={2} w="full">
          <Text
            as="span"
            color="teal.500"
            fontSize={{ base: 'lg', md: 'xl' }}
            mr={2}
          >
            #{idx < 10 ? `0${idx}` : idx}
          </Text>
          <Heading
            as="h3"
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="semibold"
            letterSpacing="wider"
            color={titleColor}
          >
            {title}
          </Heading>
          <Divider borderColor={useColorModeValue('gray.200', 'gray.600')} />
        </Stack>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mt={4}
          color={descriptionColor}
          wordBreak="break-word"
        >
          {description}
        </Text>
        <Wrap justify="center" mt={4} spacing={2}>
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
        {project.features && project.features.length > 0 && (
          <Box
            mt={4}
            display={'flex'}
            flexDirection={'column'}
            alignItems="center"
            width="100%"
          >
            <Heading as="h4" size="sm" mb={2} color={titleColor}>
              {t('projects.features', 'Features')}
            </Heading>
            <List
              spacing={2}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              width="100%"
              alignItems="center"
              flexWrap={'wrap'}
              textAlign={'center'}
            >
              {project.features.map((feature, idx) => (
                <ListItem
                  key={idx}
                  fontSize="sm"
                  color={descriptionColor}
                  width={'50%'}
                >
                  {feature}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <Wrap justify="center" mt={4} spacing={3} width="100%">
          {buttons.map(({ label, url }, index) => (
            <WrapItem key={index}>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href={url}
                target="_blank"
                rel="noreferrer"
                color="white"
                bg="teal.500"
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
    const bg = useColorModeValue('gray.50', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.700')

    return (
      <MotionBox
        className={styles.featureCard}
        bg={bg}
        borderRadius="md"
        borderWidth="1px"
        borderColor={borderColor}
        overflow="hidden"
        boxShadow="sm"
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
