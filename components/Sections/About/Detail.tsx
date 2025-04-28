import { memo } from 'react'
import { List, ListItem, ListIcon, Stack } from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.css'
import { StyledText } from 'components/Core/Typography'
import { ResponsiveGrid } from 'components/Core/Grid'
import { AnimatedBox } from 'components/Core/Animated'
import useThemeStyles from 'hooks/theme/useThemeStyles'

/**
 * About Detail component displays information about skills and technologies
 */
const Detail = () => {
  const { t } = useTranslation('common')
  const { getPrimaryColor } = useThemeStyles()

  const technologies = [
    { icon: SiJavascript, label: t('tech.js') },
    { icon: SiTypescript, label: t('tech.ts') },
    { icon: SiNodedotjs, label: t('tech.node') },
    { icon: SiReact, label: t('tech.react') },
    { icon: SiNodedotjs, label: t('tech.next') },
  ]

  return (
    <AnimatedBox
      as={Stack}
      textAlign="center"
      width={{ base: '100%', lg: '70%' }}
      padding={4}
      marginY={5}
      borderRadius="md"
      className={styles.skillModal}
      alignItems="center"
      delay={0.2}
    >
      <StyledText variant="description" fontSize="lg" fontWeight="bold" mb={6}>
        {t('description')}
      </StyledText>

      <ResponsiveGrid columns={{ base: 1, md: 1 }} spacing={4} centerItems>
        <List
          display="flex"
          flexWrap="wrap"
          justifyItems="center"
          justifyContent="center"
          width="100%"
        >
          {technologies.map(({ icon, label }) => (
            <ListItem
              key={label}
              display="flex"
              alignItems="center"
              m={3}
              borderRadius="md"
            >
              <ListIcon
                as={icon}
                color={getPrimaryColor()}
                fontSize="2em"
                mr={2}
              />
              {label}
            </ListItem>
          ))}
        </List>
      </ResponsiveGrid>

      <StyledText variant="description" fontWeight="bold" fontSize="lg" mt={6}>
        {t('call_to_action')}
      </StyledText>
    </AnimatedBox>
  )
}

export default memo(Detail)
