import { memo } from 'react'
import {
  Box,
  Heading,
  HStack,
  Badge,
  Text,
  useColorModeValue,
  VStack,
  Flex,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket } from 'react-icons/fa'
import { Project } from '../types'
import { fadeInUp } from 'config/animations'
import useThemeStyles from 'hooks/theme/useThemeStyles'

const MotionBox = motion(Box)

interface ProjectModalHeaderProps {
  project: Project
  borderColor: string
}

/**
 * Modern project modal header with enhanced visual design
 */
const ProjectModalHeader = memo(
  ({ project, borderColor }: ProjectModalHeaderProps) => {
    const { getPrimaryColor, getTextColor, getMutedTextColor } =
      useThemeStyles()
    const headerBg = useColorModeValue('gray.50', 'gray.900')
    const gradientBg = useColorModeValue(
      'linear(to-r, blue.50, purple.50, pink.50)',
      'linear(to-r, blue.900, purple.900, pink.900)'
    )

    return (
      <Box
        width="100%"
        bg={headerBg}
        borderBottomWidth="1px"
        borderBottomColor={borderColor}
        position="relative"
        overflow="hidden"
      >
        {/* Background Gradient */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient={gradientBg}
          opacity={0.3}
        />

        <Box position="relative" zIndex={1} py={6} px={6}>
          <MotionBox
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            textAlign="center"
          >
            <VStack spacing={3}>
              {/* Project Icon */}
              <Box
                p={3}
                borderRadius="full"
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                border="2px solid"
                borderColor={getPrimaryColor()}
              >
                <Icon as={FaRocket} w={6} h={6} color={getPrimaryColor()} />
              </Box>

              {/* Project Title */}
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                fontWeight="700"
                color={getTextColor()}
                letterSpacing="-0.025em"
                lineHeight="1.2"
                textAlign="center"
                maxW="4xl"
              >
                {project.title}
              </Heading>

              {/* Project Meta */}
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                align="center"
                justify="center"
                gap={4}
                wrap="wrap"
              >
                <HStack spacing={3}>
                  <Icon as={FaCode} color={getMutedTextColor()} />
                  <Badge
                    colorScheme="blue"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="600"
                  >
                    {project.tags[0]}
                  </Badge>
                </HStack>

                <Text
                  color={getMutedTextColor()}
                  fontSize="sm"
                  fontWeight="500"
                >
                  {project.tags.length} Technologies • {project.imgs.length}{' '}
                  Images
                  {project.videoUrl && ' • Video Demo'}
                </Text>
              </Flex>

              {/* Primary Tags */}
              <HStack spacing={2} justify="center" flexWrap="wrap">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    colorScheme="purple"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="500"
                    textTransform="none"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge
                    variant="solid"
                    colorScheme="gray"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="500"
                  >
                    +{project.tags.length - 4}
                  </Badge>
                )}
              </HStack>
            </VStack>
          </MotionBox>
        </Box>
      </Box>
    )
  }
)

ProjectModalHeader.displayName = 'ProjectModalHeader'

export default ProjectModalHeader
