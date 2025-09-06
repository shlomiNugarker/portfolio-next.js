import {
  Stack,
  Box,
  useColorModeValue,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react'
import { useState, useMemo, useCallback } from 'react'
import FeaturedCard from './FeaturedCard'
import { useTranslation } from 'next-i18next'
import { projects } from 'config/projects.ts'
import { memo } from 'react'
import {
  StyledHeading,
  AnimatedElement,
  StaggeredContainer,
} from 'components/Core'
import { ResponsiveGrid } from 'components/Core'
import { Project, ProjectCategory } from './types'
import ProjectFilters from './ProjectFilters'
import { FaLongArrowAltDown } from 'react-icons/fa'
import styles from './styles.module.css'

/**
 * FeaturedWorksSection displays a grid of project cards
 * Features responsive layout, elegant design and detailed popups
 */
const FeaturedWorksSection = () => {
  const { t, i18n } = useTranslation('common')
  const language =
    (i18n.language as 'en' | 'he' | 'ar' | 'ru' | 'fr' | 'es' | 'de') || 'en'
  const projectsLang = projects[language] || projects.en

  // State for filtering and pagination
  const [selectedCategories, setSelectedCategories] = useState<
    ProjectCategory[]
  >([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleProjects, setVisibleProjects] = useState(6)

  // Extract all unique categories and tags from projects
  const allCategories = useMemo(() => {
    const categories = new Set<ProjectCategory>()
    projectsLang.forEach((project) => {
      if (project.category) {
        if (Array.isArray(project.category)) {
          project.category.forEach((cat) => categories.add(cat))
        } else {
          categories.add(project.category)
        }
      }
    })
    return Array.from(categories)
  }, [projectsLang])

  // If no categories are defined in projects, use these defaults
  const defaultCategories: ProjectCategory[] = [
    'web',
    'mobile',
    'ai',
    'backend',
    'fullstack',
  ]

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projectsLang.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }, [projectsLang])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projectsLang.filter((project) => {
      // Filter by categories if any are selected
      if (selectedCategories.length > 0) {
        const projectCategories = Array.isArray(project.category)
          ? project.category
          : project.category
          ? [project.category]
          : []

        if (
          !projectCategories.some((cat) => selectedCategories.includes(cat))
        ) {
          return false
        }
      }

      // Filter by tags if any are selected
      if (selectedTags.length > 0) {
        if (!selectedTags.some((tag) => project.tags.includes(tag))) {
          return false
        }
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = project.title.toLowerCase().includes(query)
        const matchesDescription = project.description
          .toLowerCase()
          .includes(query)
        const matchesTags = project.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        )

        if (!matchesTitle && !matchesDescription && !matchesTags) {
          return false
        }
      }

      return true
    })
  }, [projectsLang, selectedCategories, selectedTags, searchQuery])

  // Handle loading more projects
  const handleLoadMore = useCallback(() => {
    setVisibleProjects((prev) => prev + 3)
  }, [])

  // Current projects to display
  const currentProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleProjects)
  }, [filteredProjects, visibleProjects])

  // Check if there are more projects to load
  const hasMoreProjects = filteredProjects.length > visibleProjects

  return (
    <Stack
      maxW={{ base: '99%', lg: '80%', xl: '85%' }}
      height="100%"
      spacing={{ base: 8, sm: 10, md: 12, lg: 16 }}
      alignItems="center"
      px={{ base: 3, sm: 5, md: 8, lg: 10 }}
      py={{ base: 8, sm: 10, md: 12, lg: 16 }}
      position="relative"
      className={styles.smoothScroll}
    >
      {/* Background effects */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.5"
        pointerEvents="none"
        zIndex="-1"
        className={styles.skillModal}
      />

      <AnimatedElement animation="fadeIn" width="100%">
        <StyledHeading
          size={{ base: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }}
          width="100%"
          textAlign="center"
          sx={{ fontVariantCaps: 'small-caps', position: 'relative' }}
          mb={{ base: 6, sm: 8, md: 10 }}
          className={styles.gradientText}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '3px',
            width: '100px',
            background:
              'linear-gradient(90deg, transparent, cyan.400, transparent)',
            borderRadius: 'full',
          }}
        >
          {t('projects.title')}
        </StyledHeading>
      </AnimatedElement>

      {/* Project filters */}
      <ProjectFilters
        categories={selectedCategories}
        allCategories={
          allCategories.length > 0 ? allCategories : defaultCategories
        }
        allTags={allTags}
        onCategoryChange={setSelectedCategories}
        onSearchChange={setSearchQuery}
        onTagsChange={setSelectedTags}
      />

      <AnimatedElement animation="fadeInUp" width="100%" delay={0.2}>
        <Box
          className={styles.glassCard}
          p={{ base: 4, sm: 6, md: 8 }}
          borderRadius="xl"
          width="100%"
        >
          {currentProjects.length > 0 ? (
            <StaggeredContainer staggerAmount={0.1} animation="fadeInUp">
              <ResponsiveGrid
                columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
                spacing={{ base: 8, sm: 10, md: 12 }}
                width="100%"
                justifyContent="center"
              >
                {currentProjects.map((project, idx) => (
                  <AnimatedElement
                    key={project.id}
                    animation="fadeInUp"
                    delay={idx * 0.1}
                    width="100%"
                    height="100%"
                  >
                    <FeaturedCard
                      idx={idx + 1}
                      title={project.title}
                      description={project.description}
                      src={project.imgs[0]}
                      height={{
                        base: '220px',
                        sm: '240px',
                        md: '270px',
                        lg: '300px',
                        xl: '320px',
                      }}
                      ctaUrl={project.linkDemo}
                      objectPosition="center"
                      project={project}
                    />
                  </AnimatedElement>
                ))}
              </ResponsiveGrid>
            </StaggeredContainer>
          ) : (
            <Flex
              direction="column"
              align="center"
              justify="center"
              py={16}
              bg={useColorModeValue('gray.50', 'gray.700')}
              borderRadius="lg"
            >
              <Text fontSize="lg" mb={4}>
                {t('projects.no_results') || 'No projects match your filters'}
              </Text>
              <Button
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedTags([])
                  setSearchQuery('')
                }}
                colorScheme="blue"
                variant="outline"
              >
                {t('projects.clear_filters') || 'Clear filters'}
              </Button>
            </Flex>
          )}

          {/* Load more button */}
          {hasMoreProjects && (
            <Flex justify="center" mt={10}>
              <Button
                onClick={handleLoadMore}
                variant="outline"
                colorScheme="blue"
                size="lg"
                rightIcon={<FaLongArrowAltDown />}
                _hover={{
                  transform: 'translateY(2px)',
                }}
              >
                {t('projects.load_more') || 'Load more'}
              </Button>
            </Flex>
          )}
        </Box>
      </AnimatedElement>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
