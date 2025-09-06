import { memo } from 'react'
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Wrap,
  WrapItem,
  useColorModeValue,
  Divider,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { FaCode, FaInfoCircle, FaStar, FaCheck, FaTags } from 'react-icons/fa'
import { Project } from '../types'
import { stagger, fadeInUp } from 'config/animations'
import useThemeStyles from 'hooks/theme/useThemeStyles'

// Custom scrollbar styles for details panel
const getScrollbarStyles = (isDark: boolean) => ({
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
    borderRadius: '3px',
    margin: '8px 0',
  },
  '&::-webkit-scrollbar-thumb': {
    background: isDark
      ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)',
    borderRadius: '3px',
    transition: 'background 0.2s ease',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: isDark
      ? 'linear-gradient(180deg, rgba(99, 179, 237, 0.3) 0%, rgba(99, 179, 237, 0.2) 100%)'
      : 'linear-gradient(180deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 100%)',
  },
  '&::-webkit-scrollbar-thumb:active': {
    background: isDark
      ? 'linear-gradient(180deg, rgba(99, 179, 237, 0.4) 0%, rgba(99, 179, 237, 0.3) 100%)'
      : 'linear-gradient(180deg, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.3) 100%)',
  },
  // Firefox scrollbar styling
  scrollbarWidth: 'thin',
  scrollbarColor: isDark
    ? 'rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.03)'
    : 'rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.03)',
})

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ProjectDetailsPanelProps {
  project: Project
  borderColor: string
}

/**
 * Enhanced project details panel with improved typography and visual hierarchy
 */
const ProjectDetailsPanel = memo(
  ({ project, borderColor }: ProjectDetailsPanelProps) => {
    const { t } = useTranslation('common')
    const {
      getTextColor,
      getMutedTextColor,
      getPrimaryColor,
      getCardBgColor,
      isDarkMode,
    } = useThemeStyles()

    const panelBg = useColorModeValue('white', 'gray.900')
    const sectionBg = useColorModeValue('gray.50', 'gray.800')
    const tagBg = useColorModeValue('blue.50', 'blue.900')
    const tagColor = useColorModeValue('blue.700', 'blue.200')
    const featureBg = useColorModeValue('green.50', 'green.900')
    const featureColor = useColorModeValue('green.700', 'green.200')

    return (
      <Box
        flex={{ base: '1', lg: '0.6' }}
        height="100%"
        minHeight={0}
        overflowY="auto"
        bg={panelBg}
        borderLeftWidth={{ base: 0, lg: '1px' }}
        borderLeftColor={borderColor}
        sx={getScrollbarStyles(isDarkMode)}
      >
        <MotionVStack
          spacing={8}
          p={8}
          align="stretch"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Description Section */}
          <MotionBox variants={fadeInUp}>
            <VStack align="stretch" spacing={4}>
              <HStack spacing={3} align="center">
                <Icon as={FaInfoCircle} color={getPrimaryColor()} w={5} h={5} />
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="700"
                  color={getTextColor()}
                >
                  {t('projects.description_label') || 'About This Project'}
                </Heading>
              </HStack>

              <Box
                p={5}
                bg={sectionBg}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={borderColor}
              >
                <Text
                  fontSize="md"
                  color={getTextColor()}
                  lineHeight="1.7"
                  letterSpacing="0.01em"
                >
                  {project.description}
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* Technologies Section */}
          <MotionBox variants={fadeInUp}>
            <VStack align="stretch" spacing={4}>
              <HStack spacing={3} align="center">
                <Icon as={FaTags} color={getPrimaryColor()} w={5} h={5} />
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="700"
                  color={getTextColor()}
                >
                  {t('projects.technologies') || 'Technologies Used'}
                </Heading>
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  borderRadius="full"
                  px={3}
                  py={1}
                  fontSize="xs"
                  fontWeight="600"
                >
                  {project.tags.length}
                </Badge>
              </HStack>

              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
                {project.tags.map((tag, index) => (
                  <MotionBox
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    <Box
                      p={3}
                      bg={tagBg}
                      color={tagColor}
                      borderRadius="lg"
                      textAlign="center"
                      fontWeight="600"
                      fontSize="sm"
                      border="1px solid"
                      borderColor={useColorModeValue('blue.200', 'blue.700')}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                      cursor="default"
                    >
                      {tag}
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* Features Section */}
          {project.features && project.features.length > 0 && (
            <MotionBox variants={fadeInUp} flex={1}>
              <VStack align="stretch" spacing={4} height="100%">
                <HStack spacing={3} align="center">
                  <Icon as={FaStar} color={getPrimaryColor()} w={5} h={5} />
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="700"
                    color={getTextColor()}
                  >
                    {t('projects.features') || 'Key Features'}
                  </Heading>
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    borderRadius="full"
                    px={3}
                    py={1}
                    fontSize="xs"
                    fontWeight="600"
                  >
                    {project.features.length}
                  </Badge>
                </HStack>

                <VStack spacing={3} align="stretch" flex={1}>
                  {project.features.map((feature, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <HStack
                        p={4}
                        bg={featureBg}
                        borderRadius="lg"
                        spacing={3}
                        border="1px solid"
                        borderColor={useColorModeValue(
                          'green.200',
                          'green.700'
                        )}
                        _hover={{
                          borderColor: useColorModeValue(
                            'green.300',
                            'green.600'
                          ),
                          bg: useColorModeValue('green.100', 'green.800'),
                        }}
                        transition="all 0.2s"
                        cursor="default"
                        align="flex-start"
                      >
                        <Icon
                          as={FaCheck}
                          color={featureColor}
                          w={4}
                          h={4}
                          mt={0.5}
                          flexShrink={0}
                        />
                        <Text
                          fontSize="sm"
                          color={getTextColor()}
                          fontWeight="500"
                          lineHeight="1.6"
                          flex={1}
                        >
                          {feature}
                        </Text>
                      </HStack>
                    </MotionBox>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          )}

        </MotionVStack>
      </Box>
    )
  }
)

ProjectDetailsPanel.displayName = 'ProjectDetailsPanel'

export default ProjectDetailsPanel
