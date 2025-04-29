import { Stack, Box, useColorModeValue } from '@chakra-ui/react'
import FeaturedCard from './FeaturedCard'
import { useTranslation } from 'next-i18next'
import { projects } from 'config/projects.ts'
import { memo } from 'react'
import { StyledHeading } from 'components/Core/Typography'
import { AnimatedContainer, AnimatedBox } from 'components/Core/Animated'
import { ResponsiveGrid } from 'components/Core/Grid'
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
  const bgColor = useColorModeValue('white', 'gray.800')

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

      <AnimatedContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        width="100%"
      >
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
      </AnimatedContainer>

      <AnimatedContainer width="100%" delay={0.2}>
        <Box
          className={styles.glassCard}
          p={{ base: 4, sm: 6, md: 8 }}
          borderRadius="xl"
          width="100%"
        >
          <ResponsiveGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
            spacing={{ base: 8, sm: 10, md: 12 }}
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
                className={styles.techItem}
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
              </AnimatedBox>
            ))}
          </ResponsiveGrid>
        </Box>
      </AnimatedContainer>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
