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
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      textAlign="center"
    >
      <StyledHeading
        size="2xl"
        width="100%"
        textAlign="center"
        sx={{ fontVariantCaps: 'small-caps' }}
        mb={{ base: 4, md: 6 }}
      >
        {t('projects.title')}
      </StyledHeading>

      <AnimatedContainer width="100%" delay={0.2}>
        <ResponsiveGrid
          columns={{ base: 1, sm: 2, md: 2, xl: 3 }}
          spacing={{ base: 6, md: 8 }}
        >
          {projectsLang.map((project, idx) => (
            <AnimatedBox
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              width="100%"
              height="100%"
              delay={idx * 0.1}
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
            </AnimatedBox>
          ))}
        </ResponsiveGrid>
      </AnimatedContainer>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
