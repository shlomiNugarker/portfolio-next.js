import { Stack } from '@chakra-ui/react'
import FeaturedCard from './FeaturedCard'
import { useTranslation } from 'next-i18next'
import { projects } from 'config/projects.ts'
import { memo } from 'react'
import { StyledHeading } from 'components/Core/Typography'
import { AnimatedContainer, AnimatedBox } from 'components/Core/Animated'
import { ResponsiveGrid } from 'components/Core/Grid'

/**
 * FeaturedWorksSection displays a grid of project cards
 * Features responsive layout, elegant design and detailed popups
 */
const FeaturedWorksSection = () => {
  const { t, i18n } = useTranslation('common')
  const language =
    (i18n.language as 'en' | 'he' | 'ar' | 'ru' | 'fr' | 'es' | 'de') || 'en'
  const projectsLang = projects[language] || projects.en

  return (
    <Stack
      width={{ base: '100%', sm: '95%', md: '90%', lg: '85%', xl: '90%' }}
      height="100%"
      spacing={{ base: 6, sm: 8, md: 10, lg: 12 }}
      alignItems="center"
      justifyContent="center"
      mx="auto"
      px={{ base: 3, sm: 4, md: 6, lg: 8 }}
      py={{ base: 6, sm: 8, md: 10, lg: 12 }}
    >
      <StyledHeading
        size={{ base: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }}
        width="100%"
        textAlign="center"
        sx={{ fontVariantCaps: 'small-caps' }}
        mb={{ base: 4, sm: 6, md: 8 }}
      >
        {t('projects.title')}
      </StyledHeading>

      <AnimatedContainer width="100%" delay={0.2}>
        <ResponsiveGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
          spacing={{ base: 6, sm: 8, md: 10 }}
          width="100%"
          justifyContent="center"
        >
          {projectsLang.map((project, idx) => (
            <AnimatedBox
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              width="100%"
              height="100%"
              delay={idx * 0.1}
              role="group"
            >
              <FeaturedCard
                idx={idx + 1}
                title={project.title}
                description={project.description}
                src={project.imgs[0]}
                height={{
                  base: '200px',
                  sm: '220px',
                  md: '250px',
                  lg: '280px',
                  xl: '300px',
                }}
                ctaUrl={project.linkDemo}
                objectPosition="center"
                project={project}
              />
            </AnimatedBox>
          ))}
        </ResponsiveGrid>
      </AnimatedContainer>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
