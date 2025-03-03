import { Heading, Text, Stack, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { useTranslation } from 'next-i18next'

import projectsEn from '../../../config/projectsEn'
import projectsHe from '../../../config/projectsHe'
import projectsAr from '../../../config/projectsAr'
import projectsRu from '../../../config/projectsRu'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languageProjectsMap: Record<string, any[]> = {
  en: projectsEn,
  he: projectsHe,
  ar: projectsAr,
  ru: projectsRu,
}

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const { t, i18n } = useTranslation('common')

  const projects = languageProjectsMap[i18n.language] || projectsEn

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {t('projects.title')}
      </Heading>

      <Text variant="description">{t('projects.description')}</Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, idx) => (
          <MotionGridItem
            key={project.id}
            colSpan={6}
            variants={fadeInUpSlower}
          >
            <FeaturedCard
              idx={idx + 1}
              title={project.title}
              description={project.description}
              src={project.imgs[0]}
              height={{ base: '130px', md: '225px', '2xl': '300px' }}
              ctaUrl={project.linkDemo}
              objectPosition="right 20%"
              project={project}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack>
  )
}

export default FeaturedWorksSection
