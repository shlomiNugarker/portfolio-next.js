import { memo } from 'react'
import {
  Box,
  Heading,
  Text,
  Stack,
  Divider,
  Badge,
  Wrap,
  WrapItem,
  useColorModeValue,
  Icon,
  Flex,
  Tooltip,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import {
  FaCalendarAlt,
  FaUsers,
  FaBuilding,
  FaQuoteLeft,
  FaLayerGroup,
  FaDatabase,
  FaServer,
  FaCode,
  FaCogs,
} from 'react-icons/fa'
import { Project } from '../types'
import { AnimatedElement } from 'components/Core'

interface ProjectDetailsProps {
  project: Project
}

const ProjectDetails = memo(({ project }: ProjectDetailsProps) => {
  const { t } = useTranslation('common')

  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const dividerColor = useColorModeValue('gray.200', 'gray.700')
  const sectionBg = useColorModeValue('gray.50', 'gray.800')
  const badgeBg = useColorModeValue('blue.50', 'blue.900')
  const badgeColor = useColorModeValue('blue.600', 'blue.200')

  // Format tech stack for display
  const techStackSections = [
    { title: 'Frontend', icon: FaCode, items: project.techStack?.frontend },
    { title: 'Backend', icon: FaServer, items: project.techStack?.backend },
    { title: 'Database', icon: FaDatabase, items: project.techStack?.database },
    { title: 'DevOps', icon: FaCogs, items: project.techStack?.devops },
    { title: 'Other', icon: FaLayerGroup, items: project.techStack?.other },
  ]

  const hasTechStack =
    project.techStack &&
    Object.values(project.techStack).some((items) => items && items.length > 0)
  const hasMetadata =
    project.completionDate ||
    project.teamSize ||
    project.clientName ||
    project.testimonial

  return (
    <Box
      height="100%"
      overflowY="auto"
      px={{ base: 4, md: 6 }}
      py={6}
      css={{
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '3px',
        },
      }}
    >
      <Stack spacing={6}>
        {/* Project description */}
        <AnimatedElement animation="fadeIn" delay={0.1}>
          <Heading as="h3" size="md" color={headingColor} mb={3}>
            {t('projects.about_project') || 'About this project'}
          </Heading>
          <Text color={textColor} fontSize="md" whiteSpace="pre-line">
            {project.longDescription || project.description}
          </Text>
        </AnimatedElement>

        {/* Project features */}
        {project.features && project.features.length > 0 && (
          <AnimatedElement animation="fadeIn" delay={0.2}>
            <Divider borderColor={dividerColor} my={2} />
            <Heading as="h3" size="md" color={headingColor} mb={3} mt={4}>
              {t('projects.key_features') || 'Key Features'}
            </Heading>
            <Stack spacing={2}>
              {project.features.map((feature, idx) => (
                <Flex key={idx} align="flex-start" gap={3}>
                  <Box
                    boxSize={2}
                    borderRadius="full"
                    bg="blue.400"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text color={textColor}>{feature}</Text>
                </Flex>
              ))}
            </Stack>
          </AnimatedElement>
        )}

        {/* Tech stack */}
        {hasTechStack && (
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <Divider borderColor={dividerColor} my={2} />
            <Heading as="h3" size="md" color={headingColor} mb={4} mt={4}>
              {t('projects.tech_stack') || 'Technology Stack'}
            </Heading>

            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              gap={4}
            >
              {techStackSections.map((section, idx) =>
                section.items && section.items.length > 0 ? (
                  <GridItem key={idx}>
                    <Box p={4} bg={sectionBg} borderRadius="md" boxShadow="sm">
                      <Flex align="center" mb={3}>
                        <Icon as={section.icon} color="blue.500" mr={2} />
                        <Text fontWeight="bold" fontSize="sm">
                          {t(
                            `projects.tech_stack_${section.title.toLowerCase()}`
                          ) || section.title}
                        </Text>
                      </Flex>
                      <Wrap spacing={2}>
                        {section.items.map((item, i) => (
                          <WrapItem key={i}>
                            <Badge
                              bg={badgeBg}
                              color={badgeColor}
                              px={2}
                              py={1}
                              borderRadius="md"
                              fontSize="xs"
                            >
                              {item}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>
                  </GridItem>
                ) : null
              )}
            </Grid>
          </AnimatedElement>
        )}

        {/* Project metadata */}
        {hasMetadata && (
          <AnimatedElement animation="fadeIn" delay={0.4}>
            <Divider borderColor={dividerColor} my={2} />
            <Heading as="h3" size="md" color={headingColor} mb={4} mt={4}>
              {t('projects.project_details') || 'Project Details'}
            </Heading>

            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
              gap={4}
            >
              {project.completionDate && (
                <GridItem>
                  <Flex align="center" mb={2}>
                    <Tooltip
                      label={t('projects.completion_date') || 'Completion Date'}
                    >
                      <Box mr={2}>
                        <Icon as={FaCalendarAlt} color="blue.500" />
                      </Box>
                    </Tooltip>
                    <Text fontSize="sm" color={textColor}>
                      {project.completionDate}
                    </Text>
                  </Flex>
                </GridItem>
              )}

              {project.teamSize && (
                <GridItem>
                  <Flex align="center" mb={2}>
                    <Tooltip label={t('projects.team_size') || 'Team Size'}>
                      <Box mr={2}>
                        <Icon as={FaUsers} color="blue.500" />
                      </Box>
                    </Tooltip>
                    <Text fontSize="sm" color={textColor}>
                      {project.teamSize}{' '}
                      {t('projects.team_members') || 'team members'}
                    </Text>
                  </Flex>
                </GridItem>
              )}

              {project.clientName && (
                <GridItem>
                  <Flex align="center" mb={2}>
                    <Tooltip label={t('projects.client') || 'Client'}>
                      <Box mr={2}>
                        <Icon as={FaBuilding} color="blue.500" />
                      </Box>
                    </Tooltip>
                    <Text fontSize="sm" color={textColor}>
                      {project.clientName}
                    </Text>
                  </Flex>
                </GridItem>
              )}
            </Grid>

            {/* Testimonial */}
            {project.testimonial && (
              <Box
                mt={4}
                p={4}
                bg={sectionBg}
                borderRadius="md"
                borderLeft="4px solid"
                borderLeftColor="blue.400"
              >
                <Flex align="flex-start">
                  <Icon
                    as={FaQuoteLeft}
                    color="blue.400"
                    boxSize={5}
                    mr={3}
                    mt={1}
                  />
                  <Box>
                    <Text
                      fontSize="sm"
                      fontStyle="italic"
                      color={textColor}
                      mb={2}
                    >
                      "{project.testimonial.text}"
                    </Text>
                    <Text fontSize="sm" fontWeight="bold">
                      {project.testimonial.author}
                      {project.testimonial.role && (
                        <Text as="span" fontWeight="normal" ml={1}>
                          — {project.testimonial.role}
                        </Text>
                      )}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            )}
          </AnimatedElement>
        )}

        {/* All tags */}
        <AnimatedElement animation="fadeIn" delay={0.5}>
          <Divider borderColor={dividerColor} my={2} />
          <Heading as="h3" size="md" color={headingColor} mb={3} mt={4}>
            {t('projects.technologies_used') || 'Technologies Used'}
          </Heading>
          <Wrap spacing={2} mt={2}>
            {project.tags.map((tag) => (
              <WrapItem key={tag}>
                <Badge
                  px={2}
                  py={1}
                  borderRadius="md"
                  bg={badgeBg}
                  color={badgeColor}
                  fontSize="xs"
                >
                  {tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </AnimatedElement>
      </Stack>
    </Box>
  )
})

ProjectDetails.displayName = 'ProjectDetails'

export default ProjectDetails
