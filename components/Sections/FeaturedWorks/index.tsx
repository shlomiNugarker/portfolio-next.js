import { Heading, Stack, SimpleGrid, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { useTranslation } from 'next-i18next'
import { projects } from 'config/projects.ts'
import { memo } from 'react'

const MotionBox = motion(Box)
const MotionSimpleGrid = motion(SimpleGrid)

const FeaturedWorksSection = () => {
  const { t, i18n } = useTranslation('common')
  const language =
    (i18n.language as 'en' | 'he' | 'ar' | 'ru' | 'fr' | 'es' | 'de') || 'en'
  const projectsLang = projects[language] || projects.en

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      textAlign="center"
    >
      <Heading
        size="2xl"
        width="100%"
        textAlign="center"
        sx={{ fontVariantCaps: 'small-caps' }}
        mb={{ base: 4, md: 6 }}
      >
        {t('projects.title')}
      </Heading>

      <MotionSimpleGrid
        columns={{ base: 1, sm: 2, md: 2, xl: 2 }}
        spacing={{ base: 4, md: 6 }}
        width="100%"
        variants={galleryStagger}
        initial="initial"
        animate="animate"
      >
        {projectsLang.map((project, idx) => (
          <MotionBox
            key={project.id}
            variants={fadeInUpSlower}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            width="100%"
          >
            <FeaturedCard
              idx={idx + 1}
              title={project.title}
              description={project.description}
              src={project.imgs[0]}
              height="250px"
              ctaUrl={project.linkDemo}
              objectPosition="center"
              project={project}
            />
          </MotionBox>
        ))}
      </MotionSimpleGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
