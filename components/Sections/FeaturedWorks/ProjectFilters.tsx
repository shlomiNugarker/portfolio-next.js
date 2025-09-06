import { useState, useCallback, memo } from 'react'
import {
  Box,
  HStack,
  Button,
  useColorModeValue,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tooltip,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Collapse,
} from '@chakra-ui/react'
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'
import { ProjectCategory } from './types'
import { AnimatedElement } from 'components/Core/Animations'

interface ProjectFiltersProps {
  categories: ProjectCategory[]
  allCategories: ProjectCategory[]
  allTags: string[]
  onCategoryChange: (categories: ProjectCategory[]) => void
  onSearchChange: (search: string) => void
  onTagsChange: (tags: string[]) => void
}

const ProjectFilters = memo(
  ({
    categories,
    allCategories,
    allTags,
    onCategoryChange,
    onSearchChange,
    onTagsChange,
  }: ProjectFiltersProps) => {
    const { t } = useTranslation('common')
    const [search, setSearch] = useState('')
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    // Responsive design
    const isMobile = useBreakpointValue({ base: true, md: false })
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' })

    // Theme colors
    const buttonBg = useColorModeValue('gray.100', 'gray.700')
    const buttonHoverBg = useColorModeValue('gray.200', 'gray.600')
    const activeBg = useColorModeValue('blue.50', 'blue.900')
    const activeBorderColor = useColorModeValue('blue.500', 'blue.400')
    const tagBg = useColorModeValue('gray.100', 'gray.700')

    // Handle category selection
    const handleCategoryClick = useCallback(
      (category: ProjectCategory) => {
        onCategoryChange(
          categories.includes(category)
            ? categories.filter((c) => c !== category)
            : [...categories, category]
        )
      },
      [categories, onCategoryChange]
    )

    // Handle search input
    const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
        onSearchChange(value)
      },
      [onSearchChange]
    )

    // Handle tag selection
    const handleTagClick = useCallback(
      (tag: string) => {
        const newTags = selectedTags.includes(tag)
          ? selectedTags.filter((t) => t !== tag)
          : [...selectedTags, tag]

        setSelectedTags(newTags)
        onTagsChange(newTags)
      },
      [selectedTags, onTagsChange]
    )

    // Clear all filters
    const clearFilters = useCallback(() => {
      setSearch('')
      setSelectedTags([])
      onCategoryChange([])
      onSearchChange('')
      onTagsChange([])
    }, [onCategoryChange, onSearchChange, onTagsChange])

    // Toggle filters visibility on mobile
    const toggleFilters = useCallback(() => {
      setIsFiltersOpen(!isFiltersOpen)
    }, [isFiltersOpen])

    // Category mapping for display
    const categoryLabels: Record<ProjectCategory, string> = {
      web: t('categories.web') || 'Web',
      mobile: t('categories.mobile') || 'Mobile',
      ai: t('categories.ai') || 'AI',
      game: t('categories.game') || 'Game',
      design: t('categories.design') || 'Design',
      backend: t('categories.backend') || 'Backend',
      fullstack: t('categories.fullstack') || 'Fullstack',
      other: t('categories.other') || 'Other',
    }

    return (
      <AnimatedElement animation="fadeIn" width="100%">
        <Box
          width="100%"
          mb={6}
          px={{ base: 2, md: 4 }}
          py={4}
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="sm"
          position="relative"
        >
          {/* Mobile filter toggle */}
          {isMobile && (
            <Flex justify="space-between" align="center" mb={4}>
              <InputGroup size="md" maxW="70%">
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder={
                    t('projects.search_placeholder') || 'Search projects...'
                  }
                  value={search}
                  onChange={handleSearchChange}
                  borderRadius="full"
                />
              </InputGroup>
              <Tooltip label={isFiltersOpen ? 'Hide filters' : 'Show filters'}>
                <IconButton
                  aria-label="Toggle filters"
                  icon={isFiltersOpen ? <FaTimes /> : <FaFilter />}
                  onClick={toggleFilters}
                  size="md"
                  colorScheme="blue"
                  variant="ghost"
                />
              </Tooltip>
            </Flex>
          )}

          {/* Desktop search and filters */}
          {!isMobile && (
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              align={{ base: 'flex-start', md: 'center' }}
              mb={4}
              gap={4}
            >
              <InputGroup size="md" maxW={{ base: '100%', md: '300px' }}>
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder={
                    t('projects.search_placeholder') || 'Search projects...'
                  }
                  value={search}
                  onChange={handleSearchChange}
                  borderRadius="full"
                />
              </InputGroup>

              {(categories.length > 0 || selectedTags.length > 0 || search) && (
                <Button
                  leftIcon={<FaTimes />}
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  ml={2}
                >
                  {t('projects.clear_filters') || 'Clear filters'}
                </Button>
              )}
            </Flex>
          )}

          {/* Filters content - collapsible on mobile */}
          <Collapse in={!isMobile || isFiltersOpen} animateOpacity>
            <Box mt={4}>
              {/* Categories */}
              <Box mb={4}>
                <Wrap spacing={2}>
                  {allCategories.map((category) => (
                    <WrapItem key={category}>
                      <Button
                        size={buttonSize}
                        variant="outline"
                        bg={categories.includes(category) ? activeBg : buttonBg}
                        borderColor={
                          categories.includes(category)
                            ? activeBorderColor
                            : 'transparent'
                        }
                        _hover={{ bg: buttonHoverBg }}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {categoryLabels[category]}
                      </Button>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>

              {/* Popular tags */}
              {allTags.length > 0 && (
                <Box>
                  <Wrap spacing={2}>
                    {allTags.slice(0, 15).map((tag) => (
                      <WrapItem key={tag}>
                        <Tag
                          size={buttonSize}
                          borderRadius="full"
                          variant={
                            selectedTags.includes(tag) ? 'solid' : 'subtle'
                          }
                          colorScheme={
                            selectedTags.includes(tag) ? 'blue' : 'gray'
                          }
                          bg={selectedTags.includes(tag) ? undefined : tagBg}
                          cursor="pointer"
                          onClick={() => handleTagClick(tag)}
                        >
                          <TagLabel>{tag}</TagLabel>
                          {selectedTags.includes(tag) && (
                            <TagCloseButton
                              onClick={(e) => {
                                e.stopPropagation()
                                handleTagClick(tag)
                              }}
                            />
                          )}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              )}
            </Box>
          </Collapse>
        </Box>
      </AnimatedElement>
    )
  }
)

ProjectFilters.displayName = 'ProjectFilters'

export default ProjectFilters
